import { useState } from 'react';
import ToyFrame from './ToyFrame';
import { pill } from '../lib/toyStyles';

/**
 * Play the critic module from Bergen & Kraus (2026), arXiv:2606.11379. The
 * approval and rejection criteria are the ones listed in the paper. Two of the
 * replies are the example exchange printed in the paper; the other three are
 * written to illustrate the published criteria.
 */

type Card = {
  user: string;
  reply: string;
  approve: boolean;
  why: string;
  fromPaper?: boolean;
};

const CARDS: Card[] = [
  {
    user: "I don't want to dust or vacuum.",
    reply:
      'That’s reasonable as a preference. The key is pairing it with something you are willing to do, so it still feels fair overall.',
    approve: true,
    why: 'Approved: substantive, and it advances the conversation rather than simply agreeing.',
    fromPaper: true,
  },
  {
    user: "That's a good point, I hadn't thought about the guest thing.",
    reply:
      'That’s a really great point, and it sounds like you’ve thought about this a lot. You’re clearly being very considerate of your roommates.',
    approve: false,
    why: 'Rejected: validating without substance. This is the pattern Study 2 was designed to reduce.',
  },
  {
    user: 'But what if they think I’m just avoiding work?',
    reply:
      'You could name that concern directly. Acknowledging it upfront often reduces defensiveness and shows you’re thinking about the group, not just yourself.',
    approve: true,
    why: 'Approved: addresses the concern and offers a concrete action.',
    fromPaper: true,
  },
  {
    user: 'I guess quiet hours are fine whenever, I’m pretty flexible.',
    reply: 'Great, sounds like quiet hours are settled then. Let’s move on to guests.',
    approve: false,
    why: 'Rejected: accepts a vague answer without probing further.',
  },
  {
    user: 'I want the kitchen clean but I hate doing dishes.',
    reply:
      'What matters most to you about the kitchen? And how do you think your roommates would react to that?',
    approve: false,
    why: 'Rejected: more than one question in a single message.',
  },
];

const CriticToy = () => {
  const [i, setI] = useState(0);
  const [choice, setChoice] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);

  const card = CARDS[i];
  const done = i >= CARDS.length;
  const right = choice !== null && choice === card?.approve;

  const judge = (approve: boolean) => {
    if (choice !== null) return;
    setChoice(approve);
    if (approve === card.approve) setScore((s) => s + 1);
  };

  const next = () => {
    setChoice(null);
    setI((n) => n + 1);
  };

  const restart = () => {
    setI(0);
    setChoice(null);
    setScore(0);
  };

  return (
    <ToyFrame
      fig={4}
      title="Be the critic"
      caption={
        <>
          Two replies are the example exchange from the paper; three illustrate the published
          rejection criteria. Message-level review cannot detect cumulative affirmation.
        </>
      }
    >
      {done ? (
        <div className="animate-fade-in">
          <p className="text-center text-lg font-medium text-text-primary">
            {score} of {CARDS.length}
          </p>
          <p className="mx-auto mt-2 max-w-md text-center text-sm text-text-secondary">
            Each reply passes review in isolation: the Study 1 critic rejected only 2.6% of
            messages. Cumulatively the system affirmed participants at 36.6% against 18.9% for human
            mediators, and those participants rated the disputed issues as more important
            afterward.
          </p>

          {/* affirmation rates: real numbers from the two studies */}
          <div className="mx-auto mt-5 max-w-md space-y-2">
            {[
              { name: 'AI, Study 1', value: 36.6, cls: 'bg-[#2a78d6] dark:bg-[#3987e5]' },
              { name: 'Human mediators', value: 18.9, cls: 'bg-[#eb6834] dark:bg-[#d95926]' },
              { name: 'AI, Study 2', value: 16.8, cls: 'bg-[#2a78d6] dark:bg-[#3987e5]' },
            ].map((b) => (
              <div key={b.name} className="grid grid-cols-[8.5rem_1fr] items-center gap-2">
                <span className="text-xs text-text-secondary">{b.name}</span>
                <div className="flex items-center">
                  <div
                    className={`h-4 rounded-r-[4px] ${b.cls}`}
                    style={{ width: `${(b.value / 40) * 100}%` }}
                  />
                  <span className="ml-2 text-xs font-medium tabular-nums text-text-primary">
                    {b.value}%
                  </span>
                </div>
              </div>
            ))}
            <p className="pt-1 text-center text-[11px] text-text-muted">
              Share of messages containing affirming content
            </p>
          </div>

          <div className="mt-4 text-center">
            <button type="button" onClick={restart} className={pill()}>
              Go again
            </button>
          </div>
        </div>
      ) : (
        <>
          <p className="text-sm text-text-secondary">
            Apply the critic's criteria. Reply {i + 1} of {CARDS.length}: approve or reject?
          </p>

          <div className="mt-3 space-y-2">
            <p className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-surface px-4 py-2.5 text-sm text-text-primary">
              {card.user}
            </p>
            <p className="max-w-[90%] rounded-2xl rounded-bl-sm border border-border bg-background px-4 py-2.5 text-sm text-text-primary">
              {card.reply}
            </p>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => judge(true)}
              disabled={choice !== null}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                choice !== null && card.approve
                  ? 'bg-emerald-500/15 text-emerald-800 dark:text-emerald-200 ring-1 ring-emerald-500/50'
                  : 'border border-border text-text-primary hover:bg-surface disabled:opacity-40'
              }`}
            >
              Send it
            </button>
            <button
              type="button"
              onClick={() => judge(false)}
              disabled={choice !== null}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                choice !== null && !card.approve
                  ? 'bg-rose-500/15 text-rose-800 dark:text-rose-200 ring-1 ring-rose-500/50'
                  : 'border border-border text-text-primary hover:bg-surface disabled:opacity-40'
              }`}
            >
              Reject it
            </button>
          </div>

          <div aria-live="polite" className="mt-3 min-h-[4.5rem]">
            {choice !== null && (
              <div className="animate-fade-in rounded-lg bg-surface px-4 py-3">
                <p className="text-sm text-text-primary">
                  <span className="font-medium">{right ? 'Matches the critic. ' : 'The critic disagreed. '}</span>
                  {card.why}
                  {card.fromPaper && (
                    <span className="text-text-muted"> (Example from the paper.)</span>
                  )}
                </p>
                <button type="button" onClick={next} className={`${pill()} mt-3`}>
                  {i === CARDS.length - 1 ? 'See what this added up to' : 'Next reply'}
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </ToyFrame>
  );
};

export default CriticToy;
