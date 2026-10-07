export default function SiteFooter() {
  return (
    <footer className="bg-ink">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-5 py-14 sm:grid-cols-2 md:grid-cols-4 md:py-16 xl:px-0">
        <div>
          <h2 className="text-[17px] font-semibold text-paper">Navigation</h2>
          <ul className="mt-5 flex flex-col gap-3">
            <li><a href="/#top" className="text-[16px] text-haze transition-colors hover:text-paper">Home</a></li>
            <li><a href="/#agents" className="text-[16px] text-haze transition-colors hover:text-paper">Agents</a></li>
            <li><a href="/#how-it-works" className="text-[16px] text-haze transition-colors hover:text-paper">How it works</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-[17px] font-semibold text-paper">Product</h2>
          <ul className="mt-5 flex flex-col gap-3">
            <li><a href="/#features" className="text-[16px] text-haze transition-colors hover:text-paper">Features</a></li>
            <li><a href="/#pricing" className="text-[16px] text-haze transition-colors hover:text-paper">Pricing preview</a></li>
            <li><a href="/#faq" className="text-[16px] text-haze transition-colors hover:text-paper">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-[17px] font-semibold text-paper">Access</h2>
          <ul className="mt-5 flex flex-col gap-3">
            <li><a href="/request-invite" className="text-[16px] text-haze transition-colors hover:text-paper">Request an invite</a></li>
            <li><a href="https://dispatchstaff.com/login" className="text-[16px] text-haze transition-colors hover:text-paper">Sign in</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-[17px] font-semibold text-paper">Contact</h2>
          <ul className="mt-5 flex flex-col gap-3">
            <li><a href="mailto:hello@dispatchstaff.com" className="text-[16px] text-haze transition-colors hover:text-paper">hello@dispatchstaff.com</a></li>
            <li><span className="text-[16px] text-haze">Online web app, available everywhere</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-3 px-5 py-7 text-[15px] text-haze md:flex-row xl:px-0">
          <p>Dispatch. Private beta, invite-only.</p>
          <p>Built on Cloudflare&apos;s global network</p>
        </div>
      </div>
    </footer>
  );
}
