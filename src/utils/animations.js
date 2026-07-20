import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const initializeAnimations = () => {
  // Scroll reveal animations
  gsap.utils.toArray('.scroll-reveal').forEach((element) => {
    gsap.fromTo(
      element,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'top 50%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  })
}

export const animateOnScroll = (element, options = {}) => {
  gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 40,
      ...options.from,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'top 50%',
        toggleActions: 'play none none reverse',
      },
      ...options.to,
    }
  )
}

export const parallaxEffect = (element, speed = 0.5) => {
  gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      onUpdate: (self) => {
        gsap.to(element, {
          y: self.getVelocity() * speed * 0.05,
          overwrite: 'auto',
        })
      },
    },
  })
}

export const hoverScale3D = (element) => {
  element.addEventListener('mouseenter', () => {
    gsap.to(element, {
      scale: 1.05,
      duration: 0.3,
      ease: 'power2.out',
    })
  })
  element.addEventListener('mouseleave', () => {
    gsap.to(element, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out',
    })
  })
}

export const countUp = (element, endValue, duration = 2) => {
  const obj = { value: 0 }
  gsap.to(obj, {
    value: endValue,
    duration,
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
    },
    onUpdate: () => {
      element.textContent = Math.floor(obj.value).toLocaleString()
    },
  })
}

export const staggerAnimation = (elements, options = {}) => {
  gsap.fromTo(
    elements,
    {
      opacity: 0,
      y: 40,
      ...options.from,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      scrollTrigger: {
        trigger: elements[0]?.parentElement,
        start: 'top 80%',
      },
      ...options.to,
    }
  )
}