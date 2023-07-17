import { HeadersFunction, LinksFunction, MetaFunction } from '@remix-run/node';
import { HandThumbUpIcon, TrophyIcon } from '@heroicons/react/24/solid';

import PricingPlan from '~/components/marketing/PricingPlan';
import marketingStyles from '~/styles/marketing.css';

const PRICING_PLANS = [
  {
    id: 'p1',
    title: 'Basic',
    price: 'Free forever',
    perks: ['1 User', 'Up to 100 expenses/year', 'Basic analytics'],
    icon: HandThumbUpIcon,
  },
  {
    id: 'p2',
    title: 'Pro',
    price: '$9.99/month',
    perks: ['Unlimited Users', 'Unlimited expenses/year', 'Detailed analytics'],
    icon: TrophyIcon,
  },
];

export default function PricingPage() {
  return (
    <main id='pricing'>
      <h2>Great Product, Simple Pricing</h2>
      <ol id='pricing-plans'>
        {PRICING_PLANS.map((plan) => (
          <li key={plan.id} className='plan'>
            <PricingPlan
              title={plan.title}
              price={plan.price}
              perks={plan.perks}
              icon={plan.icon}
            />
          </li>
        ))}
      </ol>
    </main>
  );
}

export const meta: MetaFunction = () => ({
  title: 'Pricing',
  description: 'See our pricing plans.',
});

export const headers: HeadersFunction = ({ parentHeaders }) => ({
  // @ts-ignore
  'Cache-Control': parentHeaders.get('Cache-Control'), // 60 minutes
});

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: marketingStyles }];
};
