const conceptualData = {
    easy: {
        title: "Conceptual Focus: Electrochemical Cells",
        questions: [
            { 
                q: "What is the primary function of a Galvanic (Voltaic) cell?", 
                o: ["Converting electrical energy to chemical energy", "Converting spontaneous chemical energy into electrical energy", "Storing static electricity", "Heating an electrolyte solution"], 
                a: 1, 
                logic: "Galvanic cells harness the energy released during a spontaneous redox reaction to generate an electrical current.", 
                note: "A Galvanic cell, such as the classic Daniell cell, operates on the principle of spontaneous redox reactions. In these reactions, the Gibbs free energy change is negative, meaning the reaction occurs naturally and releases energy. The cell physically separates the oxidation and reduction half-reactions, forcing the transferred electrons to flow through an external wire." 
            },
            { 
                q: "In a standard Daniell cell, which metal acts as the anode?", 
                o: ["Copper", "Silver", "Zinc", "Platinum"], 
                a: 2, 
                logic: "Zinc has a higher oxidation potential than copper, meaning it loses electrons more readily and undergoes oxidation.", 
                note: "In a Daniell cell, the anode is the zinc electrode. By definition, the anode is the site where oxidation (loss of electrons) occurs. Because zinc is more reactive than copper, solid zinc atoms dissolve into the solution as $Zn^{2+}$ ions, leaving behind two electrons on the electrode." 
            },
            { 
                q: "What crucial component maintains the electrical neutrality of the half-cells in a Galvanic cell?", 
                o: ["The external wire", "The voltmeter", "The salt bridge", "The metallic electrodes"], 
                a: 2, 
                logic: "The salt bridge provides a pathway for inert ions to migrate, neutralizing the excess charge building up in the half-cells.", 
                note: "As a galvanic cell operates, oxidation at the anode floods the solution with positive ions, while reduction at the cathode depletes positive ions. The salt bridge (often an agar gel containing inert salts like KCl) supplies negative ions to the anode half-cell and positive ions to the cathode half-cell to maintain perfect electrical neutrality." 
            }
        ]
    },
    medium: {
        title: "Conceptual Focus: Electrochemical Cells",
        questions: [
            { 
                q: "In standard cell notation (e.g., $Zn | Zn^{2+} || Cu^{2+} | Cu$), what does the double vertical line ($||$) physically represent?", 
                o: ["A metallic wire connection", "The phase boundary between solid and liquid", "The salt bridge separating the two half-cells", "A semi-permeable membrane"], 
                a: 2, 
                logic: "The double line universally denotes the physical division and ionic connection provided by the salt bridge.", 
                note: "By strict IUPAC convention, the oxidation half-cell (anode) is always written on the far left, and the reduction half-cell (cathode) is on the far right. A single vertical line ($|$) indicates a physical phase boundary, while the prominent double vertical line ($||$) perfectly in the middle exclusively represents the salt bridge that connects the two distinct half-cells." 
            },
            { 
                q: "If an external opposing voltage ($E_{ext}$) is applied to a Galvanic cell and $E_{ext}$ becomes strictly greater than the cell's natural $E_{cell}$, what happens?", 
                o: ["The cell explodes.", "The cell continues operating normally but at a faster rate.", "The chemical reaction completely reverses, effectively turning it into an electrolytic cell.", "The salt bridge instantly solidifies."], 
                a: 2, 
                logic: "A larger external voltage acts as a stronger pump, forcing electrons to flow backward against their natural spontaneous direction.", 
                note: "A galvanic cell operates spontaneously, pushing electrons out of the anode. If you hook up an external power source and apply an opposing voltage that dominates the system ($E_{ext} > E_{cell}$), it forces the electrons to flow in absolute reverse. This unnatural reverse flow physically forces the non-spontaneous reverse chemical reaction to occur, actively recharging the battery as an electrolytic cell." 
            }
        ]
    },
    hard: {
        title: "Conceptual Focus: Electrochemical Cells",
        questions: [
            { 
                q: "In the rigorous thermodynamic derivation of an electrochemical cell, why does the electrical work done by the system equal exactly the *decrease* in Gibbs free energy ($-\\Delta G$)?", 
                o: ["Because energy is always lost as heat.", "Because Gibbs free energy represents the absolute maximum non-expansion (useful) work a closed system can perform.", "Because electrons have negative charge.", "Because the system volume increases rapidly."], 
                a: 1, 
                logic: "By thermodynamic definition, any spontaneous drop in a system's free energy dictates the absolute theoretical maximum of useful work it can output.", 
                note: "Advanced thermodynamics categorizes work into expansion work and non-expansion work (like pushing electrons through a wire). For any process operating at constant pressure and temperature, the change in Gibbs Free Energy ($\\Delta G$) strictly quantifies the absolute maximum amount of useful, non-expansion work the chemical system can possibly deliver. Therefore, the theoretical maximum electrical work is flawlessly given by $W_{elec} = -\\Delta G$." 
            },
            { 
                q: "If the standard reduction potential of $Ag^+/Ag$ is $+0.80\\text{V}$ and $Zn^{2+}/Zn$ is $-0.76\\text{V}$, what is the deep physical reasoning behind why Zinc MUST be the anode when they are coupled?", 
                o: ["Because Zinc is a lighter metal.", "Because a negative reduction potential strictly implies a highly positive oxidation potential, making Zinc's tendency to violently lose electrons thermodynamically dominant.", "Because Silver is more precious.", "Because Zinc naturally repels water."], 
                a: 1, 
                logic: "A lower (more negative) reduction potential means the substance prefers the reverse reaction—oxidation—making it the optimal electron source.", 
                note: "The standard electrode tables exclusively list *reduction* potentials. Silver possesses a high positive value ($+0.80\\text{V}$), meaning it strongly 'wants' to be reduced. Zinc possesses a negative reduction potential ($-0.76\\text{V}$), meaning it actively resists being reduced. However, reversing the chemical equation flips the mathematical sign, proving Zinc has a highly positive *oxidation* potential ($+0.76\\text{V}$). Coupling them forces Zinc to act as the ultimate electron source (the anode)." 
            }
        ]
    }
};

