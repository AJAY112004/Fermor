import React, { useId, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CircleDollarSign,
  CreditCard,
  Landmark,
  Laptop,
  Plane,
  RefreshCw,
  Shield,
  Sparkles,
  Utensils,
} from 'lucide-react';

const periods = ['1M', '3M', '6M', '1Y', 'ALL'];

function Brand({ compact = false }) {
  return (
    <a className={`brand${compact ? ' brand-compact' : ''}`} href="#top" aria-label="Fermor home">
      <span className="brand-mark"><Landmark size={13} strokeWidth={2.4} /></span>
      <span>Fermor</span>
    </a>
  );
}

function Header() {
  return (
    <header className="site-header" id="top">
      <div className="header-inner">
        <Brand />
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#how-it-works">How it works</a>
          <a href="#interface">Features</a>
          <a href="#goals">Goals</a>
        </nav>
        <div className="header-actions">
          <a className="login-link" href="#footer">Login</a>
          <a className="button button-primary button-small" href="#get-started">Get started <ArrowRight size={12} /></a>
        </div>
      </div>
    </header>
  );
}

function ChartLine({ className = '', dual = false }) {
  const chartId = useId().replaceAll(':', '');
  return (
    <div className={`chart-area ${className}`} aria-label="A rising financial trend chart" role="img">
      <div className="chart-grid"><i /><i /><i /></div>
      <svg className="chart-svg" viewBox="0 0 600 180" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id={`chart-fill-${chartId}`} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#0b775f" stopOpacity=".14" />
            <stop offset="100%" stopColor="#0b775f" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path className="chart-fill" d="M0 163 C42 157 65 147 100 139 S156 120 195 116 S264 105 295 98 S352 75 390 61 S438 42 472 35 S532 26 558 18 S587 9 600 2 L600 180 L0 180 Z" fill={`url(#chart-fill-${chartId})`} />
        <path className="chart-primary-line" d="M0 163 C42 157 65 147 100 139 S156 120 195 116 S264 105 295 98 S352 75 390 61 S438 42 472 35 S532 26 558 18 S587 9 600 2" />
        {dual && <path className="chart-secondary-line" d="M0 174 C55 168 82 164 121 158 S187 148 229 144 S302 133 341 130 S410 125 455 124 S515 121 555 112 S582 108 600 99" />}
      </svg>
      {className.includes('hero-chart') && <><span className="chart-dot dot-one" /><span className="chart-dot dot-two" /><span className="chart-tooltip">₹8,12,000 (Nov 15)</span></>}
    </div>
  );
}

function BalanceCard() {
  const [period, setPeriod] = useState('3M');
  return (
    <div className="balance-card surface">
      <div className="card-heading">
        <div><span className="eyebrow dark-eyebrow">Portfolio balance</span><h2>Financial Overview</h2></div>
        <span className="live-pill"><i /> Live synced</span>
      </div>
      <div className="net-worth-row">
        <div><span className="muted-label">Total Net Worth</span><strong>₹8,42,500</strong></div>
        <span className="growth-pill"><ArrowUpRight size={10} /> +12.4% vs last quarter</span>
      </div>
      <div className="chart-title-row">
        <span className="muted-label">Asset Trajectory</span>
        <div className="period-picker" aria-label="Choose chart period">
          {periods.map((item) => <button key={item} className={period === item ? 'selected' : ''} onClick={() => setPeriod(item)}>{item}</button>)}
        </div>
      </div>
      <ChartLine className="hero-chart" />
      <div className="balance-stats">
        <div><span>Spending</span><strong>₹42,800</strong><small>↓ 4.2% vs avg</small></div>
        <div><span>Saving</span><strong>₹18,200</strong><small>Monthly rate</small></div>
        <div><span>Investing</span><strong>₹25,000</strong><small>SIPs active</small></div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero-band">
      <div className="container hero-layout">
        <div className="hero-copy">
          <span className="hero-kicker"><i /> Your money, finally making sense.</span>
          <h1>Your money, finally<br className="desktop-break" /> making sense.</h1>
          <p>Understand your finances, make better decisions, and build towards what’s next with calm mathematical precision.</p>
          <div className="hero-buttons">
            <a className="button button-primary" href="#get-started">Get started <ArrowRight size={14} /></a>
            <a className="button button-outline" href="#how-it-works">See how it works</a>
          </div>
          <div className="security-note"><Shield size={12} /><span>Bank-grade 256-bit encryption</span><b>·</b><span>Direct bank feed integration</span></div>
        </div>
        <BalanceCard />
      </div>
    </section>
  );
}

