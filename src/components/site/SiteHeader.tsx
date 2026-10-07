import { HeaderShell, HeroIn, MobileMenu } from "./Interactive";

export default function SiteHeader() {
  return (
    <HeaderShell>
      <HeroIn kind="drop">
        <div className="relative mx-auto flex h-[84px] max-w-[1200px] items-center justify-between px-5 xl:px-0">
          <a href="/#top" className="rounded-xl text-[28px] font-semibold tracking-[-0.04em] text-paper transition-opacity hover:opacity-70 md:text-[30px]">
            Dispatch
          </a>

          <nav aria-label="Main" className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-white/20 bg-deep/80 px-3 py-[9px] backdrop-blur-md lg:flex">
            <a href="/#agents" className="group relative rounded-full px-3 py-1.5 text-[15px] font-medium text-paper transition-opacity hover:opacity-70">
              Agents
              <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-lilac transition-all duration-300 group-hover:w-[60%]"></span>
            </a>
            <a href="/#how-it-works" className="group relative rounded-full px-3 py-1.5 text-[15px] font-medium text-paper transition-opacity hover:opacity-70">
              How it works
              <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-lilac transition-all duration-300 group-hover:w-[60%]"></span>
            </a>
            <a href="/#pricing" className="group relative rounded-full px-3 py-1.5 text-[15px] font-medium text-paper transition-opacity hover:opacity-70">
              Pricing
              <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-lilac transition-all duration-300 group-hover:w-[60%]"></span>
            </a>
            <a href="/#faq" className="group relative rounded-full px-3 py-1.5 text-[15px] font-medium text-paper transition-opacity hover:opacity-70">
              FAQ
              <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-lilac transition-all duration-300 group-hover:w-[60%]"></span>
            </a>
          </nav>

          <div className="hidden items-center gap-6 lg:flex">
            <a href="https://dispatchstaff.com/login" className="text-[15px] font-medium text-haze transition-colors hover:text-paper">
              Sign in
            </a>
            <a href="/request-invite" className="rounded-[14px] bg-[linear-gradient(110deg,#ddd3ff,#8b5cf6_45%,#3b1d7a)] p-[1.5px] shadow-[0_0_22px_rgba(139,92,246,0.45)] transition-shadow duration-300 hover:shadow-[0_0_38px_rgba(139,92,246,0.85)]">
              <span className="block rounded-[12.5px] bg-deep px-6 py-[11px] text-[16px] font-semibold text-paper">Request an invite</span>
            </a>
          </div>

          <MobileMenu>
            <nav aria-label="Mobile" className="flex flex-col gap-1">
              <a href="/#agents" className="rounded-lg py-3 text-[18px] font-medium text-paper transition-opacity hover:opacity-70">Agents</a>
              <a href="/#how-it-works" className="rounded-lg py-3 text-[18px] font-medium text-paper transition-opacity hover:opacity-70">How it works</a>
              <a href="/#pricing" className="rounded-lg py-3 text-[18px] font-medium text-paper transition-opacity hover:opacity-70">Pricing</a>
              <a href="/#faq" className="rounded-lg py-3 text-[18px] font-medium text-paper transition-opacity hover:opacity-70">FAQ</a>
              <a href="/request-invite" className="mt-4 rounded-[14px] bg-[linear-gradient(110deg,#ddd3ff,#8b5cf6_45%,#3b1d7a)] p-[1.5px] shadow-[0_0_22px_rgba(139,92,246,0.45)]">
                <span className="block rounded-[12.5px] bg-deep px-6 py-3 text-center text-[17px] font-semibold text-paper">Request an invite</span>
              </a>
              <a href="https://dispatchstaff.com/login" className="mt-3 text-center text-[15px] text-haze transition-colors hover:text-paper">
                Already a tester? Sign in
              </a>
            </nav>
          </MobileMenu>
        </div>
      </HeroIn>
    </HeaderShell>
  );
}
