import { useEffect, useRef, useState } from "react"

const Typewriter = ({ text, speed = 120 }) => {
  const [displayed, setDisplayed] = useState("")
  const ref = useRef(null)
  const timeouts = useRef([])

  useEffect(() => {
    let observer

    const type = (i) => {
      if (i < text.length) {
        setDisplayed((prev) => prev + text[i])
        const id = setTimeout(() => type(i + 1), speed + Math.random() * 80)
        timeouts.current.push(id)
      }
    }

    const startTyping = () => {
      // clear ALL timeouts before restarting
      timeouts.current.forEach(clearTimeout)
      timeouts.current = []

      setDisplayed("")
      type(0)
    }

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startTyping()
        }
      },
      { threshold: 0.6 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => {
      timeouts.current.forEach(clearTimeout)
      timeouts.current = []
      if (observer && ref.current) observer.unobserve(ref.current)
    }
  }, [text, speed])

  return (
    <span ref={ref} className="typewriter-js">
      {displayed}
      <span className="cursor">I</span>
    </span>
  )
}

export default Typewriter