const cbseData = {
    easy: {
        title: "CBSE Focus: Electrochemical Cells",
        questions: [
            { 
                q: "What is the primary function of a standard Galvanic cell in practical applications? 📜", 
                o: ["Converting electrical energy back into stored chemical energy", "Converting the energy of a spontaneous chemical redox reaction directly into useful electrical energy", "Storing high-voltage static electricity", "Heating an industrial electrolyte solution"], 
                a: 1, 
                logic: "Galvanic cells harness the energy released during a naturally occurring, spontaneous redox reaction to generate an external electrical current.", 
                note: "In board exams, this is a highly frequent 1-mark conceptual question distinguishing cell types. A Galvanic cell operates fundamentally on the principle of spontaneous redox reactions where $\\Delta G$ is strictly negative. The physical design of the cell intentionally separates the oxidation and reduction half-reactions, forcing the transferred electrons to detour through an external wire to produce a useful electrical current." 
            },
            { 
                q: "What crucial internal component is completely necessary to maintain the electrical neutrality of the two half-cells in a Galvanic cell? 📜", 
                o: ["The external connecting wire", "The high-resistance voltmeter", "The internal salt bridge", "The pure metallic electrodes"], 
                a: 2, 
                logic: "The salt bridge explicitly provides a vital pathway for inert spectator ions to migrate, neutralizing the aggressive excess charge building up in both half-cells.", 
                note: "Board examiners frequently test the specific functions of this crucial component. Continuous oxidation at the anode violently floods that solution with excess positive ions, while continuous reduction at the cathode severely depletes positive ions. The salt bridge actively supplies negative ions to the anode half-cell and positive ions to the cathode half-cell to maintain perfect electrical harmony and prevent the reaction from halting." 
            }
        ]
    },
    medium: {
        title: "CBSE Focus: Electrochemical Cells",
        questions: [
            { 
                q: "Why is it mathematically and physically impossible to physically measure the absolute, isolated electrode potential of a single, independent half-cell? 📜", 
                o: ["Because the absolute voltage is theoretically far too high for normal laboratory voltmeters.", "Because the processes of oxidation or reduction absolutely cannot occur independently without a corresponding coupled reaction to successfully accept or provide those exact electrons.", "Because the solution will instantly and violently boil.", "Because the dissolved ions physically move far too slowly to actively register on the device."], 
                a: 1, 
                logic: "Redox reactions are inherently deeply coupled; an electron absolutely cannot simply be 'lost' into the void unless there is a specific, highly receptive physical destination for it to go.", 
                note: "The core concept of an isolated 'absolute' potential is a severe physical impossibility that frequently appears as a 2-mark reasoning question. Oxidation (the sheer physical loss of electrons) absolutely cannot happen in a complete void; it strictly and physically requires a paired, active reduction reaction to actively accept those specific, abandoned electrons. No complete circuit exists for a single isolated cell." 
            },
            { 
                q: "In the highly standardized electrochemical series, highly reactive elements with massively positive standard reduction potentials (like deadly Fluorine gas) aggressively act as: 📜", 
                o: ["Extremely powerful and dangerous reducing agents", "Extremely powerful and dominant oxidizing agents", "Completely and utterly inert substances", "Highly excellent electrical insulators"], 
                a: 1, 
                logic: "A massive high positive reduction potential explicitly means the substance desperately and aggressively 'wants' to be reduced, meaning it fiercely forces aggressive oxidation upon others.", 
                note: "The standard electrochemical series rigorously ranks chemical species exclusively by their Standard Reduction Potential ($E^\\circ$). Elements situated at the very extreme top of this table possess a massive tendency to forcefully rip electrons violently away from other innocent substances in order to greedily reduce themselves. Because they forcefully and aggressively cause the severe oxidation of other chemical species, they are strictly classified as incredibly powerful, dominant oxidizing agents." 
            }
        ]
    },
    hard: {
        title: "CBSE Focus: Electrochemical Cells",
        questions: [
            { 
                q: "Consider an extremely complex active cell where the overall heavily balanced chemical reaction involves the massive transfer of exactly 6 full moles of electrons ($n=6$). How exactly does this significantly large integer perfectly affect the intensive property $E^\\circ_{cell}$ entirely compared to $\\Delta G^\\circ$? 📜", 
                o: ["It massively and drastically exponentially increases the final output cell voltage.", "It incredibly deeply and fundamentally decreases the cell voltage.", "It flawlessly leaves the intensive voltage absolutely unaffected, but significantly and drastically heavily multiplies the extensive total massive free energy successfully extracted.", "It violently neutralizes the entire operating cell."], 
                a: 2, 
                logic: "Intensive voltage is strictly energy per unit of individual charge, fundamentally remaining geometrically constant. Extensive total energy heavily scales directly with the sheer quantity of physical charge flowing.", 
                note: "This sophisticated question rigorously tests the deepest boundary strictly between intensive and strictly extensive foundational physical properties. The measured standard cell potential ($E^\\circ_{cell}$) is fiercely and fundamentally an intensive property, representing the energy 'push' exclusively felt by each individual electron. Conversely, Gibbs Free Energy ($\\Delta G^\\circ$) is an extensive property; explicitly multiplying the reaction by a larger $n$ perfectly multiplies the total deliverable bulk energy, but leaves the per-electron voltage untouched." 
            },
            { 
                q: "Why exactly does the incredible physical buildup of a highly massive, intense electrical double layer directly at the rigid metal-solution interface incredibly heavily dictate the final eventual true equilibrium absolute electrode potential?", 
                o: ["It violently causes the entire bulk solution to violently rapidly boil.", "The extreme spatial separation of dense massive charges fiercely creates an intense microscopic internal electric field that rapidly aggressively opposes and eventually totally violently halts all further ion migration.", "It violently physically and fiercely crushes the solid metallic electrode.", "It totally and magically converts the solid metal into a violent gas."], 
                a: 1, 
                logic: "As solid metal ions violently dissolve, they abandon highly negative mass electrons behind, fiercely creating an immense electrostatic gradient that physically and violently pulls back completely against further massive dissolution until rigid equilibrium is incredibly reached.", 
                note: "The extremely deep microscopic massive origin of standard half-cell potential is deeply rooted in highly advanced physical electrostatics. When a solid metal rod dissolves, it creates a severely dense charge separation called an electrical double layer. This double layer generates an incredibly intense, microscopic electric field pointing toward the metal, fiercely pulling positively charged ions back. When this extreme electrostatic backward pull perfectly matches the chemical forward push to dissolve, the dynamic system hits perfect equilibrium." 
            }
        ]
    }
};

// ============================================================================
// CRITICAL REGISTRATION CALL
// This explicitly pushes this entire file's data into the Master Engine!
// ============================================================================
window.registerTopic('ch1', 'Topic 2.1: Electrochemical Cells', conceptualData, cbseData);
