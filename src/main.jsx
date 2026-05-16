import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Award,
  CalendarDays,
  ChevronRight,
  CircleCheck,
  CircuitBoard,
  Code2,
  Cpu,
  Gamepad2,
  Github,
  GraduationCap,
  Instagram,
  Keyboard,
  Moon,
  NotebookTabs,
  Rocket,
  School,
  Terminal,
  Sparkles,
  Sun,
  Trophy,
  UsersRound,
} from "lucide-react";
import "./styles.css";

const schoolLabels = {
  all: "전체",
  jangheung: "장흥중",
  gwansan: "장흥관산중",
  anyang: "장흥안양중",
  teachers: "선생님",
};

const members = [
  { name: "김진서", school: "장흥중", schoolId: "jangheung", color: "from-blue-500 to-sky-900" },
  { name: "이원교", school: "장흥중", schoolId: "jangheung", color: "from-emerald-400 to-teal-800" },
  { name: "김관형", school: "장흥중", schoolId: "jangheung", color: "from-rose-400 to-zinc-800" },
  { name: "문민재", school: "장흥중", schoolId: "jangheung", color: "from-amber-300 to-stone-800" },
  { name: "박재훈", school: "장흥중", schoolId: "jangheung", color: "from-violet-500 to-indigo-900" },
  { name: "김선재", school: "장흥중", schoolId: "jangheung", color: "from-cyan-400 to-slate-800" },
  { name: "박하랑", school: "장흥중", schoolId: "jangheung", color: "from-pink-400 to-fuchsia-900" },
  { name: "최유진", school: "장흥중", schoolId: "jangheung", color: "from-slate-500 to-blue-950" },
  { name: "위근영", school: "장흥중", schoolId: "jangheung", color: "from-orange-400 to-red-900" },
  { name: "강지훈", school: "장흥중", schoolId: "jangheung", color: "from-green-400 to-emerald-900" },
  { name: "임가온", school: "장흥관산중", schoolId: "gwansan", color: "from-purple-400 to-slate-900" },
  { name: "배유찬", school: "장흥관산중", schoolId: "gwansan", color: "from-sky-400 to-cyan-900" },
  { name: "신라온", school: "장흥안양중", schoolId: "anyang", color: "from-red-400 to-zinc-900" },
  { name: "홍지훈", school: "장흥안양중", schoolId: "anyang", color: "from-yellow-400 to-stone-900" },
  { name: "영현T", school: "장흥중 / 정보", schoolId: "teachers", color: "from-slate-700 to-black", teacher: true, image: "/younghyun-avatar.png" },
  { name: "영욱T", school: "장흥관산중 / 사회", schoolId: "teachers", color: "from-blue-700 to-slate-950", teacher: true },
];

const projects = [
  {
    status: "진행중",
    icon: Gamepad2,
    title: "장흥 물축제 게임프로젝트",
    type: "Game · Festival",
    description: "물축제를 배경으로 방문객이 모바일에서 바로 즐길 수 있는 미니 게임을 제작하는 프로젝트입니다.",
    people: ["김진서", "이원교", "김관형", "문민재"],
  },
  {
    status: "끝난 프로젝트",
    icon: Trophy,
    title: "완료 프로젝트를 추가해 주세요",
    type: "Archive",
    description: "지난 프로젝트 이름, 설명, 참여 팀원을 기록하는 자리입니다.",
    people: [],
  },
  {
    status: "예정 프로젝트",
    icon: Rocket,
    title: "다음 아이디어를 준비 중",
    type: "Planning",
    description: "다음 학기 프로젝트나 해커톤 아이디어를 이곳에 추가할 수 있습니다.",
    people: [],
  },
];

function initials(name) {
  return name.endsWith("T") ? name.slice(0, 2) : name.slice(1, 3);
}

