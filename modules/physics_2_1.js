// File: modules/physics_2_1.js

// ---------------------------------------------------------
// 1. READING MATERIAL: 2.1 Introduction
// ---------------------------------------------------------
window.LMS_PORTAL.push({
    id: 'read_phys_2_1',
    targetUser: 'icchansh',
    subjectTitle: 'Physics',
    chapterTitle: '2. Electrostatic Potential & Capacitance',
    moduleTitle: '📖 2.1 Theory: Introduction to Potential',
    type: 'reading',
    html: `
        <h2 style="color: var(--primary-dark); margin-bottom: 15px;">2.1 Introduction: Conservative Forces & Potential Energy</h2>
        
        <p>In Class 11, you learned that forces like gravity and spring forces are <strong>conservative forces</strong>. This means the work done by or against them depends <em>only</em> on the initial and final positions, not on the path taken. The electrostatic force between two stationary charges (Coulomb's Force) is also a conservative force.</p>
        
        <h3 style="margin-top: 25px; margin-bottom: 10px; color: var(--text-main);">The Concept of Work and Energy</h3>
        <p>Imagine a stationary positive charge $Q$ at the origin. If you want to bring another positive test charge $q$ closer to it from point R to point P, the electrostatic force will aggressively repel it. To force it closer, an external force ($F_{ext}$) must do mechanical <strong>Work ($W$)</strong> against this repulsion.</p>
        
        <div style="background: var(--bg-main); padding: 20px; border-left: 4px solid var(--primary); margin: 20px 0; border-radius: 4px;">
            <p style="margin-bottom: 10px;"><strong>The Work-Energy Theorem:</strong></p>
            <p>The work done by the external force is stored inside the system as <strong>Electrostatic Potential Energy ($U$)</strong>.</p>
            <p style="text-align: center; font-size: 1.2rem; margin-top: 10px;">$$ W_{RP} = \\int_{R}^{P} \\vec{F}_{ext} \\cdot d\\vec{r} = U_P - U_R = \\Delta U $$</p>
        </div>

        <h3 style="margin-top: 25px; margin-bottom: 10px; color: var(--text-main);">Key Takeaways:</h3>
        <ul style="margin-left: 20px; margin-bottom: 20px;">
            <li style="margin-bottom: 8px;"><strong>Path Independence:</strong> The work done $W_{RP}$ is exactly the same whether you move the charge in a straight line or a chaotic zigzag. It only cares about points R and P.</li>
            <li style="margin-bottom: 8px;"><strong>Closed Loop:</strong> Because it is path-independent, the total work done moving a charge in a complete closed loop (starting and ending at the same point) is always <strong>Zero</strong>.</li>
            <li style="margin-bottom: 8px;"><strong>Reference Point:</strong> We can only measure the <em>change</em> in potential energy ($\\Delta U$). For convenience, physicists usually choose infinity ($\\infty$) as the reference point where potential energy is assumed to be exactly zero ($U_\\infty = 0$).</li>
        </ul>
    `
});

// ---------------------------------------------------------
// 2. EASY QUIZ: Fundamentals
// ---------------------------------------------------------
window.LMS_PORTAL.push({
    id: 'quiz_phys_2_1_easy',
    targetUser: 'icchansh',
    subjectTitle: 'Physics',
    chapterTitle: '2. Electrostatic Potential & Capacitance',
    moduleTitle: '📝 2.1 Quiz: Fundamentals (Easy)',
    type: 'quiz',
    mode: 'learning',
    data: [
        { 
            q: "The electrostatic force between two stationary point charges is a:", 
            o: ["Non-conservative force", "Conservative force", "Frictional force", "Dissipative force"], 
            a: 1, 
            e: "Electrostatic force depends only on initial and final positions, making it conservative.", 
            n: "Just like the gravitational force, the electrostatic force is central and follows an inverse-square law. Because of this mathematical nature, the work done by it over any closed path is strictly zero. This is the defining characteristic of a conservative force." 
        },
        { 
            q: "Work done by an external force in moving a charge against the electrostatic field is stored as:", 
            o: ["Kinetic Energy", "Thermal Energy", "Electrostatic Potential Energy", "Electromagnetic Radiation"], 
            a: 2, 
            e: "The mechanical work done against the repulsive field is banked into the system as potential energy.", 
            n: "When you push two positive charges closer together, you must exert force over a distance (Work). This work does not vanish; it is seamlessly transferred into the configuration of the charges as Electrostatic Potential Energy ($U$). If you let go, this stored energy will instantly convert into Kinetic Energy as they fly apart." 
        },
        { 
            q: "By standard convention in physics, the electrostatic potential energy is taken to be zero at:", 
            o: ["The origin (0,0,0)", "The surface of the Earth", "The surface of the conductor", "Infinity"], 
            a: 3, 
            e: "Infinity is chosen as the universal reference point where $U = 0$.", 
            n: "We can only ever measure the *difference* in potential energy between two points ($\\Delta U$). To assign an absolute value to a single point, we must arbitrarily declare a 'zero' point. Physicists universally agree that at an infinite distance (where the electrostatic force drops to zero), the potential energy is also zero." 
        }
    ]
});

