'use client'

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ChevronDown, Mail, MessageSquare, BarChart3, Users, Zap, Shield, ArrowRight } from "lucide-react"

export default function LandingPage() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0)

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Foundry</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link href="#" className="text-gray-600 hover:text-gray-900 font-medium">Home</Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 font-medium">Products</Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 font-medium">Resources</Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 font-medium">Pricing</Link>
            </div>
            <Button>Get started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-6">
            New feature
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Beautiful analytics to grow smarter
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Powerful, self-serve product and growth analytics to help you convert, engage, 
            and retain more users. Trusted by over 4,000 startups.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base">
              Get started
            </Button>
            <Button size="lg" variant="outline" className="text-base">
              Live demo
            </Button>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-16 px-8 border-t">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-gray-600 font-medium mb-8">
            Join 4,000+ companies already growing
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            <div className="h-12 w-auto flex items-center">
              <Image 
                src="/images/logo/netflix.svg" 
                alt="Netflix" 
                width={120} 
                height={48}
                className="h-8 w-auto object-contain"
              />
            </div>
            <div className="h-12 w-auto flex items-center">
              <Image 
                src="/images/logo/slack.svg" 
                alt="Slack" 
                width={120} 
                height={48}
                className="h-8 w-auto object-contain"
              />
            </div>
            <div className="h-12 w-auto flex items-center">
              <Image 
                src="/images/logo/discord.svg" 
                alt="Discord" 
                width={120} 
                height={48}
                className="h-8 w-auto object-contain"
              />
            </div>
            <div className="h-12 w-auto flex items-center">
              <Image 
                src="/images/logo/linkedin.svg" 
                alt="LinkedIn" 
                width={120} 
                height={48}
                className="h-8 w-auto object-contain"
              />
            </div>
            <div className="h-12 w-auto flex items-center">
              <Image 
                src="/images/logo/meta.svg" 
                alt="Meta" 
                width={120} 
                height={48}
                className="h-8 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Features
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Analytics that feels like it's from the future
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful, self-serve product and growth analytics to help you convert, engage, 
              and retain more users. Trusted by over 4,000 startups.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Mail className="h-6 w-6" />,
                title: "Share team inboxes",
                description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
              },
              {
                icon: <Zap className="h-6 w-6" />,
                title: "Deliver instant answers",
                description: "An all-in-one customer service platform that helps you balance everything your customers need to be happy."
              },
              {
                icon: <BarChart3 className="h-6 w-6" />,
                title: "Manage your team with reports",
                description: "Measure what matters with Foundry's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks."
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center p-8 border-0 shadow-none">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mx-auto border-8 border-primary-100">
                    <div className="text-primary">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageSquare className="h-6 w-6" />,
                title: "Connect with customers",
                description: "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion."
              },
              {
                icon: <Shield className="h-6 w-6" />,
                title: "Connect the tools you already use",
                description: "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools."
              },
              {
                icon: <Users className="h-6 w-6" />,
                title: "Our people make the difference",
                description: "We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help."
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center p-8 border-0 shadow-none">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mx-auto border-8 border-primary-100">
                    <div className="text-primary">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Stats Section */}
      <section className="py-24 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Launch faster
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Build something great
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We've done all the heavy lifting so you don't have to — get all the data you need to launch and grow your business faster.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                {[
                  { number: "4,000+", label: "Global customers", description: "We've helped over 4,000 amazing global companies." },
                  { number: "600%", label: "Return on investment", description: "Our customers have reported an average of ~600% ROI." },
                  { number: "10k", label: "Global downloads", description: "Our app has been downloaded over 10k times." },
                  { number: "200+", label: "5-star reviews", description: "We're proud of our 5-star rating with over 200 reviews." }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-5xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-lg font-medium text-gray-900 mb-2">{stat.label}</div>
                    <div className="text-sm text-gray-600">{stat.description}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <BarChart3 className="h-24 w-24 mx-auto mb-4 opacity-50" />
                <p>Product Demo Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Frequently asked questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about the product and billing.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Is there a free trial available?",
                answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
              },
              {
                question: "Can I change my plan later?",
                answer: "Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you."
              },
              {
                question: "What is your cancellation policy?",
                answer: "We understand that things change. You can cancel your plan at any time and we'll refund you the difference already paid."
              },
              {
                question: "Can other info be added to an invoice?",
                answer: "Yes, you can add any additional information to your invoice such as your VAT number or company address."
              },
              {
                question: "How does billing work?",
                answer: "Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces."
              },
              {
                question: "How do I change my account email?",
                answer: "You can change the email address associated with your account in your account settings under the email section."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-0 border-b border-gray-200 rounded-none">
                <CardContent className="p-6">
                  <button
                    className="flex items-center justify-between w-full text-left"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                    <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === index && (
                    <p className="mt-4 text-gray-600">{faq.answer}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-16 bg-gray-50 border-0">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="flex -space-x-2">
                  <Avatar className="border-2 border-white">
                    <AvatarFallback className="bg-green-500">A</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-white">
                    <AvatarFallback className="bg-blue-500">B</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-white">
                    <AvatarFallback className="bg-purple-500">C</AvatarFallback>
                  </Avatar>
                </div>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Still have questions?</h3>
              <p className="text-gray-600 mb-6">Can't find the answer you're looking for? Please chat to our friendly team.</p>
              <Button>Get in touch</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Start your free trial
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join over 4,000+ startups already growing with Foundry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline">
              Learn more
            </Button>
            <Button size="lg">
              Get started
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-8 bg-white border-t">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
              <ul className="space-y-3">
                {['Overview', 'Features', 'Solutions', 'Tutorials', 'Pricing', 'Releases'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-600 hover:text-gray-900">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-3">
                {['About us', 'Careers', 'Press', 'News', 'Media kit', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-600 hover:text-gray-900">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
              <ul className="space-y-3">
                {['Blog', 'Newsletter', 'Events', 'Help centre', 'Tutorials', 'Support'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-600 hover:text-gray-900">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Use cases</h4>
              <ul className="space-y-3">
                {['Startups', 'Enterprise', 'Government', 'SaaS', 'Marketplaces', 'Ecommerce'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-600 hover:text-gray-900">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Social</h4>
              <ul className="space-y-3">
                {['Twitter', 'LinkedIn', 'Facebook', 'GitHub', 'AngelList', 'Dribbble'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-600 hover:text-gray-900">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
              <ul className="space-y-3">
                {['Terms', 'Privacy', 'Cookies', 'Licenses', 'Settings', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-600 hover:text-gray-900">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Foundry</span>
            </div>
            <p className="text-gray-600">© 2077 Foundry. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 