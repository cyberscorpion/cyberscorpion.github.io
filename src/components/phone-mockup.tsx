import { useState } from "react"
import { motion } from "framer-motion"

interface PhoneMockupProps {
  screenshot: string
  appName: string
  description: string
  className?: string
  variant?: "light" | "dark"
}

export function PhoneMockup({
  screenshot,
  appName,
  description,
  className = "",
  variant = "dark"
}: PhoneMockupProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className={`relative perspective-1000 ${className}`}>
      <motion.div
        className="relative group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ rotateY: 0, rotateX: 0 }}
        animate={{
          rotateY: isHovered ? -15 : 0,
          rotateX: isHovered ? 5 : 0,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{
          duration: 0.6,
          ease: [0.4, 0, 0.2, 1],
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* iPhone Frame */}
        <div 
          className={`
            relative w-64 h-[520px] rounded-[3rem] p-2 shadow-2xl
            ${variant === "dark" 
              ? "bg-gradient-to-br from-gray-900 via-black to-gray-800" 
              : "bg-gradient-to-br from-gray-100 to-white"
            }
          `}
          style={{
            boxShadow: isHovered 
              ? "0 25px 60px rgba(0, 0, 0, 0.4), 0 0 40px rgba(114, 89, 174, 0.3)"
              : "0 15px 40px rgba(0, 0, 0, 0.3)"
          }}
        >
          {/* Dynamic Island / Notch */}
          <div 
            className={`
              absolute top-4 left-1/2 transform -translate-x-1/2 w-24 h-6 
              ${variant === "dark" ? "bg-black" : "bg-gray-900"} 
              rounded-full z-20
            `}
          />
          
          {/* Power Button */}
          <div 
            className={`
              absolute right-0 top-20 w-1 h-12 
              ${variant === "dark" ? "bg-gray-700" : "bg-gray-400"} 
              rounded-l-sm
            `}
          />
          
          {/* Volume Buttons */}
          <div 
            className={`
              absolute left-0 top-16 w-1 h-8 
              ${variant === "dark" ? "bg-gray-700" : "bg-gray-400"} 
              rounded-r-sm
            `}
          />
          <div 
            className={`
              absolute left-0 top-28 w-1 h-8 
              ${variant === "dark" ? "bg-gray-700" : "bg-gray-400"} 
              rounded-r-sm
            `}
          />
          
          {/* Screen */}
          <div className="relative w-full h-full bg-black rounded-[2.5rem] overflow-hidden">
            {/* Screen Reflection */}
            <div 
              className={`
                absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent 
                ${isHovered ? "opacity-20" : "opacity-10"}
                transition-opacity duration-600 z-10
              `}
            />
            
            {/* App Screenshot */}
            <motion.img
              src={screenshot}
              alt={appName}
              className="w-full h-full object-cover rounded-[2.5rem]"
              animate={{
                scale: isHovered ? 1.02 : 1,
              }}
              transition={{ duration: 0.6 }}
            />
            
            {/* Screen Glow Effect */}
            {isHovered && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-accent/10 rounded-[2.5rem]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              />
            )}
          </div>
          
          {/* 3D Depth Effect */}
          <div 
            className={`
              absolute inset-0 rounded-[3rem] 
              ${variant === "dark" 
                ? "shadow-inner" 
                : "shadow-inner"
              }
            `}
            style={{
              boxShadow: "inset 0 0 20px rgba(0, 0, 0, 0.2)"
            }}
          />
        </div>
        
        {/* Floating Info Card */}
        <motion.div
          className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-64 p-4 bg-card/90 backdrop-blur-sm border border-border rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -20, rotateY: 15 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            x: isHovered ? 0 : -20,
            rotateY: isHovered ? 0 : 15,
          }}
          transition={{ duration: 0.4, delay: 0.1 }}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <h3 className="font-semibold text-foreground mb-2">{appName}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </motion.div>
      </motion.div>
      
      {/* Base Shadow */}
      <motion.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-8 bg-black/20 rounded-full blur-lg"
        animate={{
          scale: isHovered ? 1.2 : 1,
          opacity: isHovered ? 0.4 : 0.2,
        }}
        transition={{ duration: 0.6 }}
      />
    </div>
  )
}

interface PhoneMockupGridProps {
  mockups: Array<{
    screenshot: string
    appName: string
    description: string
    variant?: "light" | "dark"
  }>
  className?: string
}

export function PhoneMockupGrid({ mockups, className = "" }: PhoneMockupGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 ${className}`}>
      {mockups.map((mockup, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50, rotateY: -30 }}
          whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: index * 0.2,
            ease: [0.4, 0, 0.2, 1]
          }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <PhoneMockup
            screenshot={mockup.screenshot}
            appName={mockup.appName}
            description={mockup.description}
            variant={mockup.variant}
          />
        </motion.div>
      ))}
    </div>
  )
}

// Compact variant for smaller spaces
export function PhoneMockupCompact({
  screenshot,
  appName,
  description,
  className = "",
  variant = "dark"
}: PhoneMockupProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className={`relative perspective-1000 ${className}`}>
      <motion.div
        className="relative group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ rotateY: 0, rotateX: 0 }}
        animate={{
          rotateY: isHovered ? -12 : 0,
          rotateX: isHovered ? 3 : 0,
          scale: isHovered ? 1.03 : 1,
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0, 0.2, 1],
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Compact iPhone Frame */}
        <div 
          className={`
            relative w-40 h-80 rounded-[2rem] p-1.5 shadow-xl
            ${variant === "dark" 
              ? "bg-gradient-to-br from-gray-900 via-black to-gray-800" 
              : "bg-gradient-to-br from-gray-100 to-white"
            }
          `}
          style={{
            boxShadow: isHovered 
              ? "0 20px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(114, 89, 174, 0.2)"
              : "0 10px 25px rgba(0, 0, 0, 0.3)"
          }}
        >
          {/* Dynamic Island */}
          <div 
            className={`
              absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-4 
              ${variant === "dark" ? "bg-black" : "bg-gray-900"} 
              rounded-full z-20
            `}
          />
          
          {/* Screen */}
          <div className="relative w-full h-full bg-black rounded-[1.5rem] overflow-hidden">
            <motion.img
              src={screenshot}
              alt={appName}
              className="w-full h-full object-cover rounded-[1.5rem]"
              animate={{
                scale: isHovered ? 1.02 : 1,
              }}
              transition={{ duration: 0.5 }}
            />
            
            {/* Hover Glow */}
            {isHovered && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-accent/5 rounded-[1.5rem]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </div>
        </div>
        
        {/* Compact Info Tooltip */}
        <motion.div
          className="absolute -top-16 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-card/95 backdrop-blur-sm border border-border rounded-md shadow-lg whitespace-nowrap"
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 10,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-sm font-medium text-foreground">{appName}</div>
          <div className="text-xs text-muted-foreground mt-1">{description}</div>
        </motion.div>
      </motion.div>
    </div>
  )
}