function App() {
  const [dark, setDark] = useState(false);
  const [clubTab, setClubTab] = useState("about");
  const [school, setSchool] = useState("all");

  const visibleGroups = useMemo(() => {
    const ids = school === "all" ? ["jangheung", "gwansan", "anyang", "teachers"] : [school];
    return ids.map((id) => ({ id, members: members.filter((member) => member.schoolId === id) }));
  }, [school]);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-white text-slate-950 transition-colors dark:bg-slate-950 dark:text-white">
        <Header dark={dark} setDark={setDark} />
        <main>
          <Hero />
          <ClubSection activeTab={clubTab} setActiveTab={setClubTab} />
          <MembersSection school={school} setSchool={setSchool} visibleGroups={visibleGroups} />
          <ProjectsSection />
        </main>
        <footer className="border-t border-slate-200 bg-slate-950 px-5 py-7 text-slate-300 dark:border-white/10">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-cyan-300/20 bg-slate-900/95 shadow-soft">
            <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              <span className="ml-2 font-mono text-[11px] italic text-slate-500">footer.config.js</span>
            </div>
            <div className="grid gap-1 px-4 py-4 font-mono text-[11px] italic leading-5 sm:grid-cols-3 sm:gap-x-5">
              <p className="text-slate-500 sm:col-span-3">// 장흥 연합코딩동아리 삼다수</p>
              <p><span className="text-cyan-300">Project</span>: <span className="text-white">SAMDASU_WEB_v1.0</span>;</p>
              <p><span className="text-emerald-300">Contributors</span>: <span className="text-white">Jangheung Coding Union</span>;</p>
              <p><span className="text-amber-300">Status</span>: <span className="text-white">Always Growing...</span>;</p>
              <p className="pt-1 text-[10px] text-slate-500 sm:col-span-3">made_by: 삼다수_dev_team;</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

function Header({ dark, setDark }) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 px-4 py-3 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-slate-950 text-xl font-black text-white shadow-soft dark:bg-white dark:text-slate-950">
            3
          </span>
          <span className="min-w-0">
            <strong className="block text-lg leading-tight">삼다수</strong>
            <small className="block truncate text-xs text-slate-500 dark:text-slate-400">Jangheung Coding Union</small>
          </span>
        </a>
        <nav className="hidden rounded-full border border-slate-200 bg-slate-50 p-1 text-sm font-bold text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 md:flex">
          <a className="rounded-full px-3 py-2 hover:bg-white dark:hover:bg-white/10" href="#club">소개</a>
          <a className="rounded-full px-3 py-2 hover:bg-white dark:hover:bg-white/10" href="#members">팀원</a>
          <a className="rounded-full px-3 py-2 hover:bg-white dark:hover:bg-white/10" href="#projects">프로젝트</a>
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <a
            aria-label="삼다수 인스타그램"
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-fuchsia-500 via-rose-500 to-amber-400 text-white shadow-sm ring-1 ring-black/5"
          >
            <Instagram size={19} />
          </a>
          <button
            className="inline-flex h-11 items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 text-xs font-black shadow-sm dark:border-white/10 dark:bg-white/10 sm:gap-2 sm:text-sm"
            type="button"
            onClick={() => setDark(!dark)}
            aria-label={dark ? "라이트모드 켜기" : "다크모드 켜기"}
          >
            {dark ? <Sun size={17} /> : <Moon size={17} />}
            <span className="sm:hidden">{dark ? "라이트" : "다크"}</span>
            <span className="hidden sm:inline">{dark ? "라이트모드" : "다크모드"}</span>
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-[0.92fr_1.08fr] md:items-center md:py-20">
      <div>
        <Pill icon={School}>장흥중 · 장흥관산중 · 장흥안양중</Pill>
        <h1 className="mt-5 text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
          <span className="inline-flex items-center gap-2">
            <Keyboard className="text-blue-500" size={34} />
            장흥을 연결하는
          </span>
          <span className="mt-1 block bg-gradient-to-r from-blue-600 via-emerald-500 to-rose-500 bg-clip-text text-transparent">
            연합코딩동아리, 삼다수
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          서로 다른 학교의 학생들이 모여 게임, 웹, AI, 피지컬 컴퓨팅 프로젝트를 함께 만들고 발표하는 학생 개발 팀입니다.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-sm font-black text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-200">
            <Cpu size={16} /> Web
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-2 text-sm font-black text-blue-700 dark:bg-blue-400/10 dark:text-blue-200">
            <Gamepad2 size={16} /> Game
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-rose-50 px-3 py-2 text-sm font-black text-rose-700 dark:bg-rose-400/10 dark:text-rose-200">
            <CircuitBoard size={16} /> AI
          </span>
        </div>
        <div className="mt-7 flex flex-wrap gap-3">
          <a className="inline-flex h-12 items-center gap-2 rounded-full bg-slate-950 px-5 font-black text-white shadow-soft dark:bg-white dark:text-slate-950" href="#members">
            <UsersRound size={19} /> 팀원 보기
          </a>
          <a className="inline-flex h-12 items-center gap-2 rounded-full border border-slate-200 bg-white px-5 font-black text-slate-950 dark:border-white/10 dark:bg-white/10 dark:text-white" href="#projects">
            <Rocket size={19} /> 프로젝트 보기
          </a>
        </div>
      </div>
      <div className="relative">
        <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-cyan-300 via-blue-400 to-emerald-300 opacity-60 blur-2xl dark:from-cyan-500/30 dark:via-blue-500/20 dark:to-emerald-400/20" />
        <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/60 bg-slate-950 shadow-glow ring-1 ring-cyan-300/30">
          <div className="flex items-center gap-3 border-b border-cyan-300/20 bg-slate-900 px-5 py-4">
            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
            <span className="ml-2 flex min-w-0 items-center gap-2 truncate font-mono text-sm text-cyan-200">
              <Code2 size={16} /> samdasu_core.exe
            </span>
          </div>
          <div className="cyber-grid p-5 font-mono text-[13px] leading-6 text-slate-200 sm:p-6 sm:text-sm">
            <CyberLine color="text-cyan-300">[SYSTEM] Starting Samdasu_Core...</CyberLine>
            <CyberLine>&gt; Location: JANGHEUNG_REGION (장흥 연합)</CyberLine>
            <CyberLine>&gt; Status: Connecting... <span className="text-emerald-300">[OK]</span></CyberLine>
            <br />
            <CyberLine color="text-fuchsia-300">[PROFILE]</CyberLine>
            <CyberLine>- NAME: 삼다수 (SAMDASU)</CyberLine>
            <CyberLine>- GOAL: 맑고 깨끗한 코드 제작</CyberLine>
            <CyberLine>- TEAM: 장흥의 중학생 개발자들</CyberLine>
            <br />
            <CyberLine color="text-yellow-300">[PROJECTS]</CyberLine>
            <CyberLine>&gt; Running <span className="text-blue-300">[WEB_PROJECT]</span>... 장흥을 담은 웹사이트</CyberLine>
            <CyberLine>&gt; Running <span className="text-rose-300">[GAME_PROJECT]</span>... 우리가 직접 만든 게임</CyberLine>
            <div className="my-3">
              <div className="mb-1 flex items-center justify-between text-xs text-slate-400">
                <span>&gt; Progress</span>
                <span className="text-emerald-300">85% Completed</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400" />
              </div>
            </div>
            <CyberLine color="text-emerald-300">[MESSAGE]</CyberLine>
            <CyberLine>"코딩 갈증, 삼다수가 해결합니다."</CyberLine>
            <br />
            <CyberLine>&gt; System Ready.</CyberLine>
            <CyberLine>&gt; login --guest</CyberLine>
            <CyberLine color="text-cyan-300">&gt; Welcome to SAMDASU world! <span className="terminal-cursor">█</span></CyberLine>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClubSection({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "about", label: "소개", command: "samdasoo intro", icon: NotebookTabs },
    { id: "history", label: "주요 사건", command: "git log --samdasoo", icon: CalendarDays },
    { id: "awards", label: "선배님", command: "cat seniors.md", icon: Award },
  ];
  const active = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  return (
    <section id="club" className="bg-slate-50 px-5 py-14 dark:bg-slate-900/55 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Club" title="동아리 소개" icon={Sparkles} />
        <div className="mt-6 overflow-hidden rounded-[1.75rem] border border-slate-800 bg-slate-950 shadow-glow dark:border-white/10">
          <div className="flex items-center gap-3 border-b border-white/10 bg-slate-800 px-5 py-4">
            <span className="h-3.5 w-3.5 rounded-full bg-red-500" />
            <span className="h-3.5 w-3.5 rounded-full bg-amber-400" />
            <span className="h-3.5 w-3.5 rounded-full bg-emerald-400" />
            <div className="ml-4 flex min-w-0 items-center gap-2 text-sm font-medium text-slate-300">
              <Terminal size={16} />
              <span className="truncate">bash - samdasoo-club</span>
            </div>
          </div>
          <div className="grid gap-0 lg:grid-cols-[240px_1fr]">
            <div className="border-b border-white/10 bg-slate-900/70 p-4 lg:border-b-0 lg:border-r">
              <div className="flex gap-2 overflow-x-auto lg:grid">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`inline-flex h-12 shrink-0 items-center gap-2 rounded-2xl px-4 text-left font-black transition ${
                      activeTab === tab.id
                        ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20"
                        : "bg-white/5 text-slate-300 hover:bg-white/10"
                    }`}
                  >
                    <tab.icon size={18} /> {tab.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="p-5 sm:p-7 md:p-9">
              <div className="mb-7 font-mono text-sm sm:text-base">
                <span className="text-slate-500">&gt;</span>{" "}
                <span className="font-black text-emerald-300">{active.command}</span>
                <p className="mt-2 pl-6 text-slate-400"># {active.label} 정보를 삼다수 스타일로 불러오는 중</p>
              </div>
              {activeTab === "about" && <AboutPanel />}
              {activeTab === "history" && <HistoryPanel />}
              {activeTab === "awards" && <AwardsPanel />}
              <div className="mt-7 border-t border-white/10 pt-5 font-mono text-sm text-emerald-300">
                <CircleCheck className="mr-2 inline" size={18} />
                Successfully loaded samdasoo club data!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutPanel() {
  return (
    <>
      <h3 className="text-2xl font-black text-white md:text-3xl">3명의 학생이 시작한 코딩동아리</h3>
      <p className="mt-3 max-w-4xl text-lg leading-8 text-slate-300">
        삼다수 동아리는 순천에서 2020년에 처음 시작된 코딩동아리입니다:)
        <br />
        삼다수라는 이름의 의미는 코딩동아리의 이름을 지을때, 3명의 학생이 코딩을 해보고싶어 모였기때문에 삼(3명)다수라고 지었다고 합니다.
        <br />
        2026년은 장흥에서 다시 시작합니다!
      </p>
      <div className="mt-6 grid grid-cols-3 gap-3">
        <Stat number="16" label="구성원" icon={UsersRound} />
        <Stat number="3" label="참여 학교" icon={School} />
        <Stat number="1" label="진행 프로젝트" icon={Rocket} />
      </div>
    </>
  );
}

function HistoryPanel() {
  const items = [
    ["2020년", "전남상업경진대회 프로그래밍분야 선수반(동아리)으로 처음 시작"],
    ["2021년", "동아리명없이 \"코딩동아리\"라고 부르며 여러 대외활동 참여"],
    ["2022년", "신입생 3명이 \"삼다수\" 동아리명으로 정함"],
    ["2026년~", "장흥에서 새로운 여정을 시작"],
  ];

  return (
    <div className="grid gap-3">
      {items.map(([date, text]) => (
        <div key={date} className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 ring-1 ring-white/10">
          <CalendarDays className="mt-1 shrink-0 text-cyan-300" size={20} />
          <div>
            <strong className="font-mono text-cyan-300">{date}</strong>
            <p className="mt-1 text-slate-300">{text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function AwardsPanel() {
  const items = [
    {
      title: "재학 및 졸업",
      lines: [
        "서울예대 광고창작학과 합격",
        "경북대 컴퓨터공학과 합격",
        "전남대 인공지능학부 합격",
        "단국대 컴퓨터공학과 합격",
        "계명대, 순천대등 다수의 대학교 재학, 졸업",
      ],
    },
    {
      title: "취업",
      lines: ["(주)쿠키아 채용", "(주)에이스퀘어 채용", "(주)엘시스 채용 등 다수의 기업 재직중"],
    },
  ];

  return (
    <div className="grid gap-3">
      {items.map(({ title, lines }) => (
        <div key={title} className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 ring-1 ring-white/10">
          <Trophy className="mt-1 shrink-0 text-yellow-300" size={22} />
          <div>
            <strong className="text-white">{title}</strong>
            <div className="mt-1 space-y-1 text-slate-300">
              {lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function MembersSection({ school, setSchool, visibleGroups }) {
  return (
    <section id="members" className="px-5 py-14">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Members" title="학교별 팀원 소개" icon={UsersRound} />
        <div className="mt-6 grid grid-cols-2 gap-2 rounded-3xl border border-slate-200 bg-slate-50 p-2 dark:border-white/10 dark:bg-white/5 sm:grid-cols-3 lg:grid-cols-5">
          {Object.entries(schoolLabels).map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => setSchool(id)}
              className={`inline-flex h-12 min-w-0 items-center justify-center gap-2 rounded-2xl px-3 text-sm font-black transition sm:text-base ${
                school === id ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950" : "text-slate-600 dark:text-slate-300"
              }`}
            >
              {id === "teachers" ? <GraduationCap size={18} /> : <School size={18} />} {label}
            </button>
          ))}
        </div>
        <div className="mt-6 grid gap-8">
          {visibleGroups.map(({ id, members: groupMembers }) => (
            <div key={id}>
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-2xl font-black">{schoolLabels[id]}</h3>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-black text-slate-500 dark:bg-white/10 dark:text-slate-300">{groupMembers.length}명</span>
              </div>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
                {groupMembers.map((member) => <MemberCard key={member.name} member={member} />)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MemberCard({ member }) {
  return (
    <article className="rounded-[1.5rem] border border-slate-200 bg-white p-3 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-soft dark:border-white/10 dark:bg-slate-900">
      {member.image ? (
        <img
          src={member.image}
          alt={`${member.name} 대표 이미지`}
          className="mx-auto h-20 w-20 rounded-full object-cover ring-4 ring-slate-100 dark:ring-slate-800"
        />
      ) : (
        <div className={`mx-auto grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br ${member.color} text-2xl font-black text-white ring-4 ring-slate-100 dark:ring-slate-800`}>
          {initials(member.name)}
        </div>
      )}
      <h4 className="mt-3 text-base font-black sm:text-lg">{member.name}</h4>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{member.school}</p>
      <div className="mt-3 flex justify-center gap-2">
        <IconLink variant="instagram" label={`${member.name} 인스타그램`} href="https://instagram.com/"><Instagram size={16} /></IconLink>
        <IconLink variant="notion" label={`${member.name} 노션`} href="https://www.notion.so/"><NotebookTabs size={16} /></IconLink>
        <IconLink variant="github" label={`${member.name} 깃허브`} href="https://github.com/"><Github size={16} /></IconLink>
      </div>
    </article>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="bg-slate-50 px-5 py-14 dark:bg-slate-900/55">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Projects" title="프로젝트" icon={Rocket} />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {projects.map((project) => (
            <article key={project.status} className="rounded-[1.8rem] border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-slate-950">
              <div className="mb-5 flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-sm font-black dark:bg-white/10">
                  <project.icon size={17} /> {project.status}
                </span>
                <ChevronRight className="text-slate-400" size={20} />
              </div>
              <p className="text-xs font-black uppercase text-blue-600 dark:text-blue-300">{project.type}</p>
              <h3 className="mt-2 text-2xl font-black">{project.title}</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
              {project.people.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.people.map((person) => (
                    <span key={person} className="rounded-full bg-emerald-50 px-3 py-2 text-sm font-black text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-200">
                      {person}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pill({ icon: Icon, children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-2 text-xs font-black text-blue-700 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-200">
      <Icon size={16} /> {children}
    </span>
  );
}

function CyberLine({ children, color = "text-slate-200" }) {
  return <p className={`cyber-line ${color}`}>{children}</p>;
}

function SectionTitle({ eyebrow, title, icon: Icon }) {
  return (
    <div>
      <p className="inline-flex items-center gap-2 text-sm font-black text-blue-600 dark:text-blue-300">
        <Icon size={16} /> {eyebrow}
      </p>
      <h2 className="mt-2 text-4xl font-black tracking-tight md:text-5xl">{title}</h2>
    </div>
  );
}

function Stat({ number, label, icon: Icon }) {
  return (
    <div className="rounded-3xl bg-white/5 p-4 text-center ring-1 ring-white/10">
      <Icon className="mx-auto mb-2 text-blue-300" size={22} />
      <strong className="block text-3xl font-black text-rose-300">{number}</strong>
      <span className="text-sm text-slate-300">{label}</span>
    </div>
  );
}

function IconLink({ label, href, children, variant = "default" }) {
  const variants = {
    instagram: "border-transparent bg-gradient-to-br from-fuchsia-500 via-rose-500 to-amber-400 text-white hover:text-white",
    notion: "border-slate-900 bg-white text-slate-950 hover:border-slate-500 dark:border-white dark:bg-white dark:text-slate-950",
    github: "border-slate-900 bg-slate-950 text-white hover:border-slate-700 dark:border-white/20",
    default: "border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200",
  };

  return (
    <a
      aria-label={label}
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`grid h-9 w-9 place-items-center rounded-full border transition ${variants[variant]}`}
    >
      {children}
    </a>
  );
}

createRoot(document.getElementById("root")).render(<App />);
