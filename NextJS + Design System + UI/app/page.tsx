'use client'

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Toggle } from "@/components/ui/toggle"
import { Progress } from "@/components/ui/progress"
import { Slider } from "@/components/ui/slider"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator 
} from "@/components/ui/dropdown"
import { Icon } from "@/components/ui/icon"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { DesignSystemDevTools } from "@/components/design-system/dev-tools"
import { ChevronDown, Heart, Star, Settings, User, Mail, Palette, Type, Grid3X3 } from "lucide-react"

export default function DesignSystemShowcase() {
  const [progress, setProgress] = React.useState(33)
  const [sliderValue, setSliderValue] = React.useState([50])
  const [isToggled, setIsToggled] = React.useState(false)
  const [isChecked, setIsChecked] = React.useState(false)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Design System Showcase</h1>
              <p className="text-muted-foreground mt-2">
                Automated 8px grid system with accessibility validation
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" asChild>
                <a href="/templates/landing">View Templates</a>
              </Button>
              <Badge variant="success" className="text-sm">
                ✅ Grid Compliant
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8">
          
          {/* Design Tokens Section */}
          <div className="grid gap-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Palette className="h-6 w-6" />
              Design Tokens
            </h2>
            
            {/* Colors */}
            <Card>
              <CardHeader>
                <CardTitle>Color Palette</CardTitle>
                <CardDescription>
                  Semantic color system with consistent contrast ratios
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Primary Colors */}
                <div>
                  <h4 className="text-sm font-semibold mb-3">Primary Colors</h4>
                  <div className="grid grid-cols-5 gap-2">
                    <div className="space-y-2">
                      <div className="h-16 w-full bg-primary-100 rounded border"></div>
                      <p className="text-xs text-center">100</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-16 w-full bg-primary-300 rounded border"></div>
                      <p className="text-xs text-center">300</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-16 w-full bg-primary rounded border"></div>
                      <p className="text-xs text-center">500</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-16 w-full bg-primary-700 rounded border"></div>
                      <p className="text-xs text-center">700</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-16 w-full bg-primary-900 rounded border"></div>
                      <p className="text-xs text-center">900</p>
                    </div>
                  </div>
                </div>

                {/* Secondary Colors */}
                <div>
                  <h4 className="text-sm font-semibold mb-3">Secondary Colors</h4>
                  <div className="grid grid-cols-5 gap-2">
                    <div className="space-y-2">
                      <div className="h-16 w-full bg-secondary-100 rounded border"></div>
                      <p className="text-xs text-center">100</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-16 w-full bg-secondary-300 rounded border"></div>
                      <p className="text-xs text-center">300</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-16 w-full bg-secondary rounded border"></div>
                      <p className="text-xs text-center">500</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-16 w-full bg-secondary-700 rounded border"></div>
                      <p className="text-xs text-center">700</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-16 w-full bg-secondary-900 rounded border"></div>
                      <p className="text-xs text-center">900</p>
                    </div>
                  </div>
                </div>

                {/* Semantic Colors */}
                <div>
                  <h4 className="text-sm font-semibold mb-3">Semantic Colors</h4>
                  <div className="grid grid-cols-4 gap-4">
                    <div className="space-y-2">
                      <div className="h-12 w-full bg-green-500 rounded border"></div>
                      <p className="text-xs text-center font-medium">Success</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-12 w-full bg-yellow-500 rounded border"></div>
                      <p className="text-xs text-center font-medium">Warning</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-12 w-full bg-red-500 rounded border"></div>
                      <p className="text-xs text-center font-medium">Error</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-12 w-full bg-blue-500 rounded border"></div>
                      <p className="text-xs text-center font-medium">Info</p>
                    </div>
                  </div>
                </div>

                {/* Gray Color Systems */}
                <div>
                  <h4 className="text-sm font-semibold mb-3">Gray Color Systems</h4>
                  
                  {/* Default Gray */}
                  <div className="mb-4">
                    <p className="text-xs font-medium mb-2 text-muted-foreground">Gray (Default)</p>
                    <div className="grid grid-cols-6 gap-2">
                      <div className="space-y-2">
                        <div className="h-12 w-full bg-gray-50 rounded border"></div>
                        <p className="text-xs text-center">50</p>
                      </div>
                      <div className="space-y-2">
                        <div className="h-12 w-full bg-gray-200 rounded border"></div>
                        <p className="text-xs text-center">200</p>
                      </div>
                      <div className="space-y-2">
                        <div className="h-12 w-full bg-gray-400 rounded border"></div>
                        <p className="text-xs text-center">400</p>
                      </div>
                      <div className="space-y-2">
                        <div className="h-12 w-full bg-gray-600 rounded border"></div>
                        <p className="text-xs text-center">600</p>
                      </div>
                      <div className="space-y-2">
                        <div className="h-12 w-full bg-gray-800 rounded border"></div>
                        <p className="text-xs text-center">800</p>
                      </div>
                      <div className="space-y-2">
                        <div className="h-12 w-full bg-gray-950 rounded border"></div>
                        <p className="text-xs text-center">950</p>
                      </div>
                    </div>
                  </div>

                  {/* Slate */}
                  <div className="mb-4">
                    <p className="text-xs font-medium mb-2 text-muted-foreground">Slate (Cool)</p>
                    <div className="grid grid-cols-6 gap-2">
                      <div className="space-y-2">
                        <div className="h-12 w-full bg-slate-50 rounded border"></div>
                        <p className="text-xs text-center">50</p>
                      </div>
                      <div className="space-y-2">
                        <div className="h-12 w-full bg-slate-200 rounded border"></div>
                        <p className="text-xs text-center">200</p>
                      </div>
                      <div className="space-y-2">
                        <div className="h-12 w-full bg-slate-400 rounded border"></div>
                        <p className="text-xs text-center">400</p>
                      </div>
                      <div className="space-y-2">
                        <div className="h-12 w-full bg-slate-600 rounded border"></div>
                        <p className="text-xs text-center">600</p>
                      </div>
                      <div className="space-y-2">
                        <div className="h-12 w-full bg-slate-800 rounded border"></div>
                        <p className="text-xs text-center">800</p>
                      </div>
                      <div className="space-y-2">
                        <div className="h-12 w-full bg-slate-950 rounded border"></div>
                        <p className="text-xs text-center">950</p>
                      </div>
                    </div>
                  </div>

                  {/* Zinc */}
                  <div className="mb-4">
                    <p className="text-xs font-medium mb-2 text-muted-foreground">Zinc (Modern)</p>
                    <div className="grid grid-cols-6 gap-2">
                      <div className="space-y-2">
                        <div className="h-12 w-full bg-zinc-50 rounded border"></div>
                        <p className="text-xs text-center">50</p>
                      </div>
                      <div className="space-y-2">
                        <div className="h-12 w-full bg-zinc-200 rounded border"></div>
                        <p className="text-xs text-center">200</p>
                      </div>
                      <div className="space-y-2">
                        <div className="h-12 w-full bg-zinc-400 rounded border"></div>
                        <p className="text-xs text-center">400</p>
                      </div>
                      <div className="space-y-2">
                        <div className="h-12 w-full bg-zinc-600 rounded border"></div>
                        <p className="text-xs text-center">600</p>
                      </div>
                      <div className="space-y-2">
                        <div className="h-12 w-full bg-zinc-800 rounded border"></div>
                        <p className="text-xs text-center">800</p>
                      </div>
                      <div className="space-y-2">
                        <div className="h-12 w-full bg-zinc-950 rounded border"></div>
                        <p className="text-xs text-center">950</p>
                      </div>
                    </div>
                  </div>

                  {/* Neutral */}
                  <div>
                    <p className="text-xs font-medium mb-2 text-muted-foreground">Neutral (Warm)</p>
                    <div className="grid grid-cols-6 gap-2">
                      <div className="space-y-2">
                        <div className="h-12 w-full bg-neutral-50 rounded border"></div>
                        <p className="text-xs text-center">50</p>
                      </div>
                      <div className="space-y-2">
                        <div className="h-12 w-full bg-neutral-200 rounded border"></div>
                        <p className="text-xs text-center">200</p>
                      </div>
                      <div className="space-y-2">
                        <div className="h-12 w-full bg-neutral-400 rounded border"></div>
                        <p className="text-xs text-center">400</p>
                      </div>
                      <div className="space-y-2">
                        <div className="h-12 w-full bg-neutral-600 rounded border"></div>
                        <p className="text-xs text-center">600</p>
                      </div>
                      <div className="space-y-2">
                        <div className="h-12 w-full bg-neutral-800 rounded border"></div>
                        <p className="text-xs text-center">800</p>
                      </div>
                      <div className="space-y-2">
                        <div className="h-12 w-full bg-neutral-950 rounded border"></div>
                        <p className="text-xs text-center">950</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Typography */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Type className="h-5 w-5" />
                  Typography Scale
                </CardTitle>
                <CardDescription>
                  Consistent text sizing with proper line heights
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <h1 className="text-4xl font-bold">Heading 1 - 36px</h1>
                    <p className="text-xs text-muted-foreground">text-4xl font-bold</p>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">Heading 2 - 30px</h2>
                    <p className="text-xs text-muted-foreground">text-3xl font-bold</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">Heading 3 - 24px</h3>
                    <p className="text-xs text-muted-foreground">text-2xl font-semibold</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">Heading 4 - 20px</h4>
                    <p className="text-xs text-muted-foreground">text-xl font-semibold</p>
                  </div>
                  <div>
                    <p className="text-base">Body Text - 16px</p>
                    <p className="text-xs text-muted-foreground">text-base</p>
                  </div>
                  <div>
                    <p className="text-sm">Small Text - 14px</p>
                    <p className="text-xs text-muted-foreground">text-sm</p>
                  </div>
                  <div>
                    <p className="text-xs">Extra Small - 12px</p>
                    <p className="text-xs text-muted-foreground">text-xs</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Shadows & Blurs */}
            <Card>
              <CardHeader>
                <CardTitle>Shadows & Blurs</CardTitle>
                <CardDescription>
                  Depth and visual effects for modern interfaces
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                
                {/* Shadows */}
                <div>
                  <h4 className="text-sm font-semibold mb-3">Shadow System</h4>
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    <div className="space-y-2">
                      <div className="h-16 w-full bg-white rounded-lg shadow-sm border flex items-center justify-center">
                        <span className="text-xs text-muted-foreground">Small</span>
                      </div>
                      <p className="text-xs text-center">shadow-sm</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-16 w-full bg-white rounded-lg shadow border flex items-center justify-center">
                        <span className="text-xs text-muted-foreground">Base</span>
                      </div>
                      <p className="text-xs text-center">shadow</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-16 w-full bg-white rounded-lg shadow-md border flex items-center justify-center">
                        <span className="text-xs text-muted-foreground">Medium</span>
                      </div>
                      <p className="text-xs text-center">shadow-md</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-16 w-full bg-white rounded-lg shadow-lg border flex items-center justify-center">
                        <span className="text-xs text-muted-foreground">Large</span>
                      </div>
                      <p className="text-xs text-center">shadow-lg</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-16 w-full bg-white rounded-lg shadow-xl border flex items-center justify-center">
                        <span className="text-xs text-muted-foreground">Extra Large</span>
                      </div>
                      <p className="text-xs text-center">shadow-xl</p>
                    </div>
                  </div>
                </div>

                {/* Blurs */}
                <div>
                  <h4 className="text-sm font-semibold mb-3">Blur Effects</h4>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="space-y-2">
                      <div className="h-16 w-full bg-gradient-to-r from-primary-200 to-secondary-200 rounded-lg relative overflow-hidden">
                        <div className="absolute inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center">
                          <span className="text-xs font-medium">Small Blur</span>
                        </div>
                      </div>
                      <p className="text-xs text-center">backdrop-blur-sm</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-16 w-full bg-gradient-to-r from-primary-200 to-secondary-200 rounded-lg relative overflow-hidden">
                        <div className="absolute inset-0 backdrop-blur bg-white/30 flex items-center justify-center">
                          <span className="text-xs font-medium">Base Blur</span>
                        </div>
                      </div>
                      <p className="text-xs text-center">backdrop-blur</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-16 w-full bg-gradient-to-r from-primary-200 to-secondary-200 rounded-lg relative overflow-hidden">
                        <div className="absolute inset-0 backdrop-blur-md bg-white/30 flex items-center justify-center">
                          <span className="text-xs font-medium">Medium Blur</span>
                        </div>
                      </div>
                      <p className="text-xs text-center">backdrop-blur-md</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-16 w-full bg-gradient-to-r from-primary-200 to-secondary-200 rounded-lg relative overflow-hidden">
                        <div className="absolute inset-0 backdrop-blur-lg bg-white/30 flex items-center justify-center">
                          <span className="text-xs font-medium">Large Blur</span>
                        </div>
                      </div>
                      <p className="text-xs text-center">backdrop-blur-lg</p>
                    </div>
                  </div>
                </div>

                {/* Combined Effects */}
                <div>
                  <h4 className="text-sm font-semibold mb-3">Combined Effects</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <div className="h-20 w-full bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg shadow-lg backdrop-blur-sm border border-white/20 flex items-center justify-center">
                        <div className="text-center">
                          <p className="text-sm font-medium">Glassmorphism</p>
                          <p className="text-xs text-muted-foreground">Shadow + Blur</p>
                        </div>
                      </div>
                      <p className="text-xs text-center">Modern glass effect</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-20 w-full bg-white rounded-lg shadow-xl border flex items-center justify-center">
                        <div className="text-center">
                          <p className="text-sm font-medium">Elevated Card</p>
                          <p className="text-xs text-muted-foreground">Strong shadow</p>
                        </div>
                      </div>
                      <p className="text-xs text-center">High elevation</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-20 w-full bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-lg shadow-md backdrop-blur border border-white/30 flex items-center justify-center">
                        <div className="text-center">
                          <p className="text-sm font-medium">Frosted Glass</p>
                          <p className="text-xs text-muted-foreground">Subtle effect</p>
                        </div>
                      </div>
                      <p className="text-xs text-center">Subtle glassmorphism</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Components Section */}
          <div className="grid gap-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Grid3X3 className="h-6 w-6" />
              UI Components
            </h2>

            {/* Buttons Section */}
            <Card>
              <CardHeader>
                <CardTitle>Buttons</CardTitle>
                <CardDescription>
                  Interactive buttons with proper touch targets (48px minimum)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-4">
                  <Button>Default Button</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Badges Section */}
            <Card>
              <CardHeader>
                <CardTitle>Badges</CardTitle>
                <CardDescription>
                  Status indicators and labels with semantic colors
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-4">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Badge size="sm">Small</Badge>
                  <Badge size="default">Default</Badge>
                  <Badge size="lg">Large</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Form Controls Section */}
            <Card>
              <CardHeader>
                <CardTitle>Form Controls</CardTitle>
                <CardDescription>
                  Interactive form elements with accessibility features
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                
                {/* Checkbox */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Checkbox</h4>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="terms" 
                      checked={isChecked}
                      onCheckedChange={(checked) => setIsChecked(checked === true)}
                    />
                    <label htmlFor="terms" className="text-sm">
                      Accept terms and conditions
                    </label>
                  </div>
                </div>

                {/* Toggle */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Toggle</h4>
                  <div className="flex items-center space-x-2">
                    <Toggle 
                      pressed={isToggled}
                      onPressedChange={setIsToggled}
                      aria-label="Toggle notifications"
                    >
                      <Star className="h-4 w-4" />
                    </Toggle>
                    <span className="text-sm">Toggle favorite</span>
                  </div>
                </div>

                {/* Progress */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Progress</h4>
                  <Progress value={progress} className="w-full" />
                  <p className="text-xs text-muted-foreground">{progress}% complete</p>
                </div>

                {/* Slider */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Slider</h4>
                  <Slider
                    value={sliderValue}
                    onValueChange={setSliderValue}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                  <p className="text-xs text-muted-foreground">Value: {sliderValue[0]}</p>
                </div>

                {/* Textarea */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Textarea</h4>
                  <Textarea 
                    placeholder="Type your message here..."
                    className="min-h-[80px]"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Dropdown Section */}
            <Card>
              <CardHeader>
                <CardTitle>Dropdown Menu</CardTitle>
                <CardDescription>
                  Contextual menus with keyboard navigation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      Open Menu
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Mail className="mr-2 h-4 w-4" />
                      Contact
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardContent>
            </Card>

            {/* Icons Section */}
            <Card>
              <CardHeader>
                <CardTitle>Icons</CardTitle>
                <CardDescription>
                  Consistent icon sizing with semantic variants
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <Icon size="xs" variant="muted">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </Icon>
                  <Icon size="sm">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </Icon>
                  <Icon size="default" variant="primary">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </Icon>
                  <Icon size="md" variant="success">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </Icon>
                  <Icon size="lg" variant="warning">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </Icon>
                </div>
              </CardContent>
            </Card>

            {/* Avatar Section */}
            <Card>
              <CardHeader>
                <CardTitle>Avatars</CardTitle>
                <CardDescription>
                  User profile images with fallbacks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>AB</AvatarFallback>
                  </Avatar>
                </div>
              </CardContent>
            </Card>

            {/* Cards Section */}
            <Card>
              <CardHeader>
                <CardTitle>Cards</CardTitle>
                <CardDescription>
                  Various card layouts and content types
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Simple Card */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Simple Card</CardTitle>
                      <CardDescription>
                        Basic card with header and content
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        This is a simple card component with a title, description, and content area.
                      </p>
                    </CardContent>
                  </Card>

                  {/* Card with Badge */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        Card with Badge
                        <Badge variant="success">New</Badge>
                      </CardTitle>
                      <CardDescription>
                        Card featuring status indicators
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Cards can include badges and other status indicators to show important information.
                      </p>
                    </CardContent>
                  </Card>

                  {/* Card with Actions */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Card with Actions</CardTitle>
                      <CardDescription>
                        Interactive card with buttons
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        This card includes action buttons for user interaction.
                      </p>
                      <div className="flex gap-2">
                        <Button size="sm">Primary</Button>
                        <Button size="sm" variant="outline">Secondary</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            {/* Design System Info */}
            <Card>
              <CardHeader>
                <CardTitle>🎯 Design System Features</CardTitle>
                <CardDescription>
                  Automated validation and development tools
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">✅ 8px Grid System</h4>
                    <p className="text-sm text-muted-foreground">
                      All spacing follows mathematical 8px grid for visual consistency
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">♿ Accessibility First</h4>
                    <p className="text-sm text-muted-foreground">
                      WCAG AA compliant with 44px+ touch targets
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">��️ Auto Validation</h4>
                    <p className="text-sm text-muted-foreground">
                      Real-time design system compliance checking
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">🎨 Visual Dev Tools</h4>
                    <p className="text-sm text-muted-foreground">
                      Press Cmd+G to toggle grid overlay
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <h4 className="text-sm font-semibold mb-2">🚀 Quick Start</h4>
                  <code className="text-xs bg-background px-2 py-1 rounded">
                    Press Ctrl/Cmd + G to toggle the 8px grid overlay!
                  </code>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Development Tools */}
      <DesignSystemDevTools />
    </div>
  )
} 