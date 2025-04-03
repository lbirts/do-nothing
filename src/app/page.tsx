import Link from "next/link";
import Image from "next/image";
import PlanForm from "../components/PlanForm";
import { presetOptions } from "../utils/presetOptions";

export default function Home() {
  return (
    <div className="py-20 sm:px-16 px-6 md:max-w-3/4 lg:max-w-1/2 m-auto">
      <Image
        src="/Logo.svg"
        alt="Nothing Logo"
        height={0}
        width={0}
        className="h-10 w-10 mb-2"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <h1 className="font-display text-2xl sm:text-3xl font-black">Nothing</h1>
      <h2 className="text-neutral-500 text-sm font-semibold">
        ... simply do nothing
      </h2>

      <PlanForm />

      <hr className="my-10 w-20 border-neutral-700" />

      <div className="space-y-3">
        <h2 className="font-bold font-display sm:text-2xl text-lg">
          The Art of Doing Nothing
        </h2>
        <p className="text-neutral-500 font-semibold sm:text-lg text-base font-serif">
          Welcome to the Nothing Timer, your digital sanctuary in a world that
          never stops demanding your attention. This simple yet powerful tool
          creates moments of pure presence, allowing you to disconnect from the
          relentless stream of information and reconnect with your authentic
          self. As the timer counts down, you&apos;ll feel the weight of constant
          connectivity lifting, replaced by a lightness that comes from giving
          yourself permission to simply exist without purpose or productivity.
        </p>
        <p className="text-neutral-500 font-semibold sm:text-lg text-base font-serif">
          The Nothing Timer transforms emptiness into a gateway for renewal,
          inviting insights that can&apos;t emerge when your mind is crowded with
          endless inputs. Unlike the shallow dopamine hits that keep us
          scrolling and tapping, these intentional pauses tap into a deeper
          wellspring of fulfillment—one that awakens forgotten parts of yourself
          that thrive in stillness. With each session, you&apos;ll rediscover the
          expansiveness that exists when you create space between thoughts, like
          clearing fog from a window to reveal a vibrant landscape that was
          always there.
        </p>
        <p className="text-neutral-500 font-semibold sm:text-lg text-base font-serif">
          Each Nothing Timer session represents a radical act of reclaiming your
          attention from the platforms and systems designed to capture and
          monetize it. The benefits extend beyond those precious minutes of
          disconnection, gradually rebuilding your capacity for deep thought and
          genuine presence in a world that has forgotten their worth. As you
          develop this practice, you&apos;ll notice the quality of your attention
          transforming, not just during your nothing sessions but throughout
          your day—like islands of clarity expanding in the digital noise that
          surrounds us.
        </p>
        <div>
          <p className="text-neutral-500 font-semibold sm:text-lg text-base font-serif">
            Created by{" "}
            <Link
              href="https://laurenbirts.dev"
              target="_blank"
              className="decoration-dotted underline text-white"
            >
              Lauren
            </Link>
          </p>
          <p className="text-neutral-500 font-semibold sm:text-lg text-base font-serif">
            Code available on{" "}
            <Link
              href="https://github.com/lbirts/do-nothing"
              target="_blank"
              className="decoration-dotted underline text-white"
            >
              Github
            </Link>
          </p>
        </div>
      </div>

      <hr className="my-10 w-20 border-neutral-700" />

      <div>
        <h3 className="font-bold font-display sm:text-2xl text-lg">Presets</h3>
        <p className="text-neutral-500 text-sm font-semibold">
          Do nothing for ...
        </p>
        <div className="flex gap-3 flex-wrap mt-4">
          {presetOptions.map((preset) => (
            <Link
              href={`/start/${preset.value}`}
              className="block w-fit rounded-full bg-gradient-to-b from-neutral-950 to-neutral-900 font-xs px-3 py-1 shadow-xs shadow-neutral-700"
              key={preset.value}
            >
              {preset.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
