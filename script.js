document.addEventListener('DOMContentLoaded', function () {
    // === Graphique de Performance ===
    const perfChartCtx = document.getElementById('performanceChart')?.getContext('2d');
    if (perfChartCtx) {
        new Chart(perfChartCtx, {
            type: 'bar',
            data: {
                labels: ['Avant Urbanisation', 'Après Urbanisation'],
                datasets: [
                    {
                        label: 'Temps de déploiement (jours)',
                        data: [180, 90],
                        backgroundColor: 'rgba(52, 152, 219, 0.7)'
                    },
                    {
                        label: 'Coûts IT (% du CA)',
                        data: [8.5, 5.2],
                        backgroundColor: 'rgba(46, 204, 113, 0.7)'
                    },
                    {
                        label: 'Satisfaction client (%)',
                        data: [65, 88],
                        backgroundColor: 'rgba(155, 89, 182, 0.7)'
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // === Graphique ROI ===
    const roiChartCtx = document.getElementById('roiChart')?.getContext('2d');
    if (roiChartCtx) {
        new Chart(roiChartCtx, {
            type: 'line',
            data: {
                labels: ['Année 1', 'Année 2', 'Année 3', 'Année 4', 'Année 5'],
                datasets: [{
                    label: 'ROI Cumulé (%)',
                    data: [-20, 10, 45, 80, 120],
                    borderColor: 'rgba(231, 76, 60, 0.8)',
                    backgroundColor: 'rgba(231, 76, 60, 0.1)',
                    fill: true,
                    tension: 0.3
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: false
                    }
                }
            }
        });
    }

    // === Graphique Radar - Comparatif Métriques ===
    const comparisonCtx = document.getElementById('metricsComparisonChart')?.getContext('2d');
    if (comparisonCtx) {
        new Chart(comparisonCtx, {
            type: 'radar',
            data: {
                labels: ['Disponibilité', 'Coûts', 'Performance', 'Sécurité', 'Évolutivité', 'Alignement'],
                datasets: [
                    {
                        label: 'Avant Urbanisation',
                        data: [65, 40, 50, 60, 45, 55],
                        backgroundColor: 'rgba(231, 76, 60, 0.2)',
                        borderColor: 'rgba(231, 76, 60, 1)',
                        pointBackgroundColor: 'rgba(231, 76, 60, 1)'
                    },
                    {
                        label: 'Après Urbanisation',
                        data: [85, 75, 90, 80, 85, 90],
                        backgroundColor: 'rgba(46, 204, 113, 0.2)',
                        borderColor: 'rgba(46, 204, 113, 1)',
                        pointBackgroundColor: 'rgba(46, 204, 113, 1)'
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    r: {
                        suggestedMin: 0,
                        suggestedMax: 100
                    }
                }
            }
        });
    }

    // === Graphique Barres - Impact Métriques ===
    const impactCtx = document.getElementById('metricsImpactChart')?.getContext('2d');
    if (impactCtx) {
        new Chart(impactCtx, {
            type: 'bar',
            data: {
                labels: ['Pertes techniques', 'Recouvrement', 'Coûts IT', 'Délais projets', 'Satisfaction client'],
                datasets: [{
                    label: 'Impact de l\'urbanisation (%)',
                    data: [25, 22, -30, -40, 35],
                    backgroundColor: [
                        'rgba(52, 152, 219, 0.7)',
                        'rgba(46, 204, 113, 0.7)',
                        'rgba(231, 76, 60, 0.7)',
                        'rgba(155, 89, 182, 0.7)',
                        'rgba(241, 196, 15, 0.7)'
                    ]
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // === Animation au Défilement ===
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.concept-card, .section-title, .card');
        elements.forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 100) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    };

    document.querySelectorAll('.concept-card, .section-title, .card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();

    // === Simulateur Avant/Après ===
    const scenarioData = {
        1: { name: "Intégration facturation", currentCost: 15, optimizedCost: 10, kpi1: "+25% efficacité", kpi2: "-30% erreurs" },
        2: { name: "Modernisation comptage", currentCost: 20, optimizedCost: 12, kpi1: "-20% pertes", kpi2: "+15% recouvrement" },
        3: { name: "Centralisation données clients", currentCost: 18, optimizedCost: 11, kpi1: "+30% qualité données", kpi2: "-25% délais traitement" },
        4: { name: "Automatisation processus métier", currentCost: 22, optimizedCost: 13, kpi1: "-35% coûts opérationnels", kpi2: "+20% productivité" },
        5: { name: "Gestion interventions terrain", currentCost: 19, optimizedCost: 12, kpi1: "-40% délais", kpi2: "+15% satisfaction client" },
        6: { name: "Optimisation du recouvrement", currentCost: 16, optimizedCost: 9, kpi1: "+18% recouvrement", kpi2: "-20% impayés" },
        7: { name: "Plateforme analytique prédictive", currentCost: 24, optimizedCost: 15, kpi1: "+25% prévisions", kpi2: "+30% détection fraudes" }
    };

    const rangeInput = document.getElementById('clientRange');
    const clientValue = document.getElementById('clientValue');
    rangeInput?.addEventListener('input', function () {
        clientValue.textContent = parseInt(this.value).toLocaleString('fr-FR');
    });

    document.getElementById('runSimulation')?.addEventListener('click', () => {
        const scenario = document.getElementById('scenarioSelect').value;
        const clients = parseInt(rangeInput.value);
        const maturity = parseInt(document.getElementById('maturitySelect').value);
        const data = scenarioData[scenario];

        if (!data) return;

        const costFactor = clients / 1_000_000 * (1 + (5 - maturity) * 0.1);
        const current = (data.currentCost * costFactor).toFixed(2);
        const optimized = (data.optimizedCost * costFactor).toFixed(2);
        const savings = (current - optimized).toFixed(2);

        document.getElementById('currentCost').textContent = `${current} M€`;
        document.getElementById('optimizedCost').textContent = `${optimized} M€`;

        document.getElementById('simulationResults').innerHTML = `
            <h4>${data.name}</h4>
            <p class="lead">Économies potentielles : <strong class="text-success">${savings} M€/an</strong></p>
            <div class="row">
                <div class="col-md-6"><div class="card bg-light mb-2"><div class="card-body p-2"><small><i class="fas fa-check-circle text-success me-2"></i>${data.kpi1}</small></div></div></div>
                <div class="col-md-6"><div class="card bg-light mb-2"><div class="card-body p-2"><small><i class="fas fa-check-circle text-success me-2"></i>${data.kpi2}</small></div></div></div>
            </div>`;

        updateSimulationChart(current, optimized, data.kpi1, data.kpi2);
    });

    function updateSimulationChart(current, optimized, kpi1, kpi2) {
        const ctx = document.getElementById('simulationChart').getContext('2d');
        const values = [parseFloat(current), parseFloat(optimized), 25, 15];

        if (window.simulationChart) window.simulationChart.destroy();

        window.simulationChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Coût Actuel', 'Coût Optimisé', kpi1, kpi2],
                datasets: [{
                    label: 'Impact',
                    data: values,
                    backgroundColor: [
                        'rgba(231, 76, 60, 0.7)',
                        'rgba(46, 204, 113, 0.7)',
                        'rgba(52, 152, 219, 0.7)',
                        'rgba(241, 196, 15, 0.7)'
                    ]
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: { beginAtZero: true }
                }
            }
        });
    }
});

// === Gestion des Tabs ===
document.querySelectorAll('.nav-tabs .nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        document.querySelectorAll('.tab-pane').forEach(pane => {
            pane.classList.remove('show', 'active');
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });

        this.classList.add('active');
        target.classList.add('show', 'active');
    });
});