// ---------------------------------------------------------
// 3. MEDIUM QUIZ: Conceptual Application
// ---------------------------------------------------------
window.LMS_PORTAL.push({
    id: 'quiz_phys_2_1_med',
    targetUser: 'icchansh',
    subjectTitle: 'Physics',
    chapterTitle: '2. Electrostatic Potential & Capacitance',
    moduleTitle: '📝 2.1 Quiz: Application (Medium)',
    type: 'quiz',
    mode: 'learning',
    data: [
        { 
            q: "A test charge $q$ is moved from point A to point B along three entirely different paths in an electrostatic field. The work done along the three paths is $W_1$, $W_2$, and $W_3$. Which relation is correct?", 
            o: ["$W_1 > W_2 > W_3$", "$W_1 < W_2 < W_3$", "$W_1 = W_2 = W_3$", "Depends on the length of the paths"], 
            a: 2, 
            e: "Electrostatic force is conservative, making work done strictly path-independent.", 
            n: "Because the electrostatic field is generated by conservative forces, the actual trajectory taken through space is mathematically irrelevant. The work equation only calculates the difference in potential energy between the exact start point A and the exact end point B ($U_B - U_A$). Therefore, all three paths require identical mechanical work." 
        },
        { 
            q: "If an external force moves a positive test charge from infinity to a point P without acceleration, the work done by the EXTERNAL force is:", 
            o: ["Negative", "Equal to the kinetic energy at P", "Equal to the potential energy at P", "Zero"], 
            a: 2, 
            e: "$W_{ext} = U_P - U_\\infty$. Since $U_\\infty = 0$, $W_{ext} = U_P$.", 
            n: "The condition 'without acceleration' is crucial. It means the external force is exactly balancing the electrostatic repulsion at every microscopic step, ensuring no energy is wasted generating kinetic speed. Therefore, 100% of the external work invested is cleanly stored as the absolute Electrostatic Potential Energy at that specific coordinate P." 
        },
        { 
            q: "What is the total work done by the electrostatic field in moving a charge in a complete circular orbit around another central charge?", 
            o: ["Maximum", "Proportional to the radius", "Zero", "Depends on the magnitude of charges"], 
            a: 2, 
            e: "A circular orbit is a closed loop. Work done by a conservative force in any closed loop is exactly zero.", 
            n: "There are two ways to prove this. First, since the start and end points are the same, $\\Delta U = 0$, so $W = 0$. Second, in a circular orbit, the electrostatic force (pointing radially) is always exactly perpendicular ($90^\\circ$) to the tangential displacement vector at every millisecond. Since $\\cos(90^\\circ) = 0$, the work done is mathematically zero." 
        }
    ]
});

// ---------------------------------------------------------
// 4. HARD QUIZ: HOTS (Classic Test Mode)
// ---------------------------------------------------------
window.LMS_PORTAL.push({
    id: 'quiz_phys_2_1_hard',
    targetUser: 'icchansh',
    subjectTitle: 'Physics',
    chapterTitle: '2. Electrostatic Potential & Capacitance',
    moduleTitle: '📝 2.1 Quiz: Advanced (Hard Test)',
    type: 'quiz',
    mode: 'classic', // No immediate feedback!
    data: [
        { 
            q: "An electron is released from rest in a region of uniform electric field. As it moves, its electrostatic potential energy:", 
            o: ["Increases", "Decreases", "Remains constant", "First increases then decreases"], 
            a: 1, 
            e: "Charges naturally move to lower their potential energy. An electron accelerates opposite to the field, decreasing its $U$.", 
            n: "Any physical system left to itself will naturally seek the lowest possible energy state. When the electron is released, the electric field does positive work on it, accelerating it. According to the conservation of energy, if its Kinetic Energy is increasing, its Potential Energy MUST be decreasing. Since an electron is negative, it naturally falls 'up' the potential gradient, moving toward regions of higher potential, which paradoxically represents a lower potential energy state for a negative charge ($U = qV$, if $q$ is negative and $V$ is positive/higher, $U$ becomes more negative/lower)." 
        },
        { 
            q: "Which of the following mathematical statements correctly defines the conservative nature of the electrostatic field $\\vec{E}$?", 
            o: ["$\\vec{\\nabla} \\cdot \\vec{E} = \\rho/\\epsilon_0$", "$\\oint \\vec{E} \\cdot d\\vec{r} = 0$", "$\\int \\vec{E} \\cdot d\\vec{A} = Q/\\epsilon_0$", "$\\vec{F} = q\\vec{E}$"], 
            a: 1, 
            e: "The cyclic line integral of a conservative field is always zero.", 
            n: "The equation $\\oint \\vec{E} \\cdot d\\vec{r} = 0$ is the formal calculus definition of a conservative vector field. It states that if you take a charge and move it along any path $d\\vec{r}$ until you return to the exact starting coordinate (a closed loop, denoted by the circle on the integral sign), the total accumulated work done by the field is mathematically guaranteed to be absolute zero. Option A and C represent Gauss's Law in differential and integral forms, not conservation of energy." 
        }
    ]
});
