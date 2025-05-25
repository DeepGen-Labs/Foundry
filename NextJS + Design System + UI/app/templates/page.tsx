import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Eye } from "lucide-react"

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Design System
                </Link>
              </Button>
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Templates</h1>
                <p className="text-muted-foreground mt-2">
                  Production-ready templates built with our design system
                </p>
              </div>
            </div>
            <Badge variant="secondary" className="text-sm">
              🎨 Templates
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8">
          
          {/* Templates Grid */}
          <div className="grid gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Available Templates</h2>
              <p className="text-muted-foreground">
                Choose from our collection of professionally designed templates
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Landing Page Template */}
              <Card className="overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary-100 to-secondary-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <div className="w-16 h-16 mx-auto mb-2 bg-white/50 rounded-lg flex items-center justify-center">
                        <Eye className="h-8 w-8" />
                      </div>
                      <p className="text-sm">Landing Page Preview</p>
                    </div>
                  </div>
                  <div className="absolute top-3 left-3">
                    <Badge variant="success">Ready</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Landing Page
                    <Badge variant="outline">SaaS</Badge>
                  </CardTitle>
                  <CardDescription>
                    Complete landing page with hero, features, FAQ, and footer sections
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge size="sm" variant="secondary">Navbar</Badge>
                    <Badge size="sm" variant="secondary">Hero</Badge>
                    <Badge size="sm" variant="secondary">Features</Badge>
                    <Badge size="sm" variant="secondary">FAQ</Badge>
                    <Badge size="sm" variant="secondary">Footer</Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button asChild className="flex-1">
                      <Link href="/templates/landing">
                        <Eye className="h-4 w-4 mr-2" />
                        View Template
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <Link href="/templates/landing" target="_blank">
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Coming Soon Templates */}
              <Card className="overflow-hidden opacity-60">
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <div className="w-16 h-16 mx-auto mb-2 bg-white/50 rounded-lg flex items-center justify-center">
                        <Eye className="h-8 w-8" />
                      </div>
                      <p className="text-sm">Dashboard Preview</p>
                    </div>
                  </div>
                  <div className="absolute top-3 left-3">
                    <Badge variant="outline">Coming Soon</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Dashboard
                    <Badge variant="outline">Admin</Badge>
                  </CardTitle>
                  <CardDescription>
                    Modern dashboard with charts, tables, and analytics components
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge size="sm" variant="secondary">Sidebar</Badge>
                    <Badge size="sm" variant="secondary">Charts</Badge>
                    <Badge size="sm" variant="secondary">Tables</Badge>
                    <Badge size="sm" variant="secondary">Cards</Badge>
                  </div>
                  <Button disabled className="w-full">
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden opacity-60">
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <div className="w-16 h-16 mx-auto mb-2 bg-white/50 rounded-lg flex items-center justify-center">
                        <Eye className="h-8 w-8" />
                      </div>
                      <p className="text-sm">E-commerce Preview</p>
                    </div>
                  </div>
                  <div className="absolute top-3 left-3">
                    <Badge variant="outline">Coming Soon</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    E-commerce
                    <Badge variant="outline">Shop</Badge>
                  </CardTitle>
                  <CardDescription>
                    Complete e-commerce template with product listings and checkout
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge size="sm" variant="secondary">Products</Badge>
                    <Badge size="sm" variant="secondary">Cart</Badge>
                    <Badge size="sm" variant="secondary">Checkout</Badge>
                    <Badge size="sm" variant="secondary">Profile</Badge>
                  </div>
                  <Button disabled className="w-full">
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Template Features */}
          <Card>
            <CardHeader>
              <CardTitle>🎯 Template Features</CardTitle>
              <CardDescription>
                All templates are built with our design system standards
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">✅ Design System Compliant</h4>
                  <p className="text-sm text-muted-foreground">
                    Built using our 8px grid system and design tokens
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">📱 Fully Responsive</h4>
                  <p className="text-sm text-muted-foreground">
                    Optimized for mobile, tablet, and desktop devices
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">♿ Accessibility Ready</h4>
                  <p className="text-sm text-muted-foreground">
                    WCAG AA compliant with proper touch targets and contrast
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">🚀 Production Ready</h4>
                  <p className="text-sm text-muted-foreground">
                    Clean code, TypeScript support, and performance optimized
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
} 