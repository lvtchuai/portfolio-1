<template>
  <section class="section-space border-t border-white/10">
    <div class="section-shell">
      <div class="mb-12">
        <p class="font-display text-sm uppercase tracking-[0.24em] text-accent-orange">Get in touch</p>
        <h2 class="mt-4 font-display text-4xl text-white md:text-5xl lg:text-6xl">
          Let's build something great together
        </h2>
      </div>

      <div class="grid gap-12 lg:grid-cols-2">
        <div>
          <p class="max-w-xl text-base leading-relaxed text-white/65">
            Co du an can hop tac hoac muon trao doi ve cong nghe? Gui email hoac ket noi qua cac kenh ben duoi.
            Luon san sang thao luan ve DevOps, automation, infrastructure, hoac bat ky chu de cong nghe nao.
          </p>

          <div class="mt-10 space-y-6">
            <div class="flex items-center gap-4">
              <div class="flex h-12 w-12 items-center justify-center rounded-full border border-accent-orange/30 bg-accent-orange/10 text-accent-orange">
                <Mail class="h-5 w-5" />
              </div>
              <div>
                <p class="text-xs uppercase tracking-wider text-white/40">Email</p>
                <a href="mailto:lvtf07@gmail.com" class="font-display text-lg text-white hover:text-accent-orange transition-colors">
                  lvtf07@gmail.com
                </a>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div class="flex h-12 w-12 items-center justify-center rounded-full border border-accent-blue/30 bg-accent-blue/10 text-accent-blue">
                <MapPin class="h-5 w-5" />
              </div>
              <div>
                <p class="text-xs uppercase tracking-wider text-white/40">Location</p>
                <p class="font-display text-lg text-white">Ho Chi Minh City, Vietnam</p>
              </div>
            </div>
          </div>

          <div class="mt-10">
            <p class="mb-4 text-xs uppercase tracking-wider text-white/40">Connect with me</p>
            <div class="flex flex-wrap gap-3">
              <a
                v-for="social in socialLinks"
                :key="social.name"
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                class="group flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-white/70 transition-all duration-300 hover:border-accent-orange/40 hover:bg-accent-orange/10 hover:text-accent-orange"
              >
                <component :is="social.icon" class="h-4 w-4" />
                <span>{{ social.name }}</span>
              </a>
            </div>
          </div>
        </div>

        <div class="glass-card p-8 md:p-10">
          <h3 class="font-display text-xl text-white mb-6">Send a message</h3>

          <!-- Success Message -->
          <div v-if="formStatus === 'success'" class="mb-6 p-4 rounded-xl bg-accent-emerald/10 border border-accent-emerald/30 text-accent-emerald">
            <div class="flex items-center gap-3">
              <CheckCircle class="h-5 w-5 flex-shrink-0" />
              <span>Message sent successfully! I'll get back to you soon.</span>
            </div>
          </div>

          <!-- Error Message -->
          <div v-if="formStatus === 'error'" class="mb-6 p-4 rounded-xl bg-accent-rose/10 border border-accent-rose/30 text-accent-rose">
            <div class="flex items-center gap-3">
              <AlertCircle class="h-5 w-5 flex-shrink-0" />
              <span>{{ errorMessage }}</span>
            </div>
          </div>

          <form class="space-y-5" @submit.prevent="handleSubmit">
            <div>
              <label for="name" class="mb-2 block text-xs uppercase tracking-wider text-white/50">
                Name <span class="text-accent-rose">*</span>
              </label>
              <input
                v-model="form.name"
                type="text"
                id="name"
                name="name"
                class="input-field w-full"
                :class="{ 'border-accent-rose': errors.name }"
                placeholder="Your name"
                required
              />
              <p v-if="errors.name" class="mt-1 text-xs text-accent-rose">{{ errors.name }}</p>
            </div>

            <div>
              <label for="email" class="mb-2 block text-xs uppercase tracking-wider text-white/50">
                Email <span class="text-accent-rose">*</span>
              </label>
              <input
                v-model="form.email"
                type="email"
                id="email"
                name="email"
                class="input-field w-full"
                :class="{ 'border-accent-rose': errors.email }"
                placeholder="your@email.com"
                required
              />
              <p v-if="errors.email" class="mt-1 text-xs text-accent-rose">{{ errors.email }}</p>
            </div>

            <div>
              <label for="subject" class="mb-2 block text-xs uppercase tracking-wider text-white/50">
                Subject <span class="text-accent-rose">*</span>
              </label>
              <input
                v-model="form.subject"
                type="text"
                id="subject"
                name="subject"
                class="input-field w-full"
                :class="{ 'border-accent-rose': errors.subject }"
                placeholder="What's this about?"
                required
              />
              <p v-if="errors.subject" class="mt-1 text-xs text-accent-rose">{{ errors.subject }}</p>
            </div>

            <div>
              <label for="message" class="mb-2 block text-xs uppercase tracking-wider text-white/50">
                Message <span class="text-accent-rose">*</span>
              </label>
              <textarea
                v-model="form.message"
                id="message"
                name="message"
                rows="4"
                class="input-field w-full resize-none"
                :class="{ 'border-accent-rose': errors.message }"
                placeholder="Tell me about your project or just say hi..."
                required
              ></textarea>
              <p v-if="errors.message" class="mt-1 text-xs text-accent-rose">{{ errors.message }}</p>
            </div>

            <button
              type="submit"
              class="btn-primary w-full"
              :disabled="isSubmitting"
            >
              <span v-if="!isSubmitting">Send message</span>
              <span v-else class="flex items-center justify-center gap-2">
                <svg class="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" />
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Sending...
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { Mail, MapPin, Github, Linkedin, CheckCircle, AlertCircle } from 'lucide-vue-next'

