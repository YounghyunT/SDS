import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Award,
  CalendarDays,
  ChevronRight,
  Code2,
  Gamepad2,
  Github,
  GraduationCap,
  Instagram,
  Moon,
  NotebookTabs,
  Rocket,
  School,
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
  { name: "김민준", school: "장흥중", schoolId: "jangheung", color: "from-blue-500 to-sky-900" },
  { name: "이서연", school: "장흥중", schoolId: "jangheung", color: "from-emerald-400 to-teal-800" },
  { name: "박도윤", school: "장흥중", schoolId: "jangheung", color: "from-rose-400 to-zinc-800" },
  { name: "최하린", school: "장흥중", schoolId: "jangheung", color: "from-amber-300 to-stone-800" },
  { name: "정우진", school: "장흥중", schoolId: "jangheung", color: "from-violet-500 to-indigo-900" },
  { name: "한지우", school: "장흥중", schoolId: "jangheung", color: "from-cyan-400 to-slate-800" },
  { name: "오시윤", school: "장흥중", schoolId: "jangheung", color: "from-pink-400 to-fuchsia-900" },
  { name: "강예준", school: "장흥중", schoolId: "jangheung", color: "from-slate-500 to-blue-950" },
  { name: "문서아", school: "장흥중", schoolId: "jangheung", color: "from-orange-400 to-red-900" },
  { name: "윤태민", school: "장흥중", schoolId: "jangheung", color: "from-green-400 to-emerald-900" },
  { name: "임가온", school: "장흥관산중", schoolId: "gwansan", color: "from-purple-400 to-slate-900" },
  { name: "배유찬", school: "장흥관산중", schoolId: "gwansan", color: "from-sky-400 to-cyan-900" },
  { name: "신라온", school: "장흥안양중", schoolId: "anyang", color: "from-red-400 to-zinc-900" },
  { name: "홍지훈", school: "장흥안양중", schoolId: "anyang", color: "from-yellow-400 to-stone-900" },
  { name: "영현T", school: "장흥중 / 정보", schoolId: "teachers", color: "from-slate-700 to-black", teacher: true },
  { name: "영욱T", school: "장흥관산중 / 사회", schoolId: "teachers", color: "from-blue-700 to-slate-950", teacher: true },
];

