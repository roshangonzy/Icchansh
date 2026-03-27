const ch2_topic2_1 = [
  // ---------------- EASY LEVEL (10 Questions) ----------------
  {
    difficulty: "Easy",
    question: "What is the SI unit of electric potential?",
    options: ["Newton/Coulomb", "Volt", "Joule", "Ampere"],
    correctAnswerIndex: 1,
    logic: "Electric potential is work done per unit charge, measured in Joules per Coulomb, which is defined as a Volt.",
    note: "Electric potential represents the potential energy per unit charge at a specific point in space. By definition, it is the work done by an external force to bring a unit positive charge from infinity to that point. The mathematical expression is V = W/q. The SI unit, Joule per Coulomb, is recognized as the Volt (V)."
  },
  {
    difficulty: "Easy",
    question: "Is electric potential a scalar or a vector quantity?",
    options: ["Scalar", "Vector", "Tensor", "Dimensionless"],
    correctAnswerIndex: 0,
    logic: "Potential is based on work and charge, both of which are scalar quantities.",
    note: "Electric field is a vector because it has direction. Electric potential, however, is derived from work done, which is a dot product of two vectors (force and displacement). Dot products yield scalar results. Therefore, potential only has magnitude, which makes calculating total potential from multiple charges a simple algebraic addition."
  },
  {
    difficulty: "Easy",
    question: "What is the electric potential at an infinite distance from a point charge?",
    options: ["Infinite", "Zero", "Maximum", "Negative"],
    correctAnswerIndex: 1,
    logic: "By standard convention, the electrostatic potential approaches zero as distance approaches infinity.",
    note: "Infinity is chosen as the standard zero-reference point for electrostatic potential. The formula for potential due to a point charge is V = kQ/r. As the distance (r) becomes infinitely large, the overall fraction value approaches zero."
  },
  {
    difficulty: "Easy",
    question: "The dimensional formula for electric potential is:",
    options: ["$[M L^2 T^{-2} A^{-1}]$", "$[M L T^{-3} A^{-1}]$", "$[M L^2 T^{-3} A^{-1}]$", "$[M L^2 T^{-2} A^{-2}]$"],
    correctAnswerIndex: 2,
    logic: "Use V = W/q. Work is $[M L^2 T^{-2}]$ and charge is $[A T]$.",
    note: "The dimensions of work (energy) are $[M L^2 T^{-2}]$. The dimension of electric charge is current times time, written as $[A T]$. Dividing the dimensions of work by the dimensions of charge yields $[M L^2 T^{-3} A^{-1}]$."
  },
  {
    difficulty: "Easy",
    question: "If 10 J of work is done moving a 2 C charge from infinity to point P, what is the potential at P?",
    options: ["20 V", "5 V", "12 V", "8 V"],
    correctAnswerIndex: 1,
    logic: "Apply the formula V = W/q. 10 / 2 = 5.",
    note: "The problem provides the total work done (10 J) and the magnitude of the test charge (2 C). Substituting the given values into the formula V = W/q gives 10 / 2. This calculation gives exactly 5 V as the electric potential."
  },
  {
    difficulty: "Easy",
    question: "The relation between electric field E and potential V is given by:",
    options: ["$E = -\\frac{dV}{dr}$", "$E = \\frac{dV}{dr}$", "$V = -\\frac{dE}{dr}$", "$V = E \\cdot r^2$"],
    correctAnswerIndex: 0,
    logic: "Electric field is the negative gradient of the electric potential.",
    note: "The electric field represents the force per unit charge, while potential represents the energy per unit charge. Mathematically, the electric field points in the direction of the steepest decrease in potential, expressed as $E = -\\frac{dV}{dr}$. The negative sign indicates the field points from higher to lower potential."
  },
  {
    difficulty: "Easy",
    question: "For a positive point charge, the electric potential:",
    options: ["Is negative everywhere", "Is positive everywhere", "Alternates", "Is zero everywhere"],
    correctAnswerIndex: 1,
    logic: "V = kQ/r. Since k, Q, and r are all positive, V must be positive.",
    note: "The sign of the electric potential depends entirely on the sign of the source charge. Distance (r) and the Coulomb constant (k) are always positive. Therefore, a positive source charge (Q) will always yield a positive potential value in its surrounding space."
  },
  {
    difficulty: "Easy",
    question: "For a negative point charge, as you move closer to it, the potential:",
    options: ["Increases", "Decreases", "Remains constant", "Becomes positive"],
    correctAnswerIndex: 1,
    logic: "The potential becomes more negative as r decreases, meaning its overall algebraic value decreases.",
    note: "The formula is V = -k|Q|/r. As the distance r gets smaller, the fraction's magnitude gets larger. However, because of the negative sign, a larger magnitude means a lower algebraic value on the number line (e.g., moving from -5 V to -10 V is a decrease)."
  },
  {
    difficulty: "Easy",
    question: "Electric potential follows the principle of superposition. This means:",
    options: ["Potentials multiply together", "Potentials add vectorially", "Potentials add algebraically", "Potentials cancel out"],
    correctAnswerIndex: 2,
    logic: "Since potential is a scalar, the total potential is the simple algebraic sum of individual potentials.",
    note: "Unlike the electric field, which requires complex geometric vector addition, electric potential is a purely scalar quantity. We can find the total potential simply by adding the individual voltage values algebraically, keeping their positive and negative signs."
  },
  {
    difficulty: "Easy",
    question: "The work done in moving a charge along an equipotential surface is:",
    options: ["Positive", "Negative", "Zero", "Infinite"],
    correctAnswerIndex: 2,
    logic: "$\\Delta V = 0$ on an equipotential surface, and W = q$\\Delta V$, so W = 0.",
    note: "An equipotential surface is a 3D region where every point shares the exact same electric potential. The potential difference ($\\Delta V$) between any two points is zero. Since W = q$\\Delta V$, no work is required to slide a charge horizontally along this specific contour."
  },

  // ---------------- MEDIUM LEVEL (10 Questions) ----------------
  {
    difficulty: "Medium",
    question: "What is the electric potential at a distance of 0.1 m from a point charge of $2 \\mu\\text{C}$? (Use $k = 9 \\times 10^9 \\text{ Nm}^2/\\text{C}^2$)",
    options: ["$1.8 \\times 10^4 \\text{ V}$", "$1.8 \\times 10^5 \\text{ V}$", "$3.6 \\times 10^5 \\text{ V}$", "$9.0 \\times 10^4 \\text{ V}$"],
    correctAnswerIndex: 1,
    logic: "V = kQ/r. Convert microcoulombs to coulombs first.",
    note: "Substitute the values: $V = \\frac{9 \\times 10^9 \\times 2 \\times 10^{-6}}{0.1}$. The numerator becomes $18 \\times 10^3$. Dividing by 0.1 is equivalent to multiplying by 10, resulting in $18 \\times 10^4$, which is written as $1.8 \\times 10^5 \\text{ V}$."
  },
  {
    difficulty: "Medium",
    question: "Two equal and opposite charges are placed at a distance 2a. The potential at the exact midpoint between them is:",
    options: ["$\\frac{kQ}{a}$", "$\\frac{2kQ}{a}$", "Zero", "Infinity"],
    correctAnswerIndex: 2,
    logic: "The scalar potential from the positive charge perfectly cancels the potential from the negative charge.",
    note: "The positive charge +Q creates a potential of +kQ/a at the center. The negative charge -Q creates a potential of -kQ/a at the same point. Adding these scalar values together results in a net electric potential of exactly zero."
  },
  {
    difficulty: "Medium",
    question: "How much work is required to move an electron through a potential difference of 1 V?",
    options: ["1 J", "$1.6 \\times 10^{-19} \\text{ J}$", "$9.1 \\times 10^{-31} \\text{ J}$", "Zero"],
    correctAnswerIndex: 1,
    logic: "Work W = qV = $(1.6 \\times 10^{-19} \\text{ C})(1 \\text{ V})$.",
    note: "The moving particle is an electron, which has an elementary charge of $1.6 \\times 10^{-19} \\text{ C}$. Multiplying this by 1 V gives $1.6 \\times 10^{-19} \\text{ J}$. This specific amount of work is formally defined as one Electron-Volt (1 eV)."
  },
  {
    difficulty: "Medium",
    question: "A hollow conducting sphere of radius R has a charge Q. The potential inside the sphere at a distance r < R from the center is:",
    options: ["Zero", "$\\frac{kQ}{r}$", "$\\frac{kQ}{R}$", "$\\frac{kQ}{(R-r)}$"],
    correctAnswerIndex: 2,
    logic: "Inside a conductor, the electric field is zero, meaning potential is constant and equals the surface potential.",
    note: "Excess charge distributes itself uniformly over the outer surface of a conducting sphere. The net electric field inside is zero. A zero electric field means the potential gradient is zero, making the potential completely constant everywhere inside, equal to the surface potential of kQ/R."
  },
  {
    difficulty: "Medium",
    question: "Equipotential surfaces for a uniform electric field are:",
    options: ["Concentric spheres", "Coaxial cylinders", "Parallel planes", "Intersecting lines"],
    correctAnswerIndex: 2,
    logic: "A uniform field has parallel field lines, and equipotential surfaces must be perpendicular to field lines.",
    note: "Electric field lines must always intersect equipotential surfaces at exactly 90 degrees. A uniform electric field is represented by parallel lines. To be everywhere perpendicular to parallel lines, the equipotential regions must form a series of parallel flat planes."
  },
  {
    difficulty: "Medium",
    question: "The electric potential V at a point (x, y, z) is $V = 4x^2$. What is the electric field E at that point?",
    options: ["$-8x \\hat{i}$", "$8x \\hat{i}$", "$-4x \\hat{i}$", "$4x \\hat{i}$"],
    correctAnswerIndex: 0,
    logic: "The electric field is the negative partial derivative of potential with respect to spatial coordinates.",
    note: "Since the potential $V = 4x^2$ only depends on the x-coordinate, the y and z derivatives are zero. Taking the partial derivative of $4x^2$ with respect to x gives 8x. Applying the negative sign from the gradient formula ($E = -\\nabla V$) gives $-8x \\hat{i}$."
  },
  {
    difficulty: "Medium",
    question: "Two charges of +5 nC and -3 nC are separated by 16 cm. Where on the line joining them is the potential zero?",
    options: ["10 cm from positive charge", "8 cm from positive charge", "6 cm from positive charge", "12 cm from positive charge"],
    correctAnswerIndex: 0,
    logic: "Let distance from +5 nC be x. Set the sum of potentials to zero and solve for x.",
    note: "Setting $\\frac{k(5)}{x} + \\frac{k(-3)}{16-x} = 0$ allows the Coulomb constants to cancel. Solving the equation $5/(x) = 3/(16-x)$ gives $5(16-x) = 3x$, which simplifies to $80 - 5x = 3x$, yielding $8x = 80$. Thus, x = 10 cm from the larger positive charge."
  },
  {
    difficulty: "Medium",
    question: "A positive charge is moved from a low potential point to a high potential point. Its potential energy:",
    options: ["Increases", "Decreases", "Remains same", "Becomes zero"],
    correctAnswerIndex: 0,
    logic: "Potential energy U = qV. If q is positive and V increases, U must increase.",
    note: "The formula for electrostatic potential energy is strictly U = qV. Moving a positive charge into a region with a higher scalar potential value results in a larger overall energy product. Physically, external work must be done against the field, increasing stored energy."
  },
  {
    difficulty: "Medium",
    question: "The radius of a spherical drop of water is R and its potential is V. If 8 such drops combine to form a single drop, the potential of the new drop is:",
    options: ["V", "2V", "4V", "8V"],
    correctAnswerIndex: 2,
    logic: "Radius doubles, charge is multiplied by 8. New potential V' = k(8Q)/(2R) = 4V.",
    note: "When 8 identical drops merge, equating their volumes reveals the new radius is exactly twice the original (2R). The new charge is eight times the original (8Q). Plugging these into the surface potential formula $\\frac{kQ_{\\text{new}}}{R_{\\text{new}}}$ gives $\\frac{8}{2}$ times the old potential, or 4V."
  },
  {
    difficulty: "Medium",
    question: "The work done in moving a test charge q over a closed loop in an electrostatic field is:",
    options: ["Positive", "Negative", "Zero", "Depends on path"],
    correctAnswerIndex: 2,
    logic: "Electrostatic forces are conservative. The work done over any closed path is zero.",
    note: "A conservative force field is one where the total work done is independent of the path taken. If a charge completes a full circuit and returns to its start, the net displacement is zero, and the potential difference is zero. Therefore, total work done is zero."
  },

  // ---------------- HARD LEVEL (10 Questions) ----------------
  {
    difficulty: "Hard",
    question: "The electric potential due to an electric dipole of dipole moment p at a distance r on its axial line is:",
    options: ["$\\frac{kp}{r^2}$", "$\\frac{kp}{r^3}$", "$\\frac{kpr}{r^2-a^2}$", "Zero"],
    correctAnswerIndex: 0,
    logic: "For a short dipole ($r \\gg a$), potential $V = \\frac{k p \\cos(0)}{r^2}$.",
    note: "On the axial line, we sum the potential from the positive and negative ends. For a 'short' dipole where the distance r is vastly larger than the dipole separation 2a, applying a binomial approximation simplifies the fraction. The final potential drops off proportional to the inverse square of the distance ($1/r^2$)."
  },
  {
    difficulty: "Hard",
    question: "The electric potential due to an electric dipole at any point on its equatorial plane is:",
    options: ["$\\frac{kp}{r^2}$", "$\\frac{kp}{r^3}$", "Zero", "Infinity"],
    correctAnswerIndex: 2,
    logic: "Every point on the equatorial plane is equidistant from both the +q and -q charges.",
    note: "Because of geometric symmetry, any point on the equatorial plane sits at the exact same distance from both charges. The positive charge creates a positive potential, while the negative charge creates an equal negative potential. Adding them yields a net zero potential across the entire plane."
  },
  {
    difficulty: "Hard",
    question: "An electric dipole of moment p is placed in a uniform electric field E. The work done in rotating it from a stable equilibrium to an unstable equilibrium position is:",
    options: ["pE", "2pE", "-pE", "Zero"],
    correctAnswerIndex: 1,
    logic: "Work $W = pE(\\cos \\theta_1 - \\cos \\theta_2) = pE(\\cos 0^\\circ - \\cos 180^\\circ) = 2pE$.",
    note: "A dipole achieves stable equilibrium when aligned parallel with the field ($0^\\circ$) and unstable equilibrium when anti-parallel ($180^\\circ$). Plugging the cosine values for $0^\\circ$ (which is 1) and $180^\\circ$ (which is -1) into the rotational work formula yields $pE(1 - (-1)) = 2pE$."
  },
  {
    difficulty: "Hard",
    question: "Three charges q, -q, and q are placed at the vertices of an equilateral triangle of side L. What is the total electrostatic potential energy of the system?",
    options: ["$\\frac{kq^2}{L}$", "$-\\frac{kq^2}{L}$", "$-\\frac{2kq^2}{L}$", "Zero"],
    correctAnswerIndex: 1,
    logic: "Sum of pair energies: $U = \\frac{k}{L} [(q)(-q) + (-q)(q) + (q)(q)] = -\\frac{kq^2}{L}$.",
    note: "The total potential energy is the sum of pairwise energies. For three charges, we evaluate three distinct interacting pairs. The two negative pairs yield $-2\\frac{kq^2}{L}$, while the one positive pair yields $+1\\frac{kq^2}{L}$. Summing these algebraic terms provides a net binding energy of $-\\frac{kq^2}{L}$."
  },
  {
    difficulty: "Hard",
    question: "A point charge q is at the center of a spherical uncharged conducting shell of inner radius a and outer radius b. What is the potential of the conducting shell?",
    options: ["$\\frac{kq}{a}$", "$\\frac{kq}{b}$", "$kq \\left( \\frac{1}{a} - \\frac{1}{b} \\right)$", "Zero"],
    correctAnswerIndex: 1,
    logic: "The charge q induces -q on inner surface a, and +q on outer surface b. Internal fields cancel.",
    note: "Placing a positive charge inside induces a -q charge on the inner surface. To maintain neutrality, a +q charge distributes across the outer surface. When calculating absolute potential on the exterior shell, the internal point charge and inner induced layer cancel out, leaving only the outer surface potential: kq/b."
  },
  {
    difficulty: "Hard",
    question: "The electric potential in a region is V = 2x + 3y - z. What is the magnitude of the uniform electric field in this region?",
    options: ["$\\sqrt{14}$", "$\\sqrt{12}$", "6", "4"],
    correctAnswerIndex: 0,
    logic: "Calculate components: $E_x = -2$, $E_y = -3$, $E_z = 1$. Magnitude $|E| = \\sqrt{(-2)^2 + (-3)^2 + (1)^2}$.",
    note: "Taking the partial derivative of the potential function with respect to x, y, and z yields the vector components $E_x = -2$, $E_y = -3$, and $E_z = 1$. To find the total magnitude, square each component, sum them, and take the square root: $\\sqrt{4 + 9 + 1} = \\sqrt{14}$."
  },
  {
    difficulty: "Hard",
    question: "Two small spheres with charges $Q_1$ and $Q_2$ have radii $R_1$ and $R_2$. They are connected by a thin conducting wire. The ratio of their surface charge densities $\\sigma_1/\\sigma_2$ is:",
    options: ["$R_1/R_2$", "$R_2/R_1$", "$R_1^2/R_2^2$", "$R_2^2/R_1^2$"],
    correctAnswerIndex: 1,
    logic: "Connected spheres share potential $V_1 = V_2$. Substitute $Q = \\sigma 4\\pi R^2$ to find the ratio.",
    note: "Connecting spheres forces an equipotential state where $Q_1/R_1 = Q_2/R_2$. Surface charge density ($\\sigma$) is total charge divided by total area ($Q = \\sigma 4\\pi R^2$). Substituting this area equation into the voltage equality proves that charge density is inversely proportional to the sphere's radius."
  },
  {
    difficulty: "Hard",
    question: "A regular hexagon of side L has a charge q at five of its six vertices. The electric potential at the center of the hexagon is:",
    options: ["$\\frac{6kq}{L}$", "$\\frac{5kq}{L}$", "$\\frac{4kq}{L}$", "Zero"],
    correctAnswerIndex: 1,
    logic: "The distance from the center to any vertex in a regular hexagon equals the side length L.",
    note: "In a perfectly regular hexagon, the geometric distance from the center to any outer vertex is always equal to its outer side length (L). Because electric potential is an algebraic scalar, we simply calculate the individual potential of one charge ($kq/L$) and multiply it by the five charges present."
  },
  {
    difficulty: "Hard",
    question: "If a dielectric slab is inserted between the plates of an isolated charged capacitor, the potential difference between the plates:",
    options: ["Increases", "Decreases", "Remains same", "Becomes zero"],
    correctAnswerIndex: 1,
    logic: "For an isolated capacitor, Q is constant. Capacitance C increases by factor K. Since V = Q/C, V decreases.",
    note: "Because the capacitor is isolated, the total stored charge (Q) cannot escape and remains constant. Inserting a dielectric material universally increases the overall capacitance (C). According to V = Q/C, with a fixed numerator and an increasing denominator, the potential difference must decrease."
  },
  {
    difficulty: "Hard",
    question: "The work done to bring a charge q from infinity to the center of a uniformly charged non-conducting solid sphere of radius R and total charge Q is:",
    options: ["$\\frac{kQq}{R}$", "$\\frac{3kQq}{2R}$", "$\\frac{kQq}{2R}$", "Zero"],
    correctAnswerIndex: 1,
    logic: "Work done is W = qV_center. Potential at the center is 1.5 times the surface potential.",
    note: "Non-conducting solid insulators have a potential that continues to rise as you move inward. Calculus reveals that the potential right at the geometric center peaks at exactly 1.5 times the surface potential, or $3kQ/(2R)$. Multiplying this peak voltage by the test charge q provides the total external work required."
  }
];