const philosophyCards = [
  { number: '01', title: 'Understand', copy: 'See where your money goes and understand your financial position with pristine granularity.', kind: 'expenses' },
  { number: '02', title: 'Decide', copy: 'Turn financial information into clear next steps without cognitive overhead or spreadsheets.', kind: 'opportunity' },
  { number: '03', title: 'Grow', copy: 'Build better financial habits and move systematically towards your ambitious milestones.', kind: 'growth' },
];

function ExpenseMini() {
  const rows = [['Housing', '42%', 'dark'], ['Discretionary', '24%', 'mint'], ['Essentials', '18%', 'light'], ['Subscriptions', '16%', 'gray']];
  return <div className="mini-expense"><div className="mini-title"><span>Expense Composition</span><span>₹64,200 total</span></div><div className="stacked-bar"><i /><i /><i /><i /></div><div className="legend-grid">{rows.map(([name, value, color]) => <span key={name}><i className={`legend-dot ${color}`} />{name}<b>{value}</b></span>)}</div></div>;
}

function PhilosophyCard({ card }) {
  return (
    <article className="philosophy-card surface">
      <span className="number-chip">{card.number}</span>
      <h3>{card.title}</h3>
      <p>{card.copy}</p>
      {card.kind === 'expenses' && <ExpenseMini />}
      {card.kind === 'opportunity' && <div className="opportunity-box"><span className="opportunity-label"><Sparkles size={10} /> Opportunity</span><strong>Surplus detected: ₹14,500 available for allocation</strong><small>Based on steady inflow over 45 days.</small><a href="#goals">→ &nbsp; Move to Emergency Fund</a></div>}
      {card.kind === 'growth' && <div className="growth-mini"><div><span>Compounding Trajectory</span><b>↗ 14.9% annual</b></div><ChartLine className="tiny-chart" /><div className="month-labels"><span>Month 1</span><span>Month 6</span><span>Month 12</span></div></div>}
    </article>
  );
}

function Philosophy() {
  return (
    <section className="philosophy-band" id="how-it-works">
      <div className="container">
        <div className="section-intro philosophy-intro"><span className="eyebrow">01 — Philosophy</span><h2>A clearer way to manage your money.</h2><p>Wealth accumulation isn’t about rigid deprivation. It is a systematic progression from situational clarity to calibrated execution.</p></div>
        <div className="philosophy-grid">{philosophyCards.map(card => <PhilosophyCard key={card.number} card={card} />)}</div>
      </div>
    </section>
  );
}

function Metric({ label, value, note, positive }) {
  return <div className="metric-tile"><span>{label}</span><strong>{value}</strong><small className={positive ? 'positive' : ''}>{note}</small></div>;
}

const activities = [
  { icon: Utensils, name: 'Swiggy', detail: 'Food · Today, 1:45 PM', amount: '−₹640', account: 'HDFC Debit' },
  { icon: RefreshCw, name: 'Zerodha SIP Auto-debit', detail: 'Investment · Yesterday', amount: '−₹15,000', account: 'Nifty 50 Index' },
  { icon: CreditCard, name: 'Apple Subscriptions', detail: 'Software · 3 days ago', amount: '−₹999', account: 'Axis Credit' },
  { icon: CircleDollarSign, name: 'Salary Credit', detail: 'Payroll · Nov 01', amount: '+₹1,25,000', account: 'Cleared', incoming: true },
];

