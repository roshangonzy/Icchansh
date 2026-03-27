// File: modules/sample_quiz.js

// This pushes a new module into the Master App's memory
window.LMS_PORTAL.push({
    id: 'phys_ch2_easy',        // A unique ID for local storage tracking
    targetUser: 'icchansh',     // Set to 'all' if everyone can see it
    subjectTitle: 'Physics',
    chapterTitle: '2. Electrostatic Potential & Capacitance',
    moduleTitle: 'Fundamentals (Easy Level)',
    type: 'quiz',
    mode: 'learning',           // 'learning' or 'classic'
    data: [
        { 
            q: "What is the SI unit of electric charge?", 
            o: ["Volt", "Ampere", "Coulomb", "Ohm"], 
            a: 2, 
            e: "Coulomb ($C$) is the standard SI unit of charge.", 
            n: "The Coulomb is officially defined via the Ampere: one Coulomb is the exact quantity of electric charge transported by a steady current of one Ampere flowing for exactly one second." 
        },
        { 
            q: "The electric potential at any point on the equatorial plane of an electric dipole is:", 
            o: ["Maximum", "Minimum", "Zero", "Infinite"], 
            a: 2, 
            e: "Any point on the equatorial plane is equidistant from the $+q$ and $-q$ charges, so their potentials perfectly cancel out.", 
            n: "Because potential is a scalar quantity (not a vector like the electric field), you simply add the raw voltage values together. Since the distance to the positive pole and the negative pole is identical anywhere on the equator, $+V$ and $-V$ perfectly annihilate each other." 
        },
        { 
            q: "The formula for Coulomb's force between two point charges is:", 
            o: ["$F = k(q_1+q_2)/r$", "$F = k(q_1 q_2)/r^2$", "$F = k(q_1 q_2)/r$", "$F = k(q_1-q_2)/r^2$"], 
            a: 1, 
            e: "It follows an inverse-square law, just like gravity.", 
            n: "Coulomb's Law proves that the crushing force between two resting charges is directly proportional to the multiplication of their raw charge magnitudes. More importantly, the force drops off precipitously with distance, following the brutal inverse-square law ($r^2$)." 
        }
    ]
});

// You can push a second module in the same file!
window.LMS_PORTAL.push({
    id: 'phys_ch2_test',        
    targetUser: 'icchansh',     
    subjectTitle: 'Physics',
    chapterTitle: '2. Electrostatic Potential & Capacitance',
    moduleTitle: 'Chapter Test (Classic Mode)',
    type: 'quiz',
    mode: 'classic',           
    data: [
        { 
            q: "What is the electric field inside a perfectly conducting hollow sphere?", 
            o: ["Maximum", "Zero", "Depends on radius", "Depends on charge"], 
            a: 1, 
            e: "In electrostatics, the electric field inside any conductor is always zero.", 
            n: "Conductors are defined by their ocean of free, highly mobile electrons. If you dump a massive charge onto a hollow metal sphere, those electrons instantly panic due to their intense mutual repulsion and flee to the outer surface." 
        }
    ]
});
