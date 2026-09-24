export interface FAQItem {
  question: string;
  answer: string;
}

export interface ArticleData {
  id: string;
  slug: string;
  type: "news" | "blog" | "integration-waitlist";
  title: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  publishDate: string;
  isoDate: string;
  modifiedDate?: string;
  authorSlug: string;
  targetKeyword: string;
  category: string;
  readingTime: string;
  featuredImage: string;
  excerpt: string;
  contentHtml: string;
  faqs?: FAQItem[];
  relatedSlugs?: string[];
  canonicalUrl: string;
}

export const allArticles: ArticleData[] = [
  // 0. News Release — Thu 24 Sep (News)
  {
    id: "news-callpilot-launches-ai-call-agent-business-voip-lines-automation",
    slug: "callpilot-launches-ai-call-agent-business-voip-lines-automation",
    type: "news",
    title: "CallPilot Launches One Platform for Business VoIP Lines, an AI Call Agent and Automation",
    seoTitle: "CallPilot Launches AI Call Agent, VoIP Lines & Automation",
    metaDescription: "CallPilot's AI applicant screening calls qualify candidates 24/7 in under 2 minutes and sync to your ATS. Business VoIP lines with automation launch soon.",
    h1: "CallPilot Launches One Platform for Business VoIP Lines, an AI Call Agent and Automation",
    publishDate: "24 September 2026",
    isoDate: "2026-09-24T09:00:00Z",
    modifiedDate: "2026-09-24T09:00:00Z",
    authorSlug: "steven-peddie",
    targetKeyword: "AI applicant screening calls",
    category: "Product & Company News",
    readingTime: "3 min read",
    featuredImage: "/images/hero-dashboard-laptop.webp",
    excerpt: "AI applicant screening calls qualify job applicants 24/7 in under 2 minutes, chase documents by WhatsApp, SMS and email, and update the ATS automatically. Business VoIP lines are launching soon.",
    canonicalUrl: "https://callpilot.pro/news/callpilot-launches-ai-call-agent-business-voip-lines-automation/",
    contentHtml: `
<p class="lead text-xl text-gray-700 font-medium mb-6">AI applicant screening calls qualify job applicants 24/7 in under 2 minutes, chase documents by WhatsApp, SMS and email, and update the ATS automatically. Business VoIP lines are launching soon.</p>

<p class="mb-4"><strong>RAS AL KHAIMAH, UAE, 24 September 2026:</strong> <a href="https://www.callpilot.pro" class="text-blue-600 font-semibold underline hover:text-blue-800">CallPilot</a>, the AI phone calls platform from Swiftwave.ai, today announced one platform that brings together business VoIP lines, an AI call agent and workflow automation. The launch is led by CallPilot's <a href="/ai-applicant-screening" class="text-blue-600 font-semibold underline hover:text-blue-800">AI applicant screening calls</a>, which are live now for staffing agencies, recruitment firms and high-volume employers. Low-cost <a href="/business-voip" class="text-blue-600 font-semibold underline hover:text-blue-800">business VoIP lines</a> with built-in automation will follow soon.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">The problem: applicants go cold while recruiters are busy or asleep</h2>
<p class="mb-4">High-volume hiring runs on speed. Applicants apply at all hours, often to several jobs at once, and the first recruiter to reach them usually wins. But recruiters can only make so many calls in a day. They spend hours phoning applicants who don't meet basic requirements, and hours more chasing ID and work authorisation documents.</p>
<p class="mb-6">CallPilot takes that repetitive first stage off the recruiter's desk.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">How CallPilot AI applicant screening calls work</h2>
<ol class="list-decimal pl-6 space-y-2 mb-6 text-gray-700">
  <li><strong>The AI call agent phones every applicant, 24/7.</strong> CallPilot calls applicants day or night, including evenings and weekends.</li>
  <li><strong>Role-specific screening in under 2 minutes.</strong> The AI asks the questions set for each role. A "No" on any requirement ends the screen immediately as Unsuccessful. It is not a scoring system, so results are clear-cut.</li>
  <li><strong>Documents requested automatically.</strong> Qualified applicants are asked for their documents by WhatsApp, SMS and email, and follow-ups continue until the documents arrive.</li>
  <li><strong>Traffic-light results in the ATS.</strong> Every outcome is written back to the recruiter's applicant tracking system: Qualified, Awaiting Docs or Unsuccessful.</li>
  <li><strong>The recruiter is notified to verify.</strong> CallPilot deliberately stops at verification. The recruiter's judgement starts where the automation ends.</li>
</ol>

<p class="mb-6">CallPilot integrates with <strong>Recruit CRM, Ashby, Greenhouse and JobAdder</strong>, with <strong>iCIMS</strong> coming soon.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Business VoIP lines with automation: launching soon</h2>
<p class="mb-4">Alongside AI calling, CallPilot is launching <strong>business VoIP lines</strong> for recruitment agencies and businesses of all sizes. One low-cost number will handle:</p>
<ul class="list-disc pl-6 space-y-2 mb-6 text-gray-700">
  <li>Calls, WhatsApp, SMS and email on the same line</li>
  <li>Call forwarding, IVR menus and call routing</li>
  <li>Automation and workflows connected to the AI call agent</li>
  <li>ATS integration, so every call and message is logged in one place</li>
</ul>

<p class="mb-6">Businesses will be able to start with a VoIP line and add the AI call agent and automation when they are ready. All of it is managed from one platform.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Founder comment</h2>
<blockquote class="p-5 my-6 bg-gray-50 border-l-4 border-emerald-500 rounded-r-xl">
  <p class="text-lg italic text-gray-800 mb-2">"Recruiters don't lose candidates because they're bad at their job. They lose them because they can't be on the phone at 11pm on a Sunday. CallPilot can. It calls every applicant, qualifies them in under 2 minutes, chases the documents and updates the ATS, so by the morning the recruiter has a list of qualified candidates ready to verify. Adding business VoIP lines means one platform now covers the line, the AI call and everything that happens after it."</p>
  <footer class="font-bold text-gray-900">— Steven Peddie, Founder, CallPilot</footer>
</blockquote>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Pricing and availability</h2>
<ul class="list-disc pl-6 space-y-2 mb-6 text-gray-700">
  <li><strong>AI applicant screening calls:</strong> available now at <strong>$1.33 per completed screen</strong>. See <a href="/ai-applicant-screening" class="text-blue-600 font-semibold underline hover:text-blue-800">AI applicant screening calls</a>.</li>
  <li><strong>Business VoIP lines + automation:</strong> launching soon. Register interest at <a href="/business-voip" class="text-blue-600 font-semibold underline hover:text-blue-800">business VoIP lines</a>.</li>
  <li><strong>Demos:</strong> book a demo at <a href="/get-started" class="text-blue-600 font-semibold underline hover:text-blue-800">https://www.callpilot.pro/book-a-demo</a></li>
  <li><strong>Full announcement:</strong> <a href="/news/callpilot-launches-ai-call-agent-business-voip-lines-automation" class="text-blue-600 font-semibold underline hover:text-blue-800">https://www.callpilot.pro/news/callpilot-launches-ai-call-agent-business-voip-lines-automation</a></li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Who CallPilot is for</h2>
<ul class="list-disc pl-6 space-y-2 mb-6 text-gray-700">
  <li>Staffing and recruitment agencies handling large applicant volumes</li>
  <li>In-house talent teams and RPOs running high-volume hiring</li>
  <li>Businesses that want a low-cost business phone line with messaging and automation built in</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">About CallPilot</h2>
<p class="mb-4">CallPilot is an AI phone calls platform that combines an AI call agent, business VoIP lines and automation. Its AI applicant screening calls qualify job applicants 24/7 in under 2 minutes, request documents by WhatsApp, SMS and email, and sync results to leading applicant tracking systems. CallPilot is a brand of Swiftwave.ai, operated by Swiftwave FZ-LLC, Ras Al Khaimah, United Arab Emirates. Learn more at <a href="https://www.callpilot.pro" class="text-blue-600 font-semibold underline hover:text-blue-800">www.callpilot.pro</a>.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Media contact</h2>
<p class="text-gray-700 leading-relaxed">
  CallPilot Media Relations<br />
  <a href="mailto:support@callpilot.pro" class="text-blue-600 font-semibold underline hover:text-blue-800">support@callpilot.pro</a><br />
  <a href="https://www.callpilot.pro" class="text-blue-600 font-semibold underline hover:text-blue-800">https://www.callpilot.pro</a>
</p>
`,
    relatedSlugs: ["callpilot-ashby-integration", "business-voip-whatsapp-sms-ats-integration", "how-fast-can-ai-qualify-an-applicant"]
  },

  // 1. Post 1 — Mon 14 Sep (News)
  {
    id: "post-1-ashby-news",
    slug: "callpilot-ashby-integration",
    type: "news",
    title: "CallPilot Is Now Live With Ashby | AI Applicant Screening",
    seoTitle: "CallPilot Is Now Live With Ashby | AI Applicant Screening",
    metaDescription: "CallPilot's human-like AI screening call now integrates with Ashby. Applicants screened within the hour, documents collected, and Ashby synced automatically.",
    h1: "CallPilot Is Now Live With Ashby",
    publishDate: "14 September 2026",
    isoDate: "2026-09-14T09:00:00Z",
    modifiedDate: "2026-09-14T09:00:00Z",
    authorSlug: "marcus-vance",
    targetKeyword: "Ashby AI applicant screening",
    category: "Integrations & Announcements",
    readingTime: "3 min read",
    featuredImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&auto=format&fit=crop&q=80",
    excerpt: "CallPilot's AI applicant screening call is now live with Ashby. Ashby clients can screen every applicant, collect ID and documents, and have the candidate record updated automatically.",
    canonicalUrl: "https://callpilot.pro/news/callpilot-ashby-integration/",
    contentHtml: `
<p class="lead text-xl text-gray-700 font-medium mb-6">CallPilot's AI applicant screening call is now live with Ashby. Ashby clients can screen every applicant, collect ID and documents, and have the candidate record updated automatically — without a recruiter picking up the phone.</p>

<p>You can also check out our permanent <a href="/integrations/ashby/" class="text-blue-600 font-semibold underline hover:text-blue-800">Ashby AI applicant screening integration page</a> to explore the complete technical flow or claim your <a href="/free-trial/" class="text-blue-600 font-semibold underline hover:text-blue-800">100 free screening credits</a>.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">The bottleneck this removes</h2>
<p class="mb-4">High-volume recruitment fails in the same place almost everywhere: applications arrive faster than recruiters can call them.</p>
<p class="mb-4">An application lands. It joins a queue. A recruiter gets to it when they get to it — often days later, often after two voicemails and a missed callback. By the time the screening conversation actually happens, the candidate has applied to four other roles and one of them has already called.</p>
<p class="mb-4">Then the second bottleneck starts. The applicant is qualified, so now you need their right to work documents and their ID. You email them. They don't reply. You email again. A week passes. The record sits at "awaiting documents" while the candidate cools off and eventually goes quiet.</p>
<p class="mb-6">Neither of those problems is a recruiter performance problem. They're arithmetic. There are more applicants than there are recruiter hours to call them.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">What happens now</h2>
<p class="mb-4">An applicant applies to your Ashby job posting. CallPilot polls Ashby on a schedule and picks up the new application within the hour, then calls the applicant with a human-like AI voice.</p>
<p class="mb-4">The call runs your screening questions as a natural conversation in a human-like AI voice — availability, right to work, experience, location, salary expectation, whatever you've configured for that role. It doesn't sound like a phone tree and it isn't a list of recorded prompts. Most calls complete in under two minutes.</p>
<p class="mb-4">If the applicant qualifies, CallPilot immediately sends a WhatsApp or SMS message requesting their ID and any documents the role requires. That message goes out seconds after the call ends, while the applicant is still thinking about your job rather than three days later when they've moved on.</p>
<p class="mb-4">When the documents come back, they attach to the applicant's Ashby profile. The screening outcome, the call transcript and the status all write straight into Ashby.</p>
<p class="mb-6">No re-keying. No separate dashboard. No export. The whole sequence is fully automated — nobody has to trigger it, chase it or type it up.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">What your recruiters open on Monday</h2>
<p class="mb-4">Three statuses on the Ashby pipeline:</p>

<div class="space-y-4 my-6">
  <div class="p-5 bg-emerald-50 border border-emerald-200 rounded-xl">
    <h3 class="font-bold text-emerald-900 text-lg mb-1">🟢 Qualified – Documents Received</h3>
    <p class="text-emerald-800 text-sm">Passed screening, ID and documents in and attached to the record. Ready for your recruiter to verify and progress.<br/><em>Worth being precise: received is not verified. CallPilot collects the documents and puts them on the record. Checking them is a recruiter's job and stays one.</em></p>
  </div>
  <div class="p-5 bg-amber-50 border border-amber-200 rounded-xl">
    <h3 class="font-bold text-amber-900 text-lg mb-1">🟠 Qualified – Awaiting Documents</h3>
    <p class="text-amber-800 text-sm">Passed screening. The automated WhatsApp/SMS chase is running.</p>
  </div>
  <div class="p-5 bg-red-50 border border-red-200 rounded-xl">
    <h3 class="font-bold text-red-900 text-lg mb-1">🔴 Unsuccessful</h3>
    <p class="text-red-800 text-sm">Did not meet the criteria for the role.</p>
  </div>
</div>

<p class="mb-6">Instead of opening Ashby to a list of names to call, your recruiters open it to a pipeline that has already been worked.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Applications don't arrive during office hours</h2>
<p class="mb-4">Most people job hunt in the evening and at weekends, because during the day they're at their current job.</p>
<p class="mb-4">A 9-to-5, Monday-to-Friday recruitment team covers 40 hours out of 168. The applications arriving in the other 128 sit and wait — and on Monday morning they queue behind Monday's applications for the same finite recruiter time.</p>
<p class="mb-6">CallPilot picks up the Friday 11pm applicant within the hour and screens them before midnight. Documents requested in the same interaction, and often back before your team is awake.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">100 free screening credits for Ashby clients</h2>
<p class="mb-6">Ashby clients can trial CallPilot with 100 free applicant screening credits on a live role. No card required.</p>
<p class="mb-6">Pick your highest-volume vacancy, run it through CallPilot for a week, and compare the pipeline against the same role screened manually.</p>
`,
    relatedSlugs: ["recruit-crm", "jobadder", "how-fast-can-ai-qualify-an-applicant"]
  },

  // 2. Post 2 — Wed 16 Sep (Blog)
  {
    id: "post-2-fast-qualify",
    slug: "how-fast-can-ai-qualify-an-applicant",
    type: "blog",
    title: "How Fast Can AI Qualify an Applicant? | CallPilot",
    seoTitle: "How Fast Can AI Qualify an Applicant? | CallPilot",
    metaDescription: "Under two minutes from application to qualified. How AI screening calls compare to manual phone screens on speed, throughput and candidate drop-off.",
    h1: "How Fast Can AI Qualify an Applicant?",
    publishDate: "16 September 2026",
    isoDate: "2026-09-16T09:00:00Z",
    modifiedDate: "2026-09-16T09:00:00Z",
    authorSlug: "marcus-vance",
    targetKeyword: "fastest AI applicant screening",
    category: "AI Screening & Speed",
    readingTime: "5 min read",
    featuredImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&auto=format&fit=crop&q=80",
    excerpt: "Under two minutes. From the moment an application lands to a qualified-or-unsuccessful decision with documents already requested, an AI screening call completes in less time than it takes a recruiter to find the CV.",
    canonicalUrl: "https://callpilot.pro/blog/how-fast-can-ai-qualify-an-applicant/",
    contentHtml: `
<p class="lead text-xl text-gray-700 font-medium mb-6">Under two minutes. From the moment an application lands to a qualified-or-unsuccessful decision with documents already requested, an AI screening call completes in less time than it takes a recruiter to find the CV.</p>

<p>That number only means something if you're clear about what "qualified" actually means, and honest about what the manual alternative really costs. So here's both.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">What "qualified" actually means</h2>
<p class="mb-4">A lot of recruitment software claims fast screening and means "we sent an automated email". That isn't screening, it's acknowledgement.</p>
<p class="mb-4">An applicant is qualified when you know:</p>
<ul class="list-disc pl-6 space-y-2 mb-6 text-gray-700">
  <li>They're genuinely interested in this specific role, not bulk-applying</li>
  <li>They have the right to work</li>
  <li>They're available when you need them</li>
  <li>Their experience meets the minimum bar for the role</li>
  <li>Their salary or rate expectation is inside your range</li>
  <li>They can get to the location, or work the shift pattern</li>
</ul>
<p class="mb-6">And when you've asked them for the documents that prove it. Anything short of that is a contacted applicant, not a qualified one. The distinction matters because contacted applicants still cost a recruiter a full screening conversation later.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">The manual timeline</h2>
<p class="mb-4">Take a real sequence. An application arrives Friday at 9pm.</p>

<div class="overflow-x-auto my-6">
  <table class="w-full text-left border-collapse border border-gray-200 text-sm">
    <thead>
      <tr class="bg-gray-100 border-b border-gray-200">
        <th class="p-3 font-semibold text-gray-900">When</th>
        <th class="p-3 font-semibold text-gray-900">What happens</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200">
      <tr><td class="p-3 font-medium">Fri 9pm</td><td class="p-3">Application lands</td></tr>
      <tr><td class="p-3 font-medium">Mon 9am</td><td class="p-3">Recruiter opens the ATS to a weekend backlog</td></tr>
      <tr><td class="p-3 font-medium">Mon 2pm</td><td class="p-3">First call attempt — voicemail</td></tr>
      <tr><td class="p-3 font-medium">Tue 10am</td><td class="p-3">Second attempt — candidate is at work, can't talk</td></tr>
      <tr><td class="p-3 font-medium">Tue 6pm</td><td class="p-3">Candidate calls back, recruiter has gone home</td></tr>
      <tr><td class="p-3 font-medium">Wed 11am</td><td class="p-3">Screening call finally happens. Applicant qualifies</td></tr>
      <tr><td class="p-3 font-medium">Wed 11.15am</td><td class="p-3">Recruiter emails requesting right to work documents</td></tr>
      <tr><td class="p-3 font-medium">Fri</td><td class="p-3">No response. Chase email sent</td></tr>
      <tr><td class="p-3 font-medium">Following Mon</td><td class="p-3">Documents arrive</td></tr>
    </tbody>
  </table>
</div>

<p class="mb-6">Ten days from application to qualified-with-documents. And that's the version where nothing goes wrong and the candidate is still interested at the end of it. Most of that elapsed time isn't work. It's waiting — for Monday, for a callback, for an email reply. The actual recruiter effort is maybe 25 minutes. The other nine and a half days are dead air, and dead air is where candidates get hired by someone else.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">The automated timeline</h2>
<p class="mb-4">Same application, same Friday 9pm with CallPilot:</p>

<div class="overflow-x-auto my-6">
  <table class="w-full text-left border-collapse border border-gray-200 text-sm">
    <thead>
      <tr class="bg-gray-100 border-b border-gray-200">
        <th class="p-3 font-semibold text-gray-900">When</th>
        <th class="p-3 font-semibold text-gray-900">What happens</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200">
      <tr><td class="p-3 font-medium">Fri 9.42pm</td><td class="p-3">CallPilot polls the ATS and picks up the application</td></tr>
      <tr><td class="p-3 font-medium">Fri 9.44pm</td><td class="p-3">CallPilot calls with a human-like AI voice</td></tr>
      <tr><td class="p-3 font-medium">Fri 9.46pm</td><td class="p-3">Screening questions complete, applicant pre-qualifies</td></tr>
      <tr><td class="p-3 font-medium">Fri 9.46pm</td><td class="p-3">WhatsApp sent requesting ID and right to work documents</td></tr>
      <tr><td class="p-3 font-medium">Fri 9.54pm</td><td class="p-3">Documents received and attached to the record</td></tr>
      <tr><td class="p-3 font-medium">Fri 9.54pm</td><td class="p-3">ATS synced automatically: Qualified – Documents Received</td></tr>
      <tr><td class="p-3 font-medium">Mon 9am</td><td class="p-3">Recruiter opens a qualified, documented applicant</td></tr>
    </tbody>
  </table>
</div>

<p class="mb-6">Under an hour of elapsed time, none of it during working hours, none of it consuming a recruiter.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Side by side</h2>

<div class="overflow-x-auto my-6">
  <table class="w-full text-left border-collapse border border-gray-200 text-sm">
    <thead>
      <tr class="bg-gray-100 border-b border-gray-200">
        <th class="p-3 font-semibold text-gray-900">Metric</th>
        <th class="p-3 font-semibold text-gray-900">Manual screening</th>
        <th class="p-3 font-semibold text-gray-900">AI screening call</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200">
      <tr><td class="p-3 font-medium">Time to first contact</td><td class="p-3">1–3 days</td><td class="p-3 font-semibold text-emerald-700">Within the hour</td></tr>
      <tr><td class="p-3 font-medium">Time to qualified</td><td class="p-3">3–10 days</td><td class="p-3 font-semibold text-emerald-700">Within the hour</td></tr>
      <tr><td class="p-3 font-medium">Time to documents received</td><td class="p-3">7–14 days</td><td class="p-3 font-semibold text-emerald-700">Same session to 24 hours</td></tr>
      <tr><td class="p-3 font-medium">Applicants per recruiter per day</td><td class="p-3">15–25</td><td class="p-3 font-semibold text-emerald-700">Unlimited</td></tr>
      <tr><td class="p-3 font-medium">Coverage</td><td class="p-3">40 hours a week</td><td class="p-3 font-semibold text-emerald-700">168 hours a week</td></tr>
      <tr><td class="p-3 font-medium">Consistency of questions</td><td class="p-3">Varies by recruiter and mood</td><td class="p-3 font-semibold text-emerald-700">Identical every time</td></tr>
    </tbody>
  </table>
</div>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Why speed converts</h2>
<p class="mb-4">The candidate who applies to your job has applied to other jobs. Usually on the same evening, usually in the same sitting.</p>
<p class="mb-4">Recruitment isn't won by having the best process. It's won by being first to a candidate who has options. Everything that happens after first contact — the sell, the interview, the offer — only happens if you got there before someone else did.</p>
<p class="mb-6">This is why time-to-contact is a better predictor of fill rate than almost anything else you measure. Explore how we connect with <a href="/integrations/ashby/" class="text-blue-600 font-semibold underline hover:text-blue-800">Ashby</a> and <a href="/integrations/recruit-crm/" class="text-blue-600 font-semibold underline hover:text-blue-800">Recruit CRM</a>.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Four metrics to pull from your own ATS today</h2>
<p class="mb-4"><strong>1. Time to first contact:</strong> Median hours between application submitted and first successful conversation.</p>
<p class="mb-4"><strong>2. Time to qualified:</strong> Median hours between application and a screening outcome being recorded.</p>
<p class="mb-4"><strong>3. Screen completion rate:</strong> Of all applicants who entered the pipeline this month, what percentage received a screening decision at all?</p>
<p class="mb-6"><strong>4. Document turnaround:</strong> Median days between qualified and documents received.</p>
`,
    faqs: [
      {
        question: "Is two minutes realistic for a proper screening conversation?",
        answer: "For a structured screen, yes. A two-minute call covers six to eight qualifying questions comfortably. The reason manual screens take fifteen minutes isn't the questions — it's the small talk, the note-taking and the recruiter typing up afterwards.",
      },
      {
        question: "What slows an AI screening call down?",
        answer: "Applicants who don't answer unknown numbers, poor line quality, and roles with unusually long question sets. Retry logic and an SMS fallback handle most of it.",
      },
      {
        question: "Does screening faster mean screening worse?",
        answer: "It means screening more consistently. Every applicant gets the same questions in the same order, with a transcript on the record. What speed doesn't replace is judgement — final decisions stay with your recruiters.",
      },
      {
        question: "How quickly do documents actually come back?",
        answer: "Faster when you ask immediately. The request that goes out during the call gets a much better response than the one sent three days later, because attention decays from the moment someone hits submit.",
      }
    ],
    relatedSlugs: ["speed-up-recruitment-without-hiring-more-recruiters", "why-ai-voice-calls-screen-applicants-better", "callpilot-ashby-integration"]
  },

  // 3. Post 3 — Fri 18 Sep (News)
  {
    id: "post-3-recruit-crm-news",
    slug: "callpilot-recruit-crm-integration",
    type: "news",
    title: "CallPilot Is Now Live With Recruit CRM | AI Screening",
    seoTitle: "CallPilot Is Now Live With Recruit CRM | AI Screening",
    metaDescription: "CallPilot's AI applicant screening call now connects to Recruit CRM. Every applicant qualified and documented in under 2 minutes, 24/7.",
    h1: "CallPilot Is Now Live With Recruit CRM",
    publishDate: "18 September 2026",
    isoDate: "2026-09-18T09:00:00Z",
    modifiedDate: "2026-09-18T09:00:00Z",
    authorSlug: "marcus-vance",
    targetKeyword: "Recruit CRM AI applicant screening",
    category: "Integrations & Announcements",
    readingTime: "3 min read",
    featuredImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=80",
    excerpt: "CallPilot's AI applicant screening call is now live with Recruit CRM. Agencies running Recruit CRM can screen every applicant within the hour of application.",
    canonicalUrl: "https://callpilot.pro/news/callpilot-recruit-crm-integration/",
    contentHtml: `
<p class="lead text-xl text-gray-700 font-medium mb-6">CallPilot's AI applicant screening call is now live with Recruit CRM. Agencies running Recruit CRM can screen every applicant within the hour of application, collect ID and documents by WhatsApp, and have the candidate record synced automatically.</p>

<p>Explore our permanent <a href="/integrations/recruit-crm/" class="text-blue-600 font-semibold underline hover:text-blue-800">Recruit CRM AI applicant screening integration page</a> or claim your <a href="/free-trial/" class="text-blue-600 font-semibold underline hover:text-blue-800">100 free screening credits</a>.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Agency recruitment is a race, and the clock starts at application</h2>
<p class="mb-4">In-house teams compete with other employers. Agencies compete with other agencies — for the same candidates, sourced from the same job boards, often on the same day.</p>
<p class="mb-4">When a candidate applies through an aggregator, they've usually applied to several roles in one sitting. Multiple agencies now have their details. The consultant who reaches them first has a conversation. Everyone else leaves a voicemail on a candidate who has already been spoken to.</p>
<p class="mb-6">That's not a sales skill problem. It's a timing problem, and it's decided within hours of the application landing.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">What changes with CallPilot</h2>
<p class="mb-4">An applicant applies to your Recruit CRM job. CallPilot polls Recruit CRM, picks the application up within the hour, and calls with a human-like AI voice to run your screening questions — availability, right to work, rate expectation, experience, location or shift pattern. The call completes in under two minutes.</p>
<p class="mb-4">Qualified applicants receive an immediate WhatsApp or SMS requesting their ID and compliance documents. Documents come back and attach to the candidate record in Recruit CRM, along with the screening outcome and the call transcript.</p>
<p class="mb-6">Your consultants don't spend the morning dialling. They spend it working a list of candidates who have already been qualified and documented.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">The three outcomes in Recruit CRM</h2>
<div class="space-y-4 my-6">
  <div class="p-4 bg-emerald-50 border border-emerald-200 rounded-lg"><strong>🟢 Qualified – Documents Received</strong> — screened, documented, ready to submit</div>
  <div class="p-4 bg-amber-50 border border-amber-200 rounded-lg"><strong>🟠 Qualified – Awaiting Documents</strong> — screened, automated chase running</div>
  <div class="p-4 bg-red-50 border border-red-200 rounded-lg"><strong>🔴 Unsuccessful</strong> — did not meet the criteria</div>
</div>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Where this shows up commercially</h2>
<p class="mb-4"><strong>Fill rate:</strong> Candidates you reach in minutes are candidates who are still available. Candidates you reach in days often aren't.</p>
<p class="mb-4"><strong>Consultant capacity:</strong> Screening calls are the least leveraged hour in an agency. Removing them doesn't reduce headcount, it redirects it into client development and closing — the activities that actually carry margin.</p>
<p class="mb-4"><strong>Compliance without the chase:</strong> Asking for documents while the candidate is still engaged gets a dramatically better response than asking three days later.</p>
<p class="mb-6"><strong>Coverage your competitors don't have:</strong> Applications arrive in the evening and at weekends. Most agencies don't work then. CallPilot does.</p>
`,
    relatedSlugs: ["jobadder", "ashby", "speed-up-recruitment-without-hiring-more-recruiters"]
  },

  // 4. Post 4 — Mon 21 Sep (News)
  {
    id: "post-4-jobadder-news",
    slug: "callpilot-jobadder-integration",
    type: "news",
    title: "CallPilot Is Now Live With JobAdder | AI Screening",
    seoTitle: "CallPilot Is Now Live With JobAdder | AI Screening",
    metaDescription: "CallPilot's AI applicant screening call now connects to JobAdder. Applicants screened, ID collected and JobAdder updated without recruiter time.",
    h1: "CallPilot Is Now Live With JobAdder",
    publishDate: "21 September 2026",
    isoDate: "2026-09-21T09:00:00Z",
    modifiedDate: "2026-09-21T09:00:00Z",
    authorSlug: "marcus-vance",
    targetKeyword: "JobAdder AI applicant screening",
    category: "Integrations & Announcements",
    readingTime: "3 min read",
    featuredImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&auto=format&fit=crop&q=80",
    excerpt: "CallPilot's AI applicant screening call is now live with JobAdder. High-volume temp, contract and shift-based recruiters can screen every applicant automatically.",
    canonicalUrl: "https://callpilot.pro/news/callpilot-jobadder-integration/",
    contentHtml: `
<p class="lead text-xl text-gray-700 font-medium mb-6">CallPilot's AI applicant screening call is now live with JobAdder. High-volume temp, contract and shift-based recruiters can screen every applicant and collect compliance documents automatically, with JobAdder updated in real time.</p>

<p>See our full <a href="/integrations/jobadder/" class="text-blue-600 font-semibold underline hover:text-blue-800">JobAdder AI applicant screening page</a> or claim <a href="/free-trial/" class="text-blue-600 font-semibold underline hover:text-blue-800">100 free screening credits</a>.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">High-volume recruitment doesn't fail at screening. It fails at the document chase.</h2>
<p class="mb-4">Most people assume the bottleneck in volume recruitment is talking to everyone. It isn't — screening is at least a solvable staffing problem.</p>
<p class="mb-4">The real failure happens after the yes.</p>
<p class="mb-4">A candidate qualifies on Tuesday. You ask for right to work, ID and certifications on Tuesday. You ask again on Wednesday. You ring on Thursday. By the following Monday they're on shift for a competitor who asked for the same documents while they still had the candidate's attention.</p>
<p class="mb-6">You screened them. You qualified them. You wanted them. You lost them to paperwork. For temp and contract desks, where the same candidate can start somewhere else within 48 hours, that window is brutally short.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">What changes with CallPilot</h2>
<p class="mb-4">An applicant applies to your JobAdder vacancy. CallPilot polls JobAdder, picks it up within the hour, and screens them with a human-like AI voice — availability, shift pattern, location, right to work, tickets and certifications, rate.</p>
<p class="mb-4">The moment they qualify, the document request goes out by WhatsApp or SMS. Not that afternoon. Not the next morning. Within the same two-minute interaction, while the candidate is still thinking about your job.</p>
<p class="mb-6">Documents come back and attach to the candidate record in JobAdder, with the screening outcome and transcript written to the same record.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Built for volume</h2>
<p class="mb-4">A hundred applicants to a warehouse role over a weekend is a normal Monday for a lot of JobAdder desks. Screening them manually means either five consultants doing nothing else, or — what actually happens — the first thirty get called properly and the rest never get called at all.</p>
<p class="mb-6">CallPilot screens all hundred. Every one gets the same questions, the same document request and the same outcome recorded, whether they applied at 9am on Monday or 2am on Sunday.</p>
`,
    relatedSlugs: ["recruit-crm", "ashby", "what-happens-after-the-ai-screening-call"]
  },

  // 5. Post 5 — Wed 23 Sep (Blog)
  {
    id: "post-5-speed-up-recruitment",
    slug: "speed-up-recruitment-without-hiring-more-recruiters",
    type: "blog",
    title: "How to Speed Up Recruitment Without Hiring More Recruiters",
    seoTitle: "How to Speed Up Recruitment Without Hiring More Recruiters",
    metaDescription: "Seven ways to cut time-to-contact and time-to-hire without adding headcount, from automated screening to document collection and ATS hygiene.",
    h1: "How to Speed Up Recruitment Without Hiring More Recruiters",
    publishDate: "23 September 2026",
    isoDate: "2026-09-23T09:00:00Z",
    modifiedDate: "2026-09-23T09:00:00Z",
    authorSlug: "marcus-vance",
    targetKeyword: "speed up recruitment",
    category: "Recruitment Operations",
    readingTime: "6 min read",
    featuredImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&auto=format&fit=crop&q=80",
    excerpt: "When a recruitment process is too slow, the default response is to ask for more recruiters. It's rarely the right answer, and it's almost never the cheapest one.",
    canonicalUrl: "https://callpilot.pro/blog/speed-up-recruitment-without-hiring-more-recruiters/",
    contentHtml: `
<p class="lead text-xl text-gray-700 font-medium mb-6">When a recruitment process is too slow, the default response is to ask for more recruiters. It's rarely the right answer, and it's almost never the cheapest one.</p>

<p class="mb-4">Most recruitment teams aren't slow because they're understaffed. They're slow because a large share of recruiter hours goes on work that doesn't need judgement — dialling, leaving voicemails, chasing documents, updating records, rejecting people. Add a recruiter and you add capacity to do more of the same low-value work.</p>

<p class="mb-6">Here are seven levers that cut time-to-hire without adding headcount, ranked by impact against effort. Six of them cost nothing.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Impact vs effort</h2>

<div class="overflow-x-auto my-6">
  <table class="w-full text-left border-collapse border border-gray-200 text-sm">
    <thead>
      <tr class="bg-gray-100 border-b border-gray-200">
        <th class="p-3 font-semibold text-gray-900">Lever</th>
        <th class="p-3 font-semibold text-gray-900">Impact</th>
        <th class="p-3 font-semibold text-gray-900">Effort to implement</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200">
      <tr><td class="p-3 font-medium">1. Automate first contact</td><td class="p-3 text-emerald-700 font-semibold">Very high</td><td class="p-3">Medium</td></tr>
      <tr><td class="p-3 font-medium">2. Request documents at qualification</td><td class="p-3 text-emerald-700 font-semibold">High</td><td class="p-3">Low</td></tr>
      <tr><td class="p-3 font-medium">3. Kill the scheduling email chain</td><td class="p-3 text-emerald-700 font-semibold">High</td><td class="p-3">Low</td></tr>
      <tr><td class="p-3 font-medium">4. Automate rejections</td><td class="p-3 text-amber-700 font-semibold">Medium</td><td class="p-3">Low</td></tr>
      <tr><td class="p-3 font-medium">5. Halve your application form</td><td class="p-3 text-amber-700 font-semibold">Medium</td><td class="p-3">Low</td></tr>
      <tr><td class="p-3 font-medium">6. Fix ATS stage hygiene</td><td class="p-3 text-amber-700 font-semibold">Medium</td><td class="p-3">Medium</td></tr>
      <tr><td class="p-3 font-medium">7. Rewrite job ads to filter</td><td class="p-3 text-emerald-700 font-semibold">High</td><td class="p-3">Medium</td></tr>
    </tbody>
  </table>
</div>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">1. Automate first contact</h3>
<p class="mb-4">This is the biggest lever because it attacks the longest dead period in the entire process. Automating first contact means every applicant gets a structured screening conversation within the hour of applying, regardless of hour or day. Check out our integrations for <a href="/integrations/ashby/" class="text-blue-600 font-semibold underline hover:text-blue-800">Ashby</a> and <a href="/integrations/recruit-crm/" class="text-blue-600 font-semibold underline hover:text-blue-800">Recruit CRM</a> to see how this works natively.</p>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">2. Request documents at qualification, not at offer</h3>
<p class="mb-4">Most processes ask for right to work, ID and certifications late — at offer stage, or once the candidate is essentially placed. By then, days or weeks have passed. Ask during or immediately after the screening conversation instead.</p>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">3. Kill the scheduling email chain</h3>
<p class="mb-4">Three emails to find a time is standard, and it adds days of delay. Self-serve booking links solve this almost entirely.</p>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">4. Automate rejections</h3>
<p class="mb-4">Automate the rejection at the point the decision is made. It frees recruiter hours, cleans your pipeline data, and protects your employer brand.</p>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">5. Halve your application form</h3>
<p class="mb-4">Cut the form to name, contact details and the two or three fields you genuinely cannot proceed without. Collect the rest during the screening conversation.</p>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">6. Fix your ATS stage hygiene</h3>
<p class="mb-4">Audit your stages once. Delete the ones nobody uses. Make sure every status change that can be triggered automatically is.</p>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">7. Rewrite job ads to filter, not attract</h3>
<p class="mb-6">Put the hard constraints high in the ad: shift pattern, location, rate, certifications required, right to work requirements.</p>
`,
    faqs: [
      {
        question: "Won't automating first contact hurt candidate experience?",
        answer: "Being called within the hour instead of ignored for four days generally improves it. What damages candidate experience is silence, not automation.",
      },
      {
        question: "Which of these is cheapest to implement?",
        answer: "Requesting documents earlier and automating rejections. Both are process changes using tools you already own.",
      },
      {
        question: "How long before we see time-to-hire move?",
        answer: "The front-end levers show up in days. Time-to-hire itself is a lagging metric — expect a clear signal after a full hiring cycle.",
      }
    ],
    relatedSlugs: ["how-fast-can-ai-qualify-an-applicant", "high-volume-applicant-screening", "24-7-applicant-screening"]
  },

  // 7. Post 7 — Mon 28 Sep (Blog)
  {
    id: "post-7-voice-vs-video",
    slug: "ai-screening-call-vs-ai-video-interview",
    type: "blog",
    title: "AI Screening Call vs AI Video Interview | CallPilot",
    seoTitle: "AI Screening Call vs AI Video Interview | CallPilot",
    metaDescription: "Completion rates, candidate experience, speed and cost compared. Where an AI phone screen beats a one-way video interview, and where it doesn't.",
    h1: "AI Screening Call vs AI Video Interview",
    publishDate: "28 September 2026",
    isoDate: "2026-09-28T09:00:00Z",
    modifiedDate: "2026-09-28T09:00:00Z",
    authorSlug: "marcus-vance",
    targetKeyword: "AI screening vs video interview",
    category: "Screening Technology",
    readingTime: "5 min read",
    featuredImage: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=1200&auto=format&fit=crop&q=80",
    excerpt: "Both promise the same thing: assess more candidates without consuming more recruiter hours. They go about it very differently, and they fail in different places.",
    canonicalUrl: "https://callpilot.pro/blog/ai-screening-call-vs-ai-video-interview/",
    contentHtml: `
<p class="lead text-xl text-gray-700 font-medium mb-6">Both promise the same thing: assess more candidates without consuming more recruiter hours. They go about it very differently, and they fail in different places.</p>

<p class="mb-4">We build AI screening calls, so take the conclusion with that in mind — but the honest answer is that these tools aren't really competitors. They're different stages of the same funnel, and using the wrong one at the wrong stage is where teams get burned.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">The short version</h2>
<p class="mb-4"><strong>AI screening call:</strong> the candidate's phone rings. A voice conversation runs your qualifying questions. Two minutes. Works on any handset, anywhere, at any hour.</p>
<p class="mb-6"><strong>AI video interview:</strong> the candidate receives a link, sets up a device and camera, finds somewhere quiet and well-lit, and records answers to questions on screen. Ten to twenty minutes, on their own time.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Side by side comparison</h2>

<div class="overflow-x-auto my-6">
  <table class="w-full text-left border-collapse border border-gray-200 text-sm">
    <thead>
      <tr class="bg-gray-100 border-b border-gray-200">
        <th class="p-3 font-semibold text-gray-900">Feature</th>
        <th class="p-3 font-semibold text-gray-900">AI screening call</th>
        <th class="p-3 font-semibold text-gray-900">AI video interview</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200">
      <tr><td class="p-3 font-medium">Time to complete</td><td class="p-3 text-emerald-700 font-semibold">2 minutes</td><td class="p-3">10–20 minutes</td></tr>
      <tr><td class="p-3 font-medium">Device required</td><td class="p-3">Any phone</td><td class="p-3">Smartphone/laptop with camera</td></tr>
      <tr><td class="p-3 font-medium">Needs an app or login</td><td class="p-3 text-emerald-700 font-semibold">No</td><td class="p-3">Usually</td></tr>
      <tr><td class="p-3 font-medium">Needs good lighting & quiet room</td><td class="p-3 text-emerald-700 font-semibold">No</td><td class="p-3">Yes</td></tr>
      <tr><td class="p-3 font-medium">Can ask follow-up questions</td><td class="p-3 text-emerald-700 font-semibold">Yes</td><td class="p-3">Rarely</td></tr>
      <tr><td class="p-3 font-medium">Assesses presentation / visual</td><td class="p-3">No</td><td class="p-3">Yes</td></tr>
      <tr><td class="p-3 font-medium">Best-fit stage</td><td class="p-3 font-semibold text-blue-700">Top of funnel, volume screening</td><td class="p-3 font-semibold text-purple-700">Shortlist, assessment</td></tr>
    </tbody>
  </table>
</div>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Where the screening call wins</h2>
<p class="mb-4"><strong>Completion rate:</strong> A method that assesses candidates brilliantly but only gets half of them to finish has screened half your pipeline. A phone call rings, they answer, and it's done.</p>
<p class="mb-4"><strong>Accessibility:</strong> Think about who applies to high-volume roles: shift workers, people between jobs, people applying from a phone on a bus. A one-way video interview is a barrier for all of them.</p>
<p class="mb-6"><strong>Immediacy:</strong> The call happens minutes after application when interest is peaked. See how CallPilot works with <a href="/integrations/ashby/" class="text-blue-600 font-semibold underline hover:text-blue-800">Ashby</a> and <a href="/integrations/jobadder/" class="text-blue-600 font-semibold underline hover:text-blue-800">JobAdder</a>.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Where video interviews genuinely win</h2>
<p class="mb-4">For roles where presentation is the job (sales, executive client-facing, on-camera roles), video interview provides visual signal that voice alone cannot provide.</p>
<p class="mb-6">Use the AI screening call for volume qualification at the top of the funnel (the 500 applicants). Use video later for the shortlisted 20.</p>
`,
    faqs: [
      {
        question: "Which gets higher completion rates?",
        answer: "The phone call, by a clear margin, because it asks almost nothing of the candidate — no app, no camera, no setup.",
      },
      {
        question: "Can an AI screening call assess soft skills?",
        answer: "It captures how someone communicates in conversation, which is useful signal. It doesn't assess presentation the way video does. For volume screening, communication signal is usually enough; for client-facing shortlists, it isn't.",
      },
      {
        question: "Do candidates prefer one over the other?",
        answer: "Candidates in high-volume and shift-based roles overwhelmingly prefer a call. Candidates in professional roles applying on a laptop are more comfortable with video.",
      }
    ],
    relatedSlugs: ["why-ai-voice-calls-screen-applicants-better", "how-fast-can-ai-qualify-an-applicant", "high-volume-applicant-screening"]
  },

  // 9. Post 9 — Fri 2 Oct (Blog)
  {
    id: "post-9-why-voice-screens-better",
    slug: "why-ai-voice-calls-screen-applicants-better",
    type: "blog",
    title: "Why AI Voice Calls Screen Applicants Better | CallPilot",
    seoTitle: "Why AI Voice Calls Screen Applicants Better | CallPilot",
    metaDescription: "Voice gets higher completion rates than forms and video. Why an AI recruiter call produces better screening data and fewer candidate drop-offs.",
    h1: "Why AI Voice Calls Produce Better Applicant Screening Results",
    publishDate: "2 October 2026",
    isoDate: "2026-10-02T09:00:00Z",
    modifiedDate: "2026-10-02T09:00:00Z",
    authorSlug: "marcus-vance",
    targetKeyword: "AI recruiter call",
    category: "Voice Technology",
    readingTime: "5 min read",
    featuredImage: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=1200&auto=format&fit=crop&q=80",
    excerpt: "There are four ways to screen an applicant without a recruiter on the phone: a web form, an SMS exchange, a one-way video interview, or an AI voice call. They don't produce equally good data.",
    canonicalUrl: "https://callpilot.pro/blog/why-ai-voice-calls-screen-applicants-better/",
    contentHtml: `
<p class="lead text-xl text-gray-700 font-medium mb-6">There are four ways to screen an applicant without a recruiter on the phone: a web form, an SMS exchange, a one-way video interview, or an AI voice call. They don't produce equally good data, and the reason has less to do with the sophistication of the assessment than with something much more basic — how many applicants actually finish.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Completion is the whole game</h2>
<p class="mb-4">A screening method that assesses candidates 20% more accurately but gets half as many to complete has screened half your pipeline. The accuracy is irrelevant for everyone who dropped out.</p>
<p class="mb-4">Rank the channels by how many applicants finish, and the order is consistent:</p>
<p class="p-4 bg-gray-100 rounded-lg font-bold text-gray-900 mb-6">Voice call → SMS → web form → one-way video</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Voice removes every barrier</h2>
<p class="mb-4">Think about what an AI voice call requires from an applicant. A phone that rings, and two minutes. No app. No download. No account creation. No password. No camera. No lighting.</p>
<p class="mb-6">Compare that to forms or one-way video interviews, which demand apps, logins, and quiet environments. For shift workers, care staff, and logistics workers, friction equals drop-off.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">A conversation adapts. A form doesn't.</h2>
<p class="mb-4">A form asks fixed questions and accepts whatever gets typed. If someone writes "flexible" under availability, the form has no way to ask what that means.</p>
<p class="mb-6">A voice conversation does: <em>"You said you're available immediately — does that include weekends?" "You mentioned you drive — is your vehicle suitable for shift work?"</em></p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">You get the documents while they still care</h2>
<p class="mb-6">Asking for Right to Work and ID immediately after the phone call produces dramatically higher submission rates than emailing candidates three days later. Explore how this works on <a href="/integrations/recruit-crm/" class="text-blue-600 font-semibold underline hover:text-blue-800">Recruit CRM</a> and <a href="/integrations/ashby/" class="text-blue-600 font-semibold underline hover:text-blue-800">Ashby</a>.</p>
`,
    faqs: [
      {
        question: "Do candidates actually answer calls from AI screening systems?",
        answer: "Yes, at higher rates than they complete video interviews. A pre-call SMS and a consistent caller number improve pick-up further.",
      },
      {
        question: "Is voice screening less accurate than a recruiter?",
        answer: "It's more consistent and less variable. It doesn't replace judgement — it establishes facts, and your recruiters make the decisions.",
      },
      {
        question: "Does the candidate know it's an AI?",
        answer: "They should, and CallPilot tells them at the start of every call.",
      }
    ],
    relatedSlugs: ["ai-screening-call-vs-ai-video-interview", "how-fast-can-ai-qualify-an-applicant", "what-happens-after-the-ai-screening-call"]
  },

  // 10. Post 10 — Mon 5 Oct (Blog)
  {
    id: "post-10-24-7-screening",
    slug: "24-7-applicant-screening",
    type: "blog",
    title: "Recruiters Sleep. CallPilot Screens Applicants 24/7",
    seoTitle: "Recruiters Sleep. CallPilot Screens Applicants 24/7",
    metaDescription: "Applications arrive at 11pm. CallPilot screens, qualifies and collects documents overnight so recruiters start Monday with a qualified pipeline.",
    h1: "Recruiters Sleep. CallPilot Screens Applicants 24/7",
    publishDate: "5 October 2026",
    isoDate: "2026-10-05T09:00:00Z",
    modifiedDate: "2026-10-05T09:00:00Z",
    authorSlug: "marcus-vance",
    targetKeyword: "24/7 applicant screening",
    category: "Automation & Operations",
    readingTime: "4 min read",
    featuredImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&auto=format&fit=crop&q=80",
    excerpt: "There are 168 hours in a week. A 9-to-5, Monday-to-Friday recruitment team covers 40 of them. Applications arrive in the other 128.",
    canonicalUrl: "https://callpilot.pro/blog/24-7-applicant-screening/",
    contentHtml: `
<p class="lead text-xl text-gray-700 font-medium mb-6">There are 168 hours in a week. A nine-to-five, Monday-to-Friday recruitment team covers 40 of them. Less than a quarter. Applications arrive in the other 128.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">When people actually apply for jobs</h2>
<p class="mb-4">Your candidates are, for the most part, currently employed. They can't browse job boards at their desk or take screening calls while on shift. So they apply on evenings, late nights, and weekends.</p>
<p class="mb-6">The result is a structural mismatch: the hours your candidates are most active are exactly the hours your team isn't working.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">The arithmetic</h2>
<ul class="list-disc pl-6 space-y-2 mb-6 text-gray-700">
  <li>168 hours in a week</li>
  <li>40 hours of recruiter coverage</li>
  <li><strong>128 hours uncovered — 76% of the week</strong></li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">What overnight coverage actually changes</h2>
<p class="mb-4">Consider a Friday-night application with CallPilot:</p>
<div class="p-5 bg-gray-50 border border-gray-200 rounded-xl space-y-2 text-sm text-gray-800 my-4">
  <p><strong>Fri 11.02pm</strong> — application lands</p>
  <p><strong>Fri 11.38pm</strong> — CallPilot polls the ATS and picks it up</p>
  <p><strong>Fri 11.40pm</strong> — CallPilot calls with a human-like AI voice</p>
  <p><strong>Fri 11.42pm</strong> — screening complete, applicant pre-qualifies</p>
  <p><strong>Fri 11.42pm</strong> — WhatsApp sent requesting ID and documents</p>
  <p><strong>Sat 8.40am</strong> — documents received and attached</p>
  <p><strong>Mon 9.00am</strong> — recruiter opens a qualified, documented applicant</p>
</div>

<p class="mb-6">The recruiter's Monday doesn't start with a backlog. It starts with a shortlist. See how this connects with <a href="/integrations/jobadder/" class="text-blue-600 font-semibold underline hover:text-blue-800">JobAdder</a> and <a href="/integrations/ashby/" class="text-blue-600 font-semibold underline hover:text-blue-800">Ashby</a>.</p>
`,
    faqs: [
      {
        question: "Do candidates mind being called late in the evening?",
        answer: "Call windows are configurable. Most teams set a sensible range — the point is covering evenings and weekends, not calling anyone at 3am.",
      },
      {
        question: "What happens if nobody answers overnight?",
        answer: "The retry schedule runs and an SMS or WhatsApp fallback goes out, so the applicant can respond when they're free.",
      },
      {
        question: "Does this replace recruiters?",
        answer: "It replaces the queue. Recruiters still interview, decide, sell the role and close — they just stop spending mornings dialling people who were never going to qualify.",
      }
    ],
    relatedSlugs: ["high-volume-applicant-screening", "how-fast-can-ai-qualify-an-applicant", "speed-up-recruitment-without-hiring-more-recruiters"]
  },

  // 11. Post 11 — Wed 7 Oct (Blog)
  {
    id: "post-11-high-volume",
    slug: "high-volume-applicant-screening",
    type: "blog",
    title: "How to Screen 1,000 Applicants Without 100 Recruiters",
    seoTitle: "How to Screen 1,000 Applicants Without 100 Recruiters",
    metaDescription: "A practical model for high-volume applicant screening: what to automate, what to keep human, and the maths on cost per qualified applicant.",
    h1: "How to Screen 1,000 Applicants Without 100 Recruiters",
    publishDate: "7 October 2026",
    isoDate: "2026-10-07T09:00:00Z",
    modifiedDate: "2026-10-07T09:00:00Z",
    authorSlug: "marcus-vance",
    targetKeyword: "high-volume applicant screening",
    category: "High-Volume Strategy",
    readingTime: "6 min read",
    featuredImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&auto=format&fit=crop&q=80",
    excerpt: "A thousand applicants sounds like a good problem. It usually isn't, because almost nobody has the capacity to screen a thousand people properly.",
    canonicalUrl: "https://callpilot.pro/blog/high-volume-applicant-screening/",
    contentHtml: `
<p class="lead text-xl text-gray-700 font-medium mb-6">A thousand applicants sounds like a good problem. It usually isn't, because almost nobody has the capacity to screen a thousand people properly, and what happens instead is worse than having fewer applicants in the first place.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">The arithmetic nobody does</h2>
<p class="mb-4">Across a real day of screening, twelve minutes per applicant (dialling, voicemails, note-taking, ATS logging) is a fair average.</p>
<p class="p-4 bg-gray-100 rounded-xl font-bold text-gray-900 text-lg mb-4">1,000 applicants × 12 minutes = 200 hours.</p>
<p class="mb-6">That's five full-time recruiters for a week doing nothing else. When you lack five spare recruiters, what actually happens is that the first 200 get screened, 300 get skimmed, and 500 are never contacted at all.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">The three-layer model</h2>
<div class="space-y-4 my-6">
  <div class="p-5 border border-gray-200 rounded-xl">
    <h3 class="font-bold text-gray-900 text-lg mb-2">Layer 1 — Automated qualification</h3>
    <p class="text-sm text-gray-700">Establishes facts at any volume and any hour: Right to work, availability, shift pattern, travel, compensation, documents requested.</p>
  </div>
  <div class="p-5 border border-gray-200 rounded-xl">
    <h3 class="font-bold text-gray-900 text-lg mb-2">Layer 2 — Human verification</h3>
    <p class="text-sm text-gray-700">Recruiters review the pre-qualified pool, check documents, and handle edge cases in minutes per candidate.</p>
  </div>
  <div class="p-5 border border-gray-200 rounded-xl">
    <h3 class="font-bold text-gray-900 text-lg mb-2">Layer 3 — Recruiter relationship & closing</h3>
    <p class="text-sm text-gray-700">Selling the role, managing interviews, negotiating offers. The highest-value work.</p>
  </div>
</div>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">What should never be automated</h2>
<p class="mb-4">Final hiring decisions, edge-case judgement, and selling the role must always remain human. Automation handles the dialling and administrative collection so recruiters can focus on relationships. Learn more on our <a href="/integrations/icims/" class="text-blue-600 font-semibold underline hover:text-blue-800">iCIMS integration</a> and <a href="/integrations/greenhouse/" class="text-blue-600 font-semibold underline hover:text-blue-800">Greenhouse integration</a> pages.</p>
`,
    faqs: [
      {
        question: "Is 12 minutes per screen realistic?",
        answer: "It's the total cost including dial time, voicemails, callbacks and admin — not the length of the conversation. Time your own team over a full day and check.",
      },
      {
        question: "Doesn't automated screening reject good candidates?",
        answer: "It qualifies against the criteria you define. If your criteria reject good candidates, that's a criteria problem, and it was rejecting them manually too — just less visibly.",
      }
    ],
    relatedSlugs: ["speed-up-recruitment-without-hiring-more-recruiters", "what-happens-after-the-ai-screening-call", "24-7-applicant-screening"]
  },

  // 12. Post 12 — Fri 9 Oct (Blog)
  {
    id: "post-12-after-screening-call",
    slug: "what-happens-after-the-ai-screening-call",
    type: "blog",
    title: "What Happens After the AI Screening Call? | CallPilot",
    seoTitle: "What Happens After the AI Screening Call? | CallPilot",
    metaDescription: "The document request, collection and ATS update explained step by step — what screening automation does after the call, and what your recruiter still verifies.",
    h1: "What Happens After the AI Screening Call?",
    publishDate: "9 October 2026",
    isoDate: "2026-10-09T09:00:00Z",
    modifiedDate: "2026-10-09T09:00:00Z",
    authorSlug: "marcus-vance",
    targetKeyword: "recruitment screening automation",
    category: "Workflow & Compliance",
    readingTime: "5 min read",
    featuredImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&auto=format&fit=crop&q=80",
    excerpt: "Every AI recruitment vendor will show you the call. Very few will tell you what happens next. Here is the whole sequence, step by step.",
    canonicalUrl: "https://callpilot.pro/blog/what-happens-after-the-ai-screening-call/",
    contentHtml: `
<p class="lead text-xl text-gray-700 font-medium mb-6">Every AI recruitment vendor will show you the call. Very few will tell you what happens next. That's a problem, because the call is the easy part. It takes two minutes. Everything that actually goes wrong in recruitment goes wrong afterwards — in the document chase, the handover, and the gap between "qualified" and "started".</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Step 1 — The document request goes out immediately</h2>
<p class="mb-4">Seconds after the call ends, the qualified applicant receives a WhatsApp or SMS asking for their ID and whatever documents the role requires. Not that afternoon. Seconds.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Step 2 — Documents come back without a portal</h2>
<p class="mb-4">The applicant replies to the message with photos of their documents. No app download, no forgotten passwords, no expired upload links.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Step 3 — Documents collected and logged. Not verified.</h2>
<p class="mb-4">CallPilot collects the documents and attaches them to the record. Checking authenticity and verifying right-to-work is a recruiter's job and stays one.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Step 4 — The ATS write-back</h2>
<p class="mb-4">Everything lands directly on the candidate record in your ATS: screening outcome, status, full call transcript, and document attachments.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Step 5 — The automated chase sequence</h2>
<p class="mb-4">Applicants who haven't sent documents sit at 🟠 <strong>Qualified – Awaiting Documents</strong> while automated polite follow-ups run.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Step 6 — The recruiter handover</h2>
<p class="mb-6">Recruiters open their ATS to three clear buckets: 🟢 Qualified – Documents Received, 🟠 Qualified – Awaiting Documents, and 🔴 Unsuccessful. See how this connects with <a href="/integrations/ashby/" class="text-blue-600 font-semibold underline hover:text-blue-800">Ashby</a> and <a href="/integrations/jobadder/" class="text-blue-600 font-semibold underline hover:text-blue-800">JobAdder</a>.</p>
`,
    faqs: [
      {
        question: "What happens if a candidate never sends their documents?",
        answer: "The chase sequence runs, and if they still don't respond, the record flags for a recruiter. Nobody disappears silently.",
      },
      {
        question: "Does the candidate need an app or an account?",
        answer: "No. They reply to a WhatsApp or SMS message with photos of their documents.",
      },
      {
        question: "What still needs a recruiter?",
        answer: "Verification, final decisions, selling the role and closing. Screening automation handles the asking and the chasing, not the judgement.",
      }
    ],
    relatedSlugs: ["how-fast-can-ai-qualify-an-applicant", "speed-up-recruitment-without-hiring-more-recruiters", "why-ai-voice-calls-screen-applicants-better"]
  }
];

export const newsArticles = allArticles.filter((a) => a.type === "news");
export const blogArticles = allArticles.filter((a) => a.type === "blog");

export function getArticleBySlug(slug: string): ArticleData | undefined {
  return allArticles.find((a) => a.slug === slug);
}
