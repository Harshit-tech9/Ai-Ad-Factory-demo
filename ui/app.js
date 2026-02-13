/**
 * AI Ad Factory — minimal UI. View switching and demo interactions.
 */

const views = {
  dashboard: { title: 'Dashboard', subtitle: 'Your campaigns at a glance' },
  creatives: { title: 'Creatives', subtitle: 'Approve or reject AI-suggested ads' },
  onboarding: { title: 'Onboarding', subtitle: 'How businesses sign up via WhatsApp' }
};

function setView(viewId) {
  document.querySelectorAll('.view').forEach(el => el.classList.add('hidden'));
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));

  const viewEl = document.getElementById(`view-${viewId}`);
  const navEl = document.querySelector(`[data-view="${viewId}"]`);

  if (viewEl) viewEl.classList.remove('hidden');
  if (navEl) navEl.classList.add('active');

  const info = views[viewId];
  if (info) {
    const titleEl = document.querySelector('[data-title]');
    const subEl = document.querySelector('[data-subtitle]');
    if (titleEl) titleEl.textContent = info.title;
    if (subEl) subEl.textContent = info.subtitle;
  }
}

function initNav() {
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const viewId = btn.getAttribute('data-view');
      if (viewId) setView(viewId);
    });
  });
}

function initCreativeActions() {
  document.querySelectorAll('.creative-card').forEach(card => {
    const approveBtn = card.querySelector('.btn-approve');
    const rejectBtn = card.querySelector('.btn-reject');
    if (approveBtn) {
      approveBtn.addEventListener('click', () => {
        card.style.opacity = '0.5';
        card.querySelector('.creative-actions').innerHTML =
          '<span style="color: var(--success); font-size: 0.9rem;">Approved ✓</span>';
      });
    }
    if (rejectBtn) {
      rejectBtn.addEventListener('click', () => {
        card.style.opacity = '0.5';
        card.querySelector('.creative-actions').innerHTML =
          '<span style="color: var(--danger); font-size: 0.9rem;">Rejected</span>';
      });
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initCreativeActions();
});
