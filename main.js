// ===== MOBILE MENU =====
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu) menu.classList.toggle('open');
}

// ===== REFRESH / LIVE UPDATE =====
function refreshData() {
  showToast('🔄 Data refreshed successfully!');
  // Simulate live number updates
  animateValue('totalReach',    3700000, 3900000, 1200);
  animateValue('totalFollowers', 246000,  251000,  1200);
  animateValue('totalLikes',    1190000, 1220000,  1200);
}

function animateValue(id, start, end, duration) {
  const el = document.getElementById(id);
  if (!el) return;
  const range   = end - start;
  const steps   = 40;
  const stepVal = range / steps;
  const stepTime = duration / steps;
  let current = start;
  const timer = setInterval(() => {
    current += stepVal;
    if (current >= end) { current = end; clearInterval(timer); }
    el.textContent = Math.round(current).toLocaleString();
  }, stepTime);
}

// ===== PLATFORM FILTER (index.html) =====
function filterPlatform(platform, btn) {
  document.querySelectorAll('.filter-bar .filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  document.querySelectorAll('.kpi-card').forEach(card => {
    const platforms = card.getAttribute('data-platform') || 'all';
    if (platform === 'all' || platforms.includes(platform)) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

// ===== PERIOD CHANGE =====
function changePeriod(days) {
  showToast(`📅 Showing data for last ${days} days`);
}

// ===== TOAST =====
function showToast(msg) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ===== INDEX CHARTS =====
document.addEventListener('DOMContentLoaded', () => {
  const reachCtx = document.getElementById('reachChart');
  if (reachCtx) {
    new Chart(reachCtx, {
      type: 'bar',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          { label: 'Instagram', data: [62000, 75000, 68000, 82000, 91000, 105000, 88000], backgroundColor: 'rgba(193,53,132,0.75)', borderRadius: 5 },
          { label: 'YouTube',   data: [140000, 175000, 190000, 210000, 230000, 260000, 195000], backgroundColor: 'rgba(255,0,0,0.65)', borderRadius: 5 },
          { label: 'Twitter',   data: [38000, 45000, 41000, 52000, 48000, 60000, 44000], backgroundColor: 'rgba(29,161,242,0.7)', borderRadius: 5 },
        ]
      },
      options: {
        responsive: true,
        plugins: { legend: { position: 'top', labels: { color: '#94a3b8', font: { family: 'DM Sans' } } } },
        scales: {
          x: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.05)' } },
          y: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.05)' }, beginAtZero: true }
        }
      }
    });
  }

  const pieCtx = document.getElementById('pieChart');
  if (pieCtx) {
    new Chart(pieCtx, {
      type: 'doughnut',
      data: {
        labels: ['Instagram', 'YouTube', 'Twitter'],
        datasets: [{
          data: [128400, 84600, 35500],
          backgroundColor: ['rgba(193,53,132,0.85)', 'rgba(255,0,0,0.8)', 'rgba(29,161,242,0.8)'],
          borderColor: ['#c13584', '#ff0000', '#1da1f2'],
          borderWidth: 2
        }]
      },
      options: {
        cutout: '65%',
        plugins: {
          legend: { position: 'bottom', labels: { color: '#94a3b8', font: { family: 'DM Sans' }, padding: 16 } }
        }
      }
    });
  }

  // Auto-refresh every 30 seconds
  setInterval(() => {
    animateValue('heroFollowers' , 247000, 250000, 800);
  }, 30000);
});
