import { PriceCard } from "@/components/price-card";
import { plans } from "@/config/pricing";
import FadeIn from "@/registry/components/magicui/fade-in";
import { MagicContainer } from "@/registry/components/magicui/magic-card";

export default function Pricing() {
  return (
    <section id="pricing" className="py-14">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn>
            <h4 className="text-xl font-bold tracking-tight text-foreground">
              Magic UI
            </h4>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
              Lifetime Access
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-xl leading-8 text-foreground/80">
              Get <strong>lifetime access</strong> to all components and
              templates available today , plus any new ones we add in the future
              for a simple one-time price.
            </p>
          </FadeIn>
        </div>

        <MagicContainer className="mx-auto mt-16 grid w-full max-w-screen-md justify-center gap-8 lg:grid-cols-2">
          {plans.map((item, idx) => (
            <PriceCard key={idx} item={item} className="h-fit max-w-[400px]" />
          ))}
        </MagicContainer>
      </div>
    </section>
  );
}