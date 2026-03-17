// =========================================
// SCROLLYTELLING DASHBOARD - SCRIPT.JS
// Freskaleche S.A.S. - Intersection Observers
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    // -----------------------------------------
    // 1. NAVIGATION DOT TRACKING
    // -----------------------------------------
    const scrollDots = document.querySelectorAll(".scroll-dot");
    const sections = document.querySelectorAll(".full-screen-section");

    // Click handler for smooth scrolling to sections
    scrollDots.forEach(dot => {
        dot.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = dot.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Update active dot based on scroll position
    const navObserverOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    };

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute("id");
                scrollDots.forEach(dot => {
                    dot.classList.remove("active");
                    if (dot.getAttribute("href") === `#${id}`) {
                        dot.classList.add("active");
                    }
                });
            }
        });
    }, navObserverOptions);

    sections.forEach(section => {
        navObserver.observe(section);
    });

    // -----------------------------------------
    // 2. SCROLL REVEAL ANIMATIONS
    // -----------------------------------------
    const revealElements = document.querySelectorAll(
        ".reveal-fade-up, .reveal-fade-left, .reveal-fade-right, .reveal-scale-up, .reveal-stagger-item"
    );

    const revealObserverOptions = {
        root: null,
        rootMargin: "0px 0px -100px 0px",
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                
                // If it's a progress bar container, animate its width
                if (entry.target.classList.contains("bar-group")) {
                    const bar = entry.target.querySelector(".progress-bar");
                    if (bar) {
                        const targetWidth = bar.getAttribute("data-width");
                        setTimeout(() => {
                            bar.style.width = targetWidth;
                        }, 300);
                    }
                }

                // Stop observing once revealed (animate only once)
                observer.unobserve(entry.target);
            }
        });
    }, revealObserverOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // -----------------------------------------
    // 3. LAZY LOADING CHART.JS
    // -----------------------------------------
    let growthChartInstance = null;
    let shareChartInstance = null;

    Chart.defaults.color = "#94a3b8";
    Chart.defaults.font.family = "Outfit, sans-serif";

    function renderGrowthChart() {
        if (growthChartInstance) return;
        
        const ctxGrowth = document.getElementById("growthChart");
        if (ctxGrowth) {
            growthChartInstance = new Chart(ctxGrowth, {
                type: "line",
                data: {
                    labels: ["2021 (H)", "2024 (A)", "2029 (P)", "2033 (P)"],
                    datasets: [{
                        label: "Millones USD",
                        data: [2597, 2555, 2606, 3200],
                        borderColor: "#60a5fa",
                        backgroundColor: "rgba(37, 99, 235, 0.15)",
                        fill: true,
                        tension: 0.4,
                        borderWidth: 4,
                        pointBackgroundColor: "#0B1120",
                        pointBorderColor: "#60a5fa",
                        pointBorderWidth: 3,
                        pointRadius: 6,
                        pointHoverRadius: 8
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    animation: {
                        duration: 2000,
                        easing: "easeOutQuart"
                    },
                    plugins: { 
                        legend: { display: false },
                        tooltip: {
                            backgroundColor: "rgba(15, 23, 42, 0.9)",
                            titleFont: { size: 14 },
                            bodyFont: { size: 16, weight: "bold" },
                            padding: 12,
                            borderColor: "rgba(255,255,255,0.1)",
                            borderWidth: 1
                        }
                    },
                    scales: {
                        y: { 
                            beginAtZero: false, 
                            min: 2400,
                            grid: { color: "rgba(255,255,255,0.05)" },
                            ticks: { callback: value => "$" + value + "M" },
                            border: { display: false }
                        },
                        x: { 
                            grid: { display: false },
                            border: { display: false }
                        }
                    }
                }
            });
        }
    }

    function renderShareChart() {
        if (shareChartInstance) return;

        const ctxShare = document.getElementById("shareChart");
        if (ctxShare) {
            shareChartInstance = new Chart(ctxShare, {
                type: "doughnut",
                data: {
                    labels: ["Colanta", "Alpina", "Alquería", "Freskaleche", "Otros"],
                    datasets: [{
                        data: [55.5, 25.3, 14.5, 4.7, 10],
                        backgroundColor: ["#2563eb", "#60a5fa", "#10b981", "#f97316", "#334155"],
                        borderWidth: 0,
                        hoverOffset: 10
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    animation: {
                        animateScale: true,
                        animateRotate: true,
                        duration: 2000,
                        easing: "easeOutQuart"
                    },
                    plugins: {
                        legend: { 
                            position: "bottom", 
                            labels: { 
                                usePointStyle: true, 
                                padding: 20,
                                color: "#cbd5e1"
                            } 
                        },
                        tooltip: {
                            backgroundColor: "rgba(15, 23, 42, 0.9)",
                            padding: 12,
                            borderColor: "rgba(255,255,255,0.1)",
                            borderWidth: 1
                        }
                    },
                    cutout: "75%"
                }
            });
        }
    }

    // Observe chart containers to trigger render
    const chartContainers = document.querySelectorAll(".chart-wrapper");
    const chartObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.querySelector("#growthChart")) {
                    renderGrowthChart();
                }
                if (entry.target.querySelector("#shareChart")) {
                    renderShareChart();
                }
            }
        });
    }, { threshold: 0.3 });

    chartContainers.forEach(container => chartObserver.observe(container));

    // -----------------------------------------
    // 4. HEADER DATE
    // -----------------------------------------
    const dateEl = document.getElementById("current-date");
    if (dateEl) {
        const now = new Date();
        dateEl.textContent = now.toLocaleDateString("es-ES", { 
            year: "numeric", month: "long", day: "numeric" 
        });
    }

    // -----------------------------------------
    // 5. EXPORT BUTTON (Print)
    // -----------------------------------------
    const exportBtn = document.querySelector(".btn-primary.glass-btn");
    if (exportBtn) {
        exportBtn.addEventListener("click", () => {
            window.print();
        });
    }
});
