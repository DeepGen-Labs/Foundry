// 🎨 UX Guidelines & Best Practices
// Comprehensive UX rules for RealtorForge Real Estate Platform

export const uxGuidelines = {
  // ✅ 8px Grid System Rules
  spacing: {
    principle: "All spacing must follow 8px grid for visual rhythm and consistency",
    rules: [
      "Use 8px (spacing[2]) as the fundamental unit",
      "16px (spacing[4]) for standard component spacing", 
      "24px (spacing[6]) for larger component spacing",
      "32px (spacing[8]) for section spacing",
      "48px (spacing[12]) for major layout sections"
    ],
    forbidden: [
      "Never use odd numbers like 5px, 7px, 9px",
      "Avoid non-grid values like 10px, 15px, 22px",
      "Don't use arbitrary spacing in Tailwind like p-3.5"
    ]
  },

  // ✅ Touch Target Guidelines
  touchTargets: {
    principle: "All interactive elements must be accessible on touch devices",
    rules: {
      minimum: "44px × 44px (iOS Human Interface Guidelines)",
      recommended: "48px × 48px (Material Design recommendation)",
      comfortable: "56px × 56px for primary actions",
      hero: "64px × 64px for main CTAs"
    },
    spacing: {
      between: "8px minimum between touch targets",
      around: "4px minimum around touch targets"
    }
  },

  // ✅ Typography & Content Guidelines
  typography: {
    lineLength: {
      optimal: "45-75 characters per line",
      minimum: "45 characters (too short is hard to read)",
      maximum: "75 characters (too long causes fatigue)"
    },
    lineHeight: {
      headings: "1.2-1.3 for large text",
      body: "1.4-1.6 for readable body text",
      tight: "1.25 for UI components"
    },
    hierarchy: {
      h1: "Main page title - use sparingly",
      h2: "Major section headers",
      h3: "Sub-section headers", 
      h4: "Component headers",
      body: "Default readable text",
      small: "Supporting information only"
    }
  },

  // ✅ Color & Contrast Guidelines
  color: {
    contrast: {
      normal: "4.5:1 minimum (WCAG AA)",
      large: "3:1 for large text (18px+ regular, 14px+ bold)",
      enhanced: "7:1 for AAA compliance",
      nonText: "3:1 for UI components"
    },
    usage: {
      primary: "Brand actions, CTAs, active states",
      success: "Confirmations, sold properties, positive actions",
      warning: "Pending states, cautionary information",
      error: "Errors, destructive actions, urgent alerts",
      neutral: "Text, borders, backgrounds"
    },
    accessibility: [
      "Never rely on color alone to convey information",
      "Provide alternative indicators (icons, text, patterns)",
      "Test with color blindness simulators"
    ]
  },

  // ✅ Animation & Motion Guidelines
  animation: {
    duration: {
      micro: "100-200ms for hover states, button presses",
      normal: "200-300ms for transitions, page changes",
      macro: "300-500ms for complex animations",
      maximum: "500ms (users perceive delays beyond this)"
    },
    easing: {
      standard: "ease-out for entering elements",
      accelerate: "ease-in for exiting elements", 
      smooth: "ease-in-out for continuous motion"
    },
    accessibility: [
      "Respect prefers-reduced-motion setting",
      "Provide option to disable animations",
      "Avoid flashing or strobing effects"
    ]
  },

  // ✅ Real Estate Specific UX Guidelines
  realEstate: {
    propertyCards: {
      imageRatio: "16:9 or 4:3 for property photos",
      imageLoading: "Always show placeholder while loading",
      pricing: "Make price prominent and easy to scan",
      status: "Clear visual indicators for available/sold/pending",
      actions: "Quick actions for save/share/contact"
    },
    
    propertyDetails: {
      keyInfo: "Address, price, beds/baths above the fold",
      photos: "High-quality, zoomable image gallery",
      description: "Scannable with bullet points and sections",
      contact: "Agent info and contact options prominent",
      location: "Interactive map with neighborhood context"
    },
    
    search: {
      filters: "Progressive disclosure - show common filters first",
      results: "Grid view with option for list view",
      sorting: "Price, date, relevance options",
      pagination: "Load more or infinite scroll",
      noResults: "Helpful suggestions and broader search options"
    },
    
    chat: {
      responses: "Quick reply suggestions for common queries",
      typing: "Show typing indicators for AI responses",
      history: "Persistent chat history and context",
      attachments: "Support for property photos and documents",
      handoff: "Smooth transition to human agents"
    }
  },

  // ✅ Mobile-First Guidelines
  mobile: {
    principle: "Design for mobile first, enhance for larger screens",
    navigation: {
      thumbZone: "Place primary actions in thumb-reachable areas",
      bottomNav: "Use bottom navigation for main app sections",
      backButton: "Always provide clear navigation back",
      gestures: "Support standard gestures (swipe, pinch, tap)"
    },
    
    content: {
      scanning: "Front-load important information",
      chunking: "Break content into digestible sections",
      progressive: "Show details progressively, not all at once",
      offline: "Graceful degradation when offline"
    },
    
    performance: {
      loading: "Show loading states for anything >100ms",
      images: "Optimize and lazy load property images",
      caching: "Cache frequently accessed data",
      network: "Handle poor network conditions gracefully"
    }
  },

  // ✅ Accessibility Guidelines (WCAG 2.1 AA)
  accessibility: {
    navigation: [
      "Provide keyboard navigation for all interactive elements",
      "Use logical tab order following visual flow",
      "Include skip links for screen readers",
      "Clear focus indicators (visible and programmatic)"
    ],
    
    content: [
      "Use semantic HTML elements",
      "Provide alt text for all meaningful images",
      "Use proper heading hierarchy (h1-h6)",
      "Ensure text is resizable up to 200% without horizontal scrolling"
    ],
    
    interaction: [
      "Provide multiple ways to complete tasks",
      "Give users enough time to read and interact",
      "Don't use flashing content (seizure risk)",
      "Make error messages clear and actionable"
    ],
    
    testing: [
      "Test with screen readers (VoiceOver, NVDA)",
      "Verify keyboard-only navigation",
      "Check color contrast ratios",
      "Validate with accessibility tools"
    ]
  },

  // ✅ Performance Guidelines
  performance: {
    loading: {
      initial: "First meaningful paint <1.5s",
      interactive: "Time to interactive <3s",
      subsequent: "Page transitions <500ms",
      images: "Progressive loading with placeholders"
    },
    
    optimization: [
      "Lazy load images below the fold",
      "Use appropriate image formats (WebP, AVIF)",
      "Minimize JavaScript bundle size",
      "Cache API responses appropriately",
      "Use service workers for offline functionality"
    ]
  },

  // ✅ Error Handling Guidelines
  errors: {
    prevention: [
      "Validate input as user types (not just on submit)",
      "Provide format examples for complex inputs",
      "Use smart defaults and autocomplete",
      "Prevent destructive actions with confirmations"
    ],
    
    messaging: [
      "Use plain language, avoid technical jargon",
      "Explain what went wrong and why",
      "Provide clear steps to resolve the issue",
      "Offer alternative actions when possible"
    ],
    
    recovery: [
      "Auto-save user input when possible",
      "Provide easy way to retry failed actions",
      "Maintain user context during error states",
      "Log errors for debugging without exposing details"
    ]
  },

  // ✅ Data & Privacy Guidelines
  dataPrivacy: {
    transparency: [
      "Clearly explain what data is collected and why",
      "Provide easy access to privacy policy",
      "Allow users to control their data",
      "Show when data is being processed or shared"
    ],
    
    security: [
      "Use HTTPS for all data transmission",
      "Implement proper authentication and authorization",
      "Never store sensitive data in localStorage",
      "Provide secure logout functionality"
    ]
  }
} as const;

