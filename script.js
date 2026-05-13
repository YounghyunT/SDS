const members = [
  { name: "김민준", school: "장흥중", schoolId: "jangheung", color: "#2777bd" },
  { name: "이서연", school: "장흥중", schoolId: "jangheung", color: "#58b998" },
  { name: "박도윤", school: "장흥중", schoolId: "jangheung", color: "#ec6b5b" },
  { name: "최하린", school: "장흥중", schoolId: "jangheung", color: "#f4bd4f" },
  { name: "정우진", school: "장흥중", schoolId: "jangheung", color: "#7b61ff" },
  { name: "한지우", school: "장흥중", schoolId: "jangheung", color: "#1f9ca6" },
  { name: "오시윤", school: "장흥중", schoolId: "jangheung", color: "#e65f8f" },
  { name: "강예준", school: "장흥중", schoolId: "jangheung", color: "#315a7d" },
  { name: "문서아", school: "장흥중", schoolId: "jangheung", color: "#ff8a4c" },
  { name: "윤태민", school: "장흥중", schoolId: "jangheung", color: "#3f8f5f" },
  { name: "임가온", school: "장흥관산중", schoolId: "gwansan", color: "#8067c9" },
  { name: "배유찬", school: "장흥관산중", schoolId: "gwansan", color: "#20859e" },
  { name: "신라온", school: "장흥안양중", schoolId: "anyang", color: "#d55b4d" },
  { name: "홍지훈", school: "장흥안양중", schoolId: "anyang", color: "#d59a2f" },
];

const schoolLabels = {
  jangheung: "장흥중",
  gwansan: "장흥관산중",
  anyang: "장흥안양중",
};

const memberGroups = document.querySelector("#memberGroups");
const filterButtons = document.querySelectorAll(".filter-button");

function initials(name) {
  return name.slice(1, 3);
}

function memberCard(member) {
  const instagramUrl = `https://instagram.com/`;
  const notionUrl = `https://www.notion.so/`;
  const githubUrl = `https://github.com/`;

  return `
    <article class="member-card">
      <div class="avatar" style="background: linear-gradient(140deg, ${member.color}, #172027);">
        ${initials(member.name)}
      </div>
      <h4>${member.name}</h4>
      <p>${member.school}</p>
      <div class="social-links" aria-label="${member.name} 링크">
        <a href="${instagramUrl}" target="_blank" rel="noreferrer" aria-label="${member.name} 인스타그램">IG</a>
        <a href="${notionUrl}" target="_blank" rel="noreferrer" aria-label="${member.name} 노션">NO</a>
        <a href="${githubUrl}" target="_blank" rel="noreferrer" aria-label="${member.name} 깃허브">GH</a>
      </div>
    </article>
  `;
}

function renderMembers(selectedSchool = "all") {
  const schools = selectedSchool === "all" ? Object.keys(schoolLabels) : [selectedSchool];

  memberGroups.innerHTML = schools
    .map((schoolId) => {
      const schoolMembers = members.filter((member) => member.schoolId === schoolId);

      if (schoolMembers.length === 0) {
        return "";
      }

      return `
        <section class="school-group" data-school-group="${schoolId}">
          <h3 class="school-title">
            ${schoolLabels[schoolId]}
            <span>${schoolMembers.length}명</span>
          </h3>
          <div class="member-grid">
            ${schoolMembers.map(memberCard).join("")}
          </div>
        </section>
      `;
    })
    .join("");
}

document.querySelectorAll("[data-tabs]").forEach((tabs) => {
  const buttons = tabs.querySelectorAll(".tab-button");
  const panels = tabs.querySelectorAll(".tab-panel");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.tab;

      buttons.forEach((item) => {
        item.classList.toggle("is-active", item === button);
        item.setAttribute("aria-selected", item === button ? "true" : "false");
      });

      panels.forEach((panel) => {
        const isActive = panel.dataset.panel === target;
        panel.classList.toggle("is-active", isActive);
        panel.hidden = !isActive;
      });
    });
  });
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    renderMembers(button.dataset.school);
  });
});

renderMembers();