function ActivityList() {
  return <div className="activity-list">{activities.map(({ icon: Icon, ...activity }) => <div className="activity-row" key={activity.name}><span className="activity-icon"><Icon size={13} /></span><div className="activity-name"><strong>{activity.name}</strong><small>{activity.detail}</small></div><div className={`activity-amount${activity.incoming ? ' positive' : ''}`}><strong>{activity.amount}</strong><small>{activity.account}</small></div></div>)}</div>;
}

function Dashboard() {
  const expenses = [['Housing & Rent', '₹28,000', '73%'], ['Food & Dining', '₹8,400', '42%'], ['Utilities & Bills', '₹3,800', '25%'], ['Discretionary', '₹2,600', '18%']];
  return (
    <section className="interface-band" id="interface">
      <div className="container interface-container">
        <div className="section-intro centered-intro"><span className="eyebrow">02 — Interface</span><h2>Your complete financial picture.</h2><p>Everything you need to understand where you stand and where you’re going, rendered with institutional discipline.</p></div>
        <div className="dashboard-window surface">
          <div className="window-bar"><div className="window-controls"><i /><i /><i /></div><span className="synced-label">Synced Institutions:</span><span className="bank-chip"><i /> HDFC Primary (₹1,89,200)</span><span className="bank-chip"><i /> Zerodha Portfolio</span><span className="bank-chip"><i /> Axis Savings</span><span className="refresh-label">Last refresh: Just now &nbsp; <RefreshCw size={10} /></span></div>
          <div className="dashboard-content">
            <div className="metric-grid"><Metric label="Net Worth" value="₹8,42,500" note="↑ ₹64,200 this mo" positive /><Metric label="Monthly Cash Flow" value="+₹18,200" note="Surplus healthy" positive /><Metric label="Investments" value="₹3,24,000" note="+14.8% all-time" positive /><Metric label="Spending" value="₹42,800" note="Within budget" /></div>
            <div className="performance-panel"><div className="panel-heading"><div><strong>12-Month Performance Trends</strong><small>Reconciled asset evolution vs cumulative cash flow</small></div><div className="chart-legend"><span><i /> Net Worth</span><span><i /> Cash Flow</span></div></div><ChartLine className="dashboard-chart" dual /><div className="axis-labels"><span>Nov ’24</span><span>Jan ’25</span><span>Apr ’25</span><span>Jul ’25</span><span>Oct ’25</span><span>Nov ’25</span></div></div>
            <div className="dashboard-lower">
              <div className="expense-panel"><div className="panel-heading"><div><strong>Expense Breakdown</strong><small>Current billing cycle</small></div></div>{expenses.map(([name, value, width]) => <div className="expense-row" key={name}><div><span>{name}</span><b>{value}</b></div><i><span style={{ width }} /></i></div>)}</div>
              <div className="recent-panel"><div className="panel-heading"><div><strong>Recent Activity</strong><small>Direct feeds from linked accounts</small></div><a href="#footer">View all</a></div><ActivityList /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SignalCard() {
  return <article className="signal-card surface"><div className="signal-meta"><span><b>Fermor Signal</b> &nbsp; Your spending</span><span>Detected 2h ago</span></div><h3>Dining increased 18% this month.</h3><p>You’re ₹4,200 above your usual monthly average of ₹6,200 across 14 transactions.</p><div className="comparison"><div><span>This month (to date)</span><b>₹10,400</b></div><i><span /></i><div><span>3-month baseline average</span><b>₹6,200</b></div><i className="baseline"><span /></i></div><div className="signal-footer"><span>Impact on savings target: +1.2%</span><a href="#interface">Review spending <ArrowRight size={11} /></a></div></article>;
}

function ContextSection() {
  const items = [
    ['Noise filtered out', 'We aggregate and reconcile anomalous changes while ignoring typical daily variations.'],
    ['Action-oriented triggers', 'Clear suggestions to rebalance, pause dormant trials, or deploy excess idle cash.'],
    ['Non-prescriptive autonomy', 'No scolding warnings or shame mechanics. Just pure, unvarnished insight.'],
  ];
  return <section className="context-band"><div className="container context-layout"><div className="context-copy"><span className="eyebrow">03 — Context</span><h2>Don’t just know your numbers.<br />Know what they mean.</h2><p>Fermor turns financial information into clearer signals so you can understand what’s changing and decide what to do next without second-guessing.</p><ul>{items.map(([title, copy]) => <li key={title}><span><Check size={10} /></span><div><strong>{title}</strong><small>{copy}</small></div></li>)}</ul></div><SignalCard /></div></section>;
}

const goals = [
  { icon: Shield, tag: 'On track', title: 'Emergency Fund', date: 'Target: Oct 2026', current: '₹72,000', target: '₹1,00,000', percent: '72%', width: '72%', foot: '₹28,000 remaining' },
  { icon: Laptop, tag: 'Auto-saving ₹8k/mo', title: 'Workstation Upgrade', date: 'Target: Dec 2026', current: '₹48,000', target: '₹80,000', percent: '60%', width: '60%', foot: '4 months away' },
  { icon: Plane, tag: 'SIP linked', title: 'Japan Expedition', date: 'Target: Mar 2027', current: '₹31,500', target: '₹50,000', percent: '63%', width: '63%', foot: 'Yielding 8.4%' },
];

function GoalCard({ goal }) {
  const Icon = goal.icon;
  return <article className="goal-card surface"><div className="goal-top"><span className="goal-icon"><Icon size={13} /></span><span className="goal-tag">{goal.tag}</span></div><h3>{goal.title}</h3><small className="goal-date">{goal.date}</small><div className="goal-balance"><strong>{goal.current}</strong><span>{goal.target}</span></div><div className="progress-track"><span style={{ width: goal.width }} /></div><div className="goal-progress"><span>{goal.percent} complete</span><span>{goal.foot}</span></div></article>;
}

function Goals() {
  return <section className="goals-band" id="goals"><div className="container"><div className="section-intro goals-intro"><span className="eyebrow">04 — Horizon</span><h2>Build towards your goals.</h2><p>Turn the things you want into measurable, predictable progress backed by mathematical rigor.</p></div><div className="goals-grid">{goals.map(goal => <GoalCard key={goal.title} goal={goal} />)}</div><div className="cta-band" id="get-started"><div><h2>A clearer financial life starts<br />with understanding where you<br />are.</h2><p>Start building a better picture of your money today with quiet poise and intellectual clarity.</p><small>Free 30-day trial &nbsp; · &nbsp; No credit card required &nbsp; · &nbsp; Cancel anytime</small></div><div className="cta-action"><a className="button button-light" href="mailto:hello@fermor.com">Get started <ArrowRight size={13} /></a><small>Setup takes under 3 minutes</small></div></div></div></section>;
}

function Footer() {
  return <footer className="site-footer" id="footer"><div className="container footer-inner"><div className="footer-brand"><Brand compact /><strong>Quiet authority in wealth management.</strong><small>© 2025 Fermor Technologies Inc. All rights reserved. Quiet authority in wealth management.</small></div><nav className="footer-links" aria-label="Legal"><a href="#footer">Privacy Policy</a><a href="#footer">Terms of Service</a><a href="#footer">Security</a><a href="#footer">Regulatory Disclosures</a><a href="#footer">System Status</a></nav></div></footer>;
}

export default function App() {
  return <><Header /><main><Hero /><Philosophy /><Dashboard /><ContextSection /><Goals /></main><Footer /></>;
}
