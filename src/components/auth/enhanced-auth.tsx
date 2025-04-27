"use client"

import * as React from "react"
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Loader2, Lock, Mail, User, Key, Shield, AlertCircle, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Login form schema
const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters",
  }),
  rememberMe: z.boolean().optional(),
})

// Registration form schema
const registerSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters",
  }).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
    message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
  }),
  confirmPassword: z.string().min(8, {
    message: "Password must be at least 8 characters",
  }),
  terms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions",
  }),
  role: z.string().min(1, { message: "Please select a role" }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
})

// Password reset form schema
const resetPasswordSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
})

// Two-factor authentication schema
const twoFactorSchema = z.object({
  code: z.string().min(6, { message: "Please enter a valid authentication code" }).max(6),
})

type LoginFormValues = z.infer<typeof loginSchema>
type RegisterFormValues = z.infer<typeof registerSchema>
type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>
type TwoFactorFormValues = z.infer<typeof twoFactorSchema>

export function EnhancedAuth() {
  const [activeTab, setActiveTab] = useState("login")
  const [authState, setAuthState] = useState<'initial' | 'loading' | 'success' | 'error' | '2fa'>('initial')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  
  // Login form
  const loginForm = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  })

  // Register form
  const registerForm = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
      role: "",
    },
  })

  // Reset password form
  const resetPasswordForm = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      email: "",
    },
  })

  // Two-factor authentication form
  const twoFactorForm = useForm<TwoFactorFormValues>({
    resolver: zodResolver(twoFactorSchema),
    defaultValues: {
      code: "",
    },
  })

  // Handle login submission
  function onLoginSubmit(values: LoginFormValues) {
    setAuthState('loading')
    setErrorMessage(null)
    setSuccessMessage(null)
    
    // Simulate API call
    setTimeout(() => {
      // Simulate 2FA requirement for specific email
      if (values.email === "2fa@example.com") {
        setAuthState('2fa')
        return
      }
      
      // Simulate successful login
      console.log(values)
      setAuthState('success')
      setSuccessMessage("Login successful! Redirecting...")
      
      // Reset form after successful login
      setTimeout(() => {
        setAuthState('initial')
        setSuccessMessage(null)
      }, 3000)
    }, 1500)
  }

  // Handle registration submission
  function onRegisterSubmit(values: RegisterFormValues) {
    setAuthState('loading')
    setErrorMessage(null)
    setSuccessMessage(null)
    
    // Simulate API call
    setTimeout(() => {
      // Simulate email already exists error
      if (values.email === "exists@example.com") {
        setAuthState('error')
        setErrorMessage("An account with this email already exists.")
        return
      }
      
      // Simulate successful registration
      console.log(values)
      setAuthState('success')
      setSuccessMessage("Registration successful! Please check your email to verify your account.")
      
      // Reset form and switch to login tab after successful registration
      setTimeout(() => {
        setAuthState('initial')
        setSuccessMessage(null)
        setActiveTab('login')
        registerForm.reset()
      }, 3000)
    }, 1500)
  }

  // Handle password reset submission
  function onResetPasswordSubmit(values: ResetPasswordFormValues) {
    setAuthState('loading')
    setErrorMessage(null)
    setSuccessMessage(null)
    
    // Simulate API call
    setTimeout(() => {
      // Simulate account not found error
      if (values.email === "notfound@example.com") {
        setAuthState('error')
        setErrorMessage("No account found with this email address.")
        return
      }
      
      // Simulate successful password reset request
      console.log(values)
      setAuthState('success')
      setSuccessMessage("Password reset instructions have been sent to your email.")
      
      // Reset form after successful password reset request
      setTimeout(() => {
        setAuthState('initial')
        setSuccessMessage(null)
        setActiveTab('login')
        resetPasswordForm.reset()
      }, 3000)
    }, 1500)
  }

  // Handle two-factor authentication submission
  function onTwoFactorSubmit(values: TwoFactorFormValues) {
    setAuthState('loading')
    setErrorMessage(null)
    setSuccessMessage(null)
    
    // Simulate API call
    setTimeout(() => {
      // Simulate invalid code error
      if (values.code !== "123456") {
        setAuthState('error')
        setErrorMessage("Invalid authentication code. Please try again.")
        return
      }
      
      // Simulate successful two-factor authentication
      console.log(values)
      setAuthState('success')
      setSuccessMessage("Two-factor authentication successful! Redirecting...")
      
      // Reset form after successful two-factor authentication
      setTimeout(() => {
        setAuthState('initial')
        setSuccessMessage(null)
        setActiveTab('login')
        twoFactorForm.reset()
      }, 3000)
    }, 1500)
  }

  // Handle tab change
  function handleTabChange(value: string) {
    setActiveTab(value)
    setAuthState('initial')
    setErrorMessage(null)
    setSuccessMessage(null)
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Authentication</CardTitle>
        <CardDescription className="text-center">
          Secure authentication with multiple options
        </CardDescription>
      </CardHeader>
      <CardContent>
        {authState === '2fa' ? (
          <div className="space-y-4">
            <div className="flex justify-center mb-4">
              <Shield className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-lg font-medium text-center">Two-Factor Authentication</h3>
            <p className="text-sm text-muted-foreground text-center">
              Please enter the 6-digit code from your authenticator app.
            </p>
            
            {errorMessage && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{errorMessage}</AlertDescription>
              </Alert>
            )}
            
            {successMessage && (
              <Alert className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-900/30">
                <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                <AlertTitle>Success</AlertTitle>
                <AlertDescription>{successMessage}</AlertDescription>
              </Alert>
            )}
            
            <Form {...twoFactorForm}>
              <form onSubmit={twoFactorForm.handleSubmit(onTwoFactorSubmit)} className="space-y-4">
                <FormField
                  control={twoFactorForm.control}
                  name="code"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Authentication Code</FormLabel>
                      <FormControl>
                        <div className="flex items-center">
                          <Key className="mr-2 h-4 w-4 text-muted-foreground" />
                          <Input placeholder="123456" {...field} maxLength={6} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="flex justify-between">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setAuthState('initial')}
                    disabled={authState === 'loading'}
                  >
                    Back to Login
                  </Button>
                  <Button type="submit" disabled={authState === 'loading'}>
                    {authState === 'loading' ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Verifying
                      </>
                    ) : (
                      "Verify"
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        ) : (
          <Tabs value={activeTab} onValueChange={handleTabChange}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
              <TabsTrigger value="reset">Reset</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login" className="space-y-4 mt-4">
              {errorMessage && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{errorMessage}</AlertDescription>
                </Alert>
              )}
              
              {successMessage && (
                <Alert className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-900/30">
                  <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                  <AlertTitle>Success</AlertTitle>
                  <AlertDescription>{successMessage}</AlertDescription>
                </Alert>
              )}
              
              <Form {...loginForm}>
                <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} className="space-y-4">
                  <FormField
                    control={loginForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <div className="flex items-center">
                            <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="john.doe@example.com" {...field} />
                          </div>
                        </FormControl>
                        <FormDescription>
                          Use 2fa@example.com to test two-factor authentication
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={loginForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <div className="flex items-center">
                            <Lock className="mr-2 h-4 w-4 text-muted-foreground" />
                            <Input type="password" placeholder="********" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={loginForm.control}
                    name="rememberMe"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            Remember me
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full" disabled={authState === 'loading'}>
                    {authState === 'loading' ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Logging in
                      </>
                    ) : (
                      "Login"
                    )}
                  </Button>
                </form>
              </Form>
            </TabsContent>
            
            <TabsContent value="register" className="space-y-4 mt-4">
              {errorMessage && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{errorMessage}</AlertDescription>
                </Alert>
              )}
              
              {successMessage && (
                <Alert className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-900/30">
                  <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                  <AlertTitle>Success</AlertTitle>
                  <AlertDescription>{successMessage}</AlertDescription>
                </Alert>
              )}
              
              <Form {...registerForm}>
                <form onSubmit={registerForm.handleSubmit(onRegisterSubmit)} className="space-y-4">
                  <FormField
                    control={registerForm.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <div className="flex items-center">
                            <User className="mr-2 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="John Doe" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={registerForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <div className="flex items-center">
                            <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="john.doe@example.com" {...field} />
                          </div>
                        </FormControl>
                        <FormDescription>
                          Use exists@example.com to test error handling
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={registerForm.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Role</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a role" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="user">User</SelectItem>
                            <SelectItem value="admin">Administrator</SelectItem>
                            <SelectItem value="developer">Developer</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={registerForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <div className="flex items-center">
                            <Lock className="mr-2 h-4 w-4 text-muted-foreground" />
                            <Input type="password" placeholder="********" {...field} />
                          </div>
                        </FormControl>
                        <FormDescription>
                          Password must contain at least 8 characters, including uppercase, lowercase, number, and special character
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={registerForm.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                          <div className="flex items-center">
                            <Lock className="mr-2 h-4 w-4 text-muted-foreground" />
                            <Input type="password" placeholder="********" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={registerForm.control}
                    name="terms"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            I agree to the terms and conditions
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full" disabled={authState === 'loading'}>
                    {authState === 'loading' ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Registering
                      </>
                    ) : (
                      "Register"
                    )}
                  </Button>
                </form>
              </Form>
            </TabsContent>
            
            <TabsContent value="reset" className="space-y-4 mt-4">
              {errorMessage && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{errorMessage}</AlertDescription>
                </Alert>
              )}
              
              {successMessage && (
                <Alert className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-900/30">
                  <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                  <AlertTitle>Success</AlertTitle>
                  <AlertDescription>{successMessage}</AlertDescription>
                </Alert>
              )}
              
              <div className="space-y-2 mb-4">
                <h3 className="text-lg font-medium">Reset Password</h3>
                <p className="text-sm text-muted-foreground">
                  Enter your email address and we'll send you a link to reset your password.
                </p>
              </div>
              
              <Form {...resetPasswordForm}>
                <form onSubmit={resetPasswordForm.handleSubmit(onResetPasswordSubmit)} className="space-y-4">
                  <FormField
                    control={resetPasswordForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <div className="flex items-center">
                            <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="john.doe@example.com" {...field} />
                          </div>
                        </FormControl>
                        <FormDescription>
                          Use notfound@example.com to test error handling
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full" disabled={authState === 'loading'}>
                    {authState === 'loading' ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending reset link
                      </>
                    ) : (
                      "Send Reset Link"
                    )}
                  </Button>
                </form>
              </Form>
            </TabsContent>
          </Tabs>
        )}
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <div className="text-xs text-muted-foreground text-center">
          <p>This is a demo authentication component. No actual authentication is performed.</p>
          <p>For testing two-factor authentication, use the code: 123456</p>
        </div>
      </CardFooter>
    </Card>
  );
}