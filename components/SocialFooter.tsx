import {
  Facebook,
  Instagram,
  Twitter,
  Github,
  MessageCircle,
  Mail,
} from "lucide-react"

const socials = [
  { href: "https://facebook.com/...", Icon: Facebook },
  { href: "https://instagram.com/...", Icon: Instagram },
  { href: "https://x.com/...", Icon: Twitter },
  { href: "https://github.com/...", Icon: Github },
  { href: "https://whatsapp.com/dl/", Icon: MessageCircle },
  { href: "mailto:you@email.com", Icon: Mail },
]

export default function SocialFooter() {
  return (
    <footer className="fixed bottom-0 z-50 w-full bg-black/60 backdrop-blur">
      <div className="flex justify-center gap-6 py-3 text-zinc-300">
        {socials.map(({ href, Icon }) => (
          <a key={href} href={href} target="_blank">
            <Icon className="hover:text-emerald-400 transition" />
          </a>
        ))}
      </div>
    </footer>
  )
}
