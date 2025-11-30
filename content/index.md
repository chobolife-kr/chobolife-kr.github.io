---
title: 대문
---
<div class="home-hero">
  <h1 class="fade-in">주제가 없는 블로그</h1>
  <div class="intro-text">
    <p>이 블로그에는 정해진 주제가 없습니다.</p>
    <p>오늘은 문득 떠오른 생각을 적고, 내일은 어제 배운 기술을 정리하고, 모레는 사업하며 겪은 하루를 기록합니다. 때로는 <span class="highlight">일기장</span>이 되고, 때로는 <span class="highlight">기술문서</span>가 되고, 때로는 <span class="highlight">사업일기</span>가 되기도 합니다.</p>
    <p>주제를 정하지 않는 이유는 간단합니다. 삶 자체가 하나의 주제로 정리되지 않으니까요. 그래서 저는 그냥 살아가는 이야기를 씁니다. 거창하지 않아도 괜찮고, 누군가에게 도움이 되지 않아도 괜찮습니다. 다만 오늘의 내가 내일의 나에게 남기는 기록이면 충분합니다.</p>
  </div>
  <div class="divider"></div>
  <div class="philosophy">
    <p>이 블로그에 댓글란이 없는 이유도 그래서입니다.</p>
    <p class="small">토론보다는 기록이 목적이고, 설득보다는 정리가 목적입니다. 조용히 쓰고, 조용히 남깁니다.</p>
  </div>
  <p class="wish">그럼에도 불구하고, 저의 작은 발자취가 비슷한 길을 걷는 누군가에게 작은 힌트가 되기를 바랍니다.</p>
</div>

<h2 class="section-title">관심사항</h2>

<div class="interest-cards">
  <div class="interest-card">
    <span class="card-icon">🛒</span>
    <h3>스마트스토어</h3>
    <p>작은 스마트스토어를 운영하고 있습니다. 직원 없이 혼자서 모든 걸 해야 하다 보니, 쉽지 않은 날들이 많습니다. 상품 소싱부터 촬영, 상세페이지 제작, 고객 응대, 배송까지. 하나하나가 배움의 연속입니다.</p>
    <p>그래도 포기하지 않고 꿋꿋하게 해나가고 있습니다. 이 과정에서 알게 된 것들, 실패했던 것들, 그리고 작은 성공들을 이곳에 기록합니다.</p>
  </div>
  <div class="interest-card">
    <span class="card-icon">🤖</span>
    <h3>AI</h3>
    <p>1인 사업자에게 시간은 가장 귀한 자원입니다. 그래서 내 업무를 조금이나마 덜어줄 수 있는 AI에 자연스럽게 관심을 갖게 되었습니다. 거창한 기술이 아니어도 좋습니다. 하루에 30분만 아껴줘도, 그건 제게 큰 도움이 됩니다.</p>
    <p>AI를 활용하면서 배운 것들, 유용했던 도구들, 그리고 시행착오들을 공유합니다.</p>
  </div>
  <div class="interest-card">
    <span class="card-icon">🎬</span>
    <h3>유튜브</h3>
    <p>스마트스토어를 운영하다 보니 자연스럽게 홍보의 필요성을 느꼈고, 유튜브를 시작하게 되었습니다. 아직 서툴지만, 영상을 만들고 업로드하는 과정 자체가 또 하나의 배움입니다.</p>
    <p>유튜브를 하면서 느낀 점들, 편집 팁, 채널 운영 경험 등을 나눕니다.</p>
  </div>
</div>

<style>
.home-hero {
  text-align: center;
  padding: 3rem 0;
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 2rem;
  position: relative;
}

.fade-in::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: var(--secondary);
  border-radius: 2px;
}

.intro-text {
  margin: 2rem auto;
  max-width: 600px;
  line-height: 1.9;
  text-align: left;
}

.intro-text p {
  margin: 1rem 0;
  color: var(--darkgray);
}

.highlight {
  color: var(--secondary);
  font-weight: 600;
  position: relative;
}

.highlight::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 6px;
  background: var(--secondary);
  opacity: 0.2;
  z-index: -1;
}

.divider {
  width: 40px;
  height: 2px;
  background: var(--gray);
  margin: 2rem auto;
}

.philosophy {
  margin: 1.5rem auto;
  max-width: 500px;
  color: var(--darkgray);
}

.philosophy .small {
  font-size: 0.9rem;
  color: var(--gray);
  font-style: italic;
}

.wish {
  margin: 2rem auto;
  padding: 1.5rem;
  max-width: 550px;
  background: var(--lightgray);
  border-radius: 8px;
  border-left: 4px solid var(--secondary);
  color: var(--darkgray);
  text-align: left;
}

.section-title {
  text-align: center;
  margin: 3rem 0 2rem;
  color: var(--dark);
  font-size: 1.8rem;
}

.interest-cards {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}

.interest-card {
  background: var(--lightgray);
  border-radius: 12px;
  padding: 2rem;
  width: 300px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: fadeInUp 0.8s ease-out;
  animation-fill-mode: both;
}

.interest-card:nth-child(1) { animation-delay: 0.1s; }
.interest-card:nth-child(2) { animation-delay: 0.2s; }
.interest-card:nth-child(3) { animation-delay: 0.3s; }

.interest-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.card-icon {
  font-size: 2.5rem;
  display: block;
  margin-bottom: 1rem;
}

.interest-card h3 {
  margin: 0.5rem 0 1rem;
  color: var(--secondary);
  font-size: 1.3rem;
}

.interest-card p {
  margin: 0.5rem 0;
  font-size: 0.95rem;
  color: var(--darkgray);
  line-height: 1.7;
  text-align: left;
}
</style>