const projects = [
  {
    status: "진행중",
    icon: Gamepad2,
    title: "장흥 물축제 게임프로젝트",
    type: "Game · Festival",
    description: "물축제를 배경으로 방문객이 모바일에서 바로 즐길 수 있는 미니 게임을 제작하는 프로젝트입니다.",
    people: ["김민준", "이서연", "박도윤", "최하린"],
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
        <footer className="border-t border-slate-200 bg-white px-5 py-9 text-slate-600 dark:border-white/10 dark:bg-slate-950 dark:text-slate-400">
          <div className="mx-auto flex max-w-6xl flex-col gap-2">
            <strong className="text-slate-950 dark:text-white">장흥 연합코딩동아리 삼다수</strong>
            <span>함께 배우고, 함께 만들고, 함께 보여주는 팀.</span>
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
        <button
          className="inline-flex h-11 items-center gap-2 rounded-full border border-slate-200 bg-white px-3 text-sm font-black shadow-sm dark:border-white/10 dark:bg-white/10"
          type="button"
          onClick={() => setDark(!dark)}
          aria-label={dark ? "라이트모드 켜기" : "다크모드 켜기"}
        >
          {dark ? <Sun size={18} /> : <Moon size={18} />}
          <span className="hidden sm:inline">{dark ? "Light" : "Dark"}</span>
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-[1.02fr_0.98fr] md:items-center md:py-20">
      <div>
        <Pill icon={School}>장흥중 · 장흥관산중 · 장흥안양중</Pill>
        <h1 className="mt-5 text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
          장흥을 연결하는 연합코딩동아리, 삼다수
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          서로 다른 학교의 학생들이 모여 게임, 웹, AI, 피지컬 컴퓨팅 프로젝트를 함께 만들고 발표하는 학생 개발 팀입니다.
        </p>
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
        <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-200 via-emerald-100 to-rose-100 blur-2xl dark:from-blue-500/20 dark:via-emerald-500/10 dark:to-rose-500/20" />
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-5 shadow-glow dark:border-white/10 dark:bg-slate-900">
          <div className="flex items-center justify-between">
            <Pill icon={Sparkles}>3 Schools · 1 Team</Pill>
            <Code2 className="text-blue-500" />
          </div>
          <div className="relative mt-6 h-60 rounded-3xl bg-slate-50 dark:bg-slate-800">
            <SchoolNode className="left-5 top-5 bg-blue-500">장흥중</SchoolNode>
            <SchoolNode className="right-5 top-5 bg-emerald-500">관산중</SchoolNode>
            <SchoolNode className="bottom-5 left-1/2 -translate-x-1/2 bg-rose-500">안양중</SchoolNode>
            <div className="absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-slate-950 text-lg font-black text-white shadow-soft dark:bg-white dark:text-slate-950">
              삼다수
            </div>
            <div className="absolute left-1/2 top-16 h-28 w-px -translate-x-1/2 bg-slate-300 dark:bg-white/20" />
            <div className="absolute left-20 top-1/2 h-px w-44 bg-slate-300 dark:bg-white/20" />
          </div>
          <div className="mt-5 rounded-3xl bg-slate-950 p-5 text-white dark:bg-white dark:text-slate-950">
            <strong className="flex items-center gap-2 text-xl"><Rocket size={21} /> 학교는 달라도 프로젝트는 하나로</strong>
            <p className="mt-2 text-sm leading-6 opacity-75">기획 · 개발 · 발표를 함께 진행하는 연합 팀</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClubSection({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "about", label: "소개", icon: NotebookTabs },
    { id: "history", label: "연혁", icon: CalendarDays },
    { id: "awards", label: "수상실적", icon: Award },
  ];

  return (
    <section id="club" className="bg-slate-50 px-5 py-14 dark:bg-slate-900/55">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Club" title="동아리 소개" icon={Sparkles} />
        <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex h-12 shrink-0 items-center gap-2 rounded-full px-5 font-black transition ${
                activeTab === tab.id
                  ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950"
                  : "border border-slate-200 bg-white text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
              }`}
            >
              <tab.icon size={18} /> {tab.label}
            </button>
          ))}
        </div>
        <div className="mt-3 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft dark:border-white/10 dark:bg-slate-950 md:p-8">
          {activeTab === "about" && <AboutPanel />}
          {activeTab === "history" && <HistoryPanel />}
          {activeTab === "awards" && <AwardsPanel />}
        </div>
      </div>
    </section>
  );
}

function AboutPanel() {
  return (
    <>
      <h3 className="text-2xl font-black">작게 배우고, 빠르게 만들고, 함께 발표합니다.</h3>
      <p className="mt-3 max-w-4xl text-lg leading-8 text-slate-600 dark:text-slate-300">
        삼다수는 장흥 지역 중학생들이 학교를 넘어 팀을 이루는 연합코딩동아리입니다. 매주 아이디어를 나누고, 역할을 정하고, 결과물을 실제로 사용할 수 있는 형태로 완성하는 것을 목표로 합니다.
      </p>
      <div className="mt-6 grid grid-cols-3 gap-3">
        <Stat number="16" label="예시 구성원" icon={UsersRound} />
        <Stat number="3" label="참여 학교" icon={School} />
        <Stat number="1" label="진행 프로젝트" icon={Rocket} />
      </div>
    </>
  );
}

function HistoryPanel() {
  const items = [
    ["2024. 03", "장흥 지역 코딩 스터디 모임으로 시작"],
    ["2024. 09", "학교 연합 프로젝트 팀 체제로 확대"],
    ["2025. 04", "삼다수 이름으로 첫 공개 프로젝트 기획"],
  ];

  return (
    <div className="grid gap-3">
      {items.map(([date, text]) => (
        <div key={date} className="flex items-start gap-3 rounded-3xl bg-slate-50 p-4 dark:bg-white/5">
          <CalendarDays className="mt-1 shrink-0 text-blue-500" size={20} />
          <div>
            <strong className="text-blue-600 dark:text-blue-300">{date}</strong>
            <p className="mt-1 text-slate-600 dark:text-slate-300">{text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function AwardsPanel() {
  const items = [
    ["2025 장흥 청소년 SW 아이디어톤", "우수상 · 지역 축제 참여형 게임 기획"],
    ["2024 학교 연합 메이커 발표회", "인기상 · 웹 기반 미니 서비스 발표"],
  ];

  return (
    <div className="grid gap-3">
      {items.map(([title, text]) => (
        <div key={title} className="flex items-start gap-3 rounded-3xl bg-slate-50 p-4 dark:bg-white/5">
          <Trophy className="mt-1 shrink-0 text-amber-500" size={22} />
          <div>
            <strong>{title}</strong>
            <p className="mt-1 text-slate-600 dark:text-slate-300">{text}</p>
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
        <div className="mt-6 flex gap-2 overflow-x-auto rounded-3xl border border-slate-200 bg-slate-50 p-2 dark:border-white/10 dark:bg-white/5">
          {Object.entries(schoolLabels).map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => setSchool(id)}
              className={`inline-flex h-11 shrink-0 items-center gap-2 rounded-full px-4 font-black transition ${
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
    <article className="rounded-[1.7rem] border border-slate-200 bg-white p-4 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-soft dark:border-white/10 dark:bg-slate-900">
      <div className={`mx-auto grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br ${member.color} text-3xl font-black text-white ring-4 ring-slate-100 dark:ring-slate-800`}>
        {initials(member.name)}
      </div>
      <h4 className="mt-4 text-lg font-black">{member.name}</h4>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{member.school}</p>
      <div className="mt-4 flex justify-center gap-2">
        <IconLink label={`${member.name} 인스타그램`} href="https://instagram.com/"><Instagram size={17} /></IconLink>
        <IconLink label={`${member.name} 노션`} href="https://www.notion.so/"><NotebookTabs size={17} /></IconLink>
        <IconLink label={`${member.name} 깃허브`} href="https://github.com/"><Github size={17} /></IconLink>
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

function SchoolNode({ className, children }) {
  return <span className={`absolute grid h-12 min-w-24 place-items-center rounded-full px-4 text-sm font-black text-white shadow-soft ${className}`}>{children}</span>;
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
    <div className="rounded-3xl bg-slate-50 p-4 text-center dark:bg-white/5">
      <Icon className="mx-auto mb-2 text-blue-500" size={22} />
      <strong className="block text-3xl font-black text-rose-500">{number}</strong>
      <span className="text-sm text-slate-500 dark:text-slate-400">{label}</span>
    </div>
  );
}

function IconLink({ label, href, children }) {
  return (
    <a
      aria-label={label}
      href={href}
      target="_blank"
      rel="noreferrer"
      className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-blue-300 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
    >
      {children}
    </a>
  );
}

createRoot(document.getElementById("root")).render(<App />);