// ✅ Component-Specific Guidelines
export const componentGuidelines = {
  buttons: {
    sizing: "Minimum 44px height for touch accessibility",
    spacing: "8px internal padding minimum",
    states: "Hover, focus, active, disabled states required",
    loading: "Show loading spinner for async actions",
    labeling: "Use action verbs (Save, Delete, Search)"
  },

  forms: {
    layout: "Single column for mobile, consider multi-column for desktop",
    validation: "Validate on blur, show errors inline",
    required: "Mark required fields clearly with asterisk",
    progress: "Show progress for multi-step forms",
    submission: "Disable submit during processing"
  },

  modals: {
    backdrop: "Click outside to close (with confirmation if needed)",
    keyboard: "Escape key to close, trap focus inside modal",
    sizing: "Max 90% viewport width/height",
    content: "Scrollable content area if needed",
    actions: "Primary action on right, secondary on left"
  },

  notifications: {
    positioning: "Top-right for desktop, top for mobile",
    duration: "4-6 seconds for info, persistent for errors",
    actions: "Provide undo for destructive actions",
    stacking: "Limit to 3 notifications maximum",
    accessibility: "Announce to screen readers"
  },

  propertyCards: {
    layout: "Image top, content below in consistent order",
    actions: "Heart icon for favorites, share/contact buttons",
    status: "Visual badge for sold/pending/available",
    loading: "Skeleton screens while loading",
    responsive: "Stack on mobile, grid on desktop"
  }
} as const;

// ✅ Testing Guidelines
export const testingGuidelines = {
  usability: [
    "Test with real users on real devices",
    "Use think-aloud protocol during testing",
    "Test critical user journeys end-to-end",
    "Validate with accessibility tools",
    "Check performance on slow networks"
  ],

  devices: [
    "iPhone SE (small screen)",
    "iPhone 12/13 (common size)",
    "iPad (tablet experience)",
    "Desktop 1920×1080 (common desktop)",
    "Desktop 1366×768 (older/smaller screens)"
  ],

  browsers: [
    "Chrome (most common)",
    "Safari (iOS/macOS)",
    "Firefox (privacy-focused users)",
    "Edge (Windows default)",
    "Test both desktop and mobile versions"
  ]
} as const;

// ✅ Validation Functions
export const validateUXCompliance = {
  checkTouchTarget: (element: HTMLElement): boolean => {
    const rect = element.getBoundingClientRect();
    return rect.width >= 44 && rect.height >= 44;
  },

  checkContrast: (foreground: string, background: string): number => {
    // Simplified contrast calculation
    // In real implementation, use proper color contrast calculation
    return 4.5; // Placeholder
  },

  checkLineLength: (element: HTMLElement): boolean => {
    const text = element.textContent || '';
    const wordsPerLine = text.length / (element.offsetWidth / 8); // Rough calculation
    return wordsPerLine >= 45 && wordsPerLine <= 75;
  }
};

export default uxGuidelines; 