// Load EmailJS script
onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js'
  script.async = true
  document.head.appendChild(script)
})

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/lvtchuai', icon: Github },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: Linkedin },
]

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const errors = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const isSubmitting = ref(false)
const formStatus = ref('idle')
const errorMessage = ref('')

// Get credentials from .env file
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const validateForm = () => {
  let isValid = true
  errors.name = ''
  errors.email = ''
  errors.subject = ''
  errors.message = ''

  if (!form.name.trim()) {
    errors.name = 'Name is required'
    isValid = false
  } else if (form.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters'
    isValid = false
  }

  if (!form.email.trim()) {
    errors.email = 'Email is required'
    isValid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address'
    isValid = false
  }

  if (!form.subject.trim()) {
    errors.subject = 'Subject is required'
    isValid = false
  }

  if (!form.message.trim()) {
    errors.message = 'Message is required'
    isValid = false
  } else if (form.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters'
    isValid = false
  }

  return isValid
}

const sendEmail = async (formData) => {
  // Check if EmailJS is configured
  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
    console.warn('EmailJS not configured. Using demo mode.')
    // Demo mode - simulates sending
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true })
      }, 1500)
    })
  }

  // Check if emailjs is loaded
  if (typeof window.emailjs === 'undefined') {
    return { success: false, error: 'Email service is loading. Please try again.' }
  }

  try {
    const result = await window.emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email,
      },
      EMAILJS_PUBLIC_KEY
    )
    return { success: true, result }
  } catch (error) {
    console.error('EmailJS Error:', error)
    return { success: false, error: error.text || 'Failed to send email' }
  }
}

const handleSubmit = async () => {
  if (!validateForm()) {
    return
  }

  isSubmitting.value = true
  formStatus.value = 'idle'
  errorMessage.value = ''

  try {
    const result = await sendEmail({
      name: form.name,
      email: form.email,
      subject: form.subject,
      message: form.message,
    })

    if (result.success) {
      formStatus.value = 'success'
      // Reset form
      form.name = ''
      form.email = ''
      form.subject = ''
      form.message = ''

      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        formStatus.value = 'idle'
      }, 5000)
    } else {
      formStatus.value = 'error'
      errorMessage.value = result.error || 'Failed to send message. Please try again.'
    }
  } catch (err) {
    formStatus.value = 'error'
    errorMessage.value = 'An unexpected error occurred. Please try again.'
  } finally {
    isSubmitting.value = false
  }
}
</script>
