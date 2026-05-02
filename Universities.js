// universities.js
// University aggregate formula data
// Replace demo entries with real research data before launch

const universities = [
    {
        id: "International Islamic University",
        name: "International Islamic University (IIUI)",
        sourceUrl: "https://www.iiu.edu.pk/admission/",
        programs: [
            {
                label: "BA/LLB (Hons) Shariah & Law, LLB",
                sources: [
                    { label: "SSC", weightage: 15 },
                    { label: "HSSC", weightage: 25 },
                    { label: "Test", weightage: 60 }
                ]
            },
            {
                label: "Undergraduate Programs (PQM basis, no Admission Test)",
                sources: [
                    { label: "SSC", weightage: 40 },
                    { label: "HSSC", weightage: 60 }
                ]
            }
        ]
    },
    // {
    //     id: "university-2",
    //     name: "University 2",
    //     // Single program — program dropdown will be skipped automatically
    //     programs: [
    //         {
    //             label: "General",
    //             sources: [
    //                 { label: "Matric", weightage: 10 },
    //                 { label: "FSc", weightage: 40 },
    //                 // allowAdditional: true — bonus marks field appears for this source only
    //                 { label: "Entry Test", weightage: 50, allowAdditional: true }
    //             ]
    //         }
    //     ]
    // },
    {
        id: "National University of Science and Technology",
        name: "National University of Science and Technology (NUST)",
        sourceUrl: "https://nust.edu.pk/admissions/undergraduates/merit-criteria-for-admission-on-net-basis/", // NUST
        programs: [
            {
                label: "NET Basis",
                sources: [
                    { label: "SSC / O-Level / Equivalent", weightage: 10 },
                    { label: "HSSC (Part-1) / HSSC / A-Level / Equivalent / DAE", weightage: 15 },
                    { label: "NUST Entrance Test", weightage: 75 }
                ]
            },
            {
                label: "ACT / SAT Basis",
                sources: [
                    { label: "SSC / O-Level / Equivalent", weightage: 10 },
                    { label: "HSSC (Part-1) / HSSC / A-Level / Equivalent / DAE", weightage: 15 },
                    { label: "ACT / SAT Score", weightage: 75 }
                ]
            },
        ]
    },
    {
        id: "University of Engineering and Technology Lahore (UET Lahore)",
        name: "University of Engineering and Technology Lahore (UET Lahore)",
        sourceUrl: "https://admission.uet.edu.pk/Downloads/NoticesNews/UG_WHOLE_Spring_26_08_12_2025.pdf", // UET Lahore
        programs: [
            {
                label: "Intermediate Stream",
                sources: [
                    { label: "Matric Marks", weightage: 17 },
                    { label: "First Year Intermediate Marks", weightage: 50 },
                    { label: "Entrance Test Marks", weightage: 33 }
                ]
            },
            {
                label: "Foreign Qualification",
                sources: [
                    { label: "Marks earned in 11th Class (O-Level or equivalent)", weightage: 67 },
                    { label: "Entrance Test Marks", weightage: 33 }
                ]
            },
            {
                label: "Diploma Holders",
                sources: [
                    { label: "Sum of First and Second Years Marks", weightage: 67 },
                    { label: "Entrance Test Marks", weightage: 33 }
                ]
            },
            {
                label: "B.Sc. Engineering Technology or equivalent degree",
                sources: [
                    { label: "7 semesters CGPA if degree is not yet complete", weightage: 67 },
                    { label: "Entrance Test Marks", weightage: 33 }
                ]
            },
            {
                label: "Non-ECAT Programs",
                sources: [
                    { label: "Matric / Equivalent Marks ", weightage: 25 },
                    { label: "First-Year Intermediate / Equivalent ", weightage: 75 }
                ]
            },
        ]
    },
    {
        id: "COMSATS University Islamabad",
        name: "COMSATS University Islamabad",
        sourceUrl: "https://ww2.comsats.edu.pk/ro/Prospectus/UG_Prospectus/Undergraduate%20Prospectus-2025-26.pdf", // COMSATS
        programs: [
            {
                label: "Engineering and Non-Engineering Programs",
                sources: [
                    { label: "Matriculation (or Equivalent)", weightage: 10 },
                    { label: "Intermediate (or Equivalent)", weightage: 40 },
                    { label: "NTS Test", weightage: 50 }
                ]
            },
            {
                label: "B.Design and B.Fine Arts",
                sources: [
                    { label: "Matriculation (or Equivalent)", weightage: 3 },
                    { label: "Intermediate (or Equivalent)", weightage: 12 },
                    { label: "NTS Test", weightage: 15 },
                    { label: "Creative Aptitude Test (CAT)", weightage: 70 }
                ]
            },
            {
                label: "B.Arch",
                sources: [
                    { label: "Matric / O-Levels", weightage: 5 },
                    { label: "Intermediate (Pre-Eng) / A-Levels / Equivalent with Mathematics", weightage: 10 },
                    { label: "NTS Test", weightage: 10 },
                    { label: "Creative Aptitude Test (CAT)", weightage: 75 }
                ]
            },
            {
                label: "Bachelor of Interior Design",
                sources: [
                    { label: "Matriculation (or Equivalent)", weightage: 3 },
                    { label: "Intermediate (or Equivalent)", weightage: 12 },
                    { label: "NTS Test", weightage: 15 },
                    { label: "Creative Aptitude Test (CAT)", weightage: 70 }
                ]
            },

        ]
    },
    {
        id: "National University of Computer and Emerging Sciences (FAST)",
        name: "National University of Computer and Emerging Sciences (FAST)",
        sourceUrl: "https://www.nu.edu.pk/Admissions/ProspectusUpload/Admission%20Information.pdf", // FAST-NUCES
        programs: [
            {
                label: "Computing / Business Programs",
                sources: [
                    { label: "Matriculation (SSC) / Equivalent", weightage: 10 },
                    { label: "FSc (HSSC) / Equivalent ", weightage: 40 },
                    { label: "NU Test / NTS Exam", weightage: 50 }
                ]
            },
            {
                label: "Engineering Programs",
                sources: [
                    { label: "Matriculation (SSC) / Equivalent", weightage: 17 },
                    { label: "FSc (HSSC) / Equivalent ", weightage: 50 },
                    { label: "NU Test / NTS Exam", weightage: 33 }
                ]
            },
        ]
    },
    {
        id: "Govenment College University Lahore (GCU Lahore)",
        name: "Govenment College University Lahore (GCU Lahore)",
        sourceUrl: "https://gcu.edu.pk/admissions.php?pg=bs-program", // GCU Lahore
        programs: [
            {
                label: "BS Programs",
                sources: [
                    { label: "Matriculation / O-Level Marks", weightage: 10 },
                    { label: "Intermediate / A-Level Marks", weightage: 40 },
                    { label: "GCU Entrance Test / (ECAT for EE)", weightage: 30 },
                    { label: "Interview", weightage: 20 }
                ]
            }
        ]
    },
    {
        id: "National Univeristy of Technology (NUTECH)",
        name: "National Univeristy of Technology (NUTECH)",
        sourceUrl: "https://nutech.edu.pk/admission/undergraduate/", // NUTECH
        programs: [
            {
                label: "BS Programs",
                sources: [
                    { label: "SSC / O-Level / Equivalent", weightage: 10 },
                    { label: "HSSC / A-Level / DAE(complete) Equivalent", weightage: 20 },
                    { label: "NUTECH Entry Test / SAT Subject Score for International Students", weightage: 70 }
                ]
            }
        ]
    },
    {
        id: "Air University Islamabad",
        name: "Air University Islamabad",
        sourceUrl: "https://kc.au.edu.pk/Pages/Admission/prepare_adm_test.aspx", // Air University
        programs: [
            {
                label: "Enginnering Programs",
                sources: [
                    { label: "SSC / Equivalent", weightage: 10 },
                    { label: "HSSC / Equivalent", weightage: 50 },
                    { label: "Entrance Test", weightage: 40 }
                ]
            },
            {
                label: "Non-Enginnering Programs",
                sources: [
                    { label: "SSC / Equivalent", weightage: 15 },
                    { label: "HSSC / Equivalent", weightage: 35 },
                    { label: "Entrance Test", weightage: 50 }
                ]
            }
        ]
    },
    {
        id: "University of Management and Technology (UMT)",
        name: "University of Management and Technology (UMT)",
        sourceUrl: "https://admissions.umt.edu.pk/Admissions-Schedule.aspx", // UMT
        programs: [
            {
                label: "Enginnering Programs",
                sources: [
                    { label: "Matric", weightage: 17 },
                    { label: "Intermediate", weightage: 50 },
                    { label: "Entrance Test", weightage: 33 }
                ]
            },
            {
                label: "Non-Enginnering Programs",
                sources: [
                    { label: "Matric", weightage: 20 },
                    { label: "Intermediate", weightage: 50 },
                    { label: "Entrance Test", weightage: 30 }
                ]
            }
        ]
    },
    {
        id: "NED University of Engineering and Technology",
        name: "NED University of Engineering and Technology",
        sourceUrl: "https://www.neduet.edu.pk/sites/default/files/Admissions-2023/FAQ.pdf", // NED
        programs: [
            {
                label: "BS Programs",
                sources: [
                    { label: "HSC Part I/ O-level Marks/ Equivalent Examinations", weightage: 50 },
                    { label: "NED Entry Test Marks", weightage: 50 }
                ]
            }
        ]
    },
   {
        id: "Mehran University of Engineering and Technology (MUET)",
        name: "Mehran University of Engineering and Technology (MUET)",
        sourceUrl: "https://admissions.muet.edu.pk/admission-policy/#:~:text=The%20CPN%20of%20the%20candidates,after%20exercising%20the%20above%20action", // MUET
        programs: [
            {
                label: "BS Programs",
                sources: [
                    { label: "SSC / Matriculation", weightage: 10 },
                    { label: "HSC Part I/ DAE / Equivalent Examinations", weightage: 30 },
                    { label: "Pre Admission Test Marks", weightage: 60 }
                ]
            }
        ]
    },
    {
        id: "Quaid-i-Azam University (QAU)",
        name: "Quaid-i-Azam University (QAU)",
        sourceUrl: "https://qau.edu.pk/merit-calculator-undergraduate/", // QAU
        programs: [
            {
                label: "LLB Program",
                sources: [
                    { label: "Matric / Equivalent", weightage: 20 },
                    { label: "HSSC (part-I)/ Equivalent", weightage: 50 },
                    { label: "LAT TEST", weightage: 30 }
                ]
            },
            {
                label: "Non-Enginnering Programs",
                sources: [
                    { label: "Matric / Equivalent", weightage: 30 },
                    { label: "HSSC (part-I)/ Equivalent", weightage: 70 }
                ]
            }
        ]
    },
    {
        id: "Pakistan Institute of Engineering & Applied Sciences (PIEAS)",
        name: "Pakistan Institute of Engineering & Applied Sciences (PIEAS)",
        sourceUrl: "http://iwnmc23.pieas.edu.pk/Admissions/Contents/Information%20leaflet%20BS-Programs-2025.pdf", // PIEAS
        programs: [
            {
                label: "SSC / HSSC Basis",
                sources: [
                    { label: "SSC", weightage: 15 },
                    { label: "HSSC (Part-I)", weightage: 25 },
                    { label: "Pieas Entry Test", weightage: 60 }
                ]
            },
        ]
    },
    {
        id: "Ghulam Ishaq Khan Institute of Engineering Sciences and Technology (GIKI)",
        name: "Ghulam Ishaq Khan Institute of Engineering Sciences and Technology (GIKI)",
        sourceUrl: "https://giki.edu.pk/admissions/admissions-undergraduates/eligibility-criteria/#:~:text=Criteria%20and%20Weightage%3A&text=Score%20in%20Admission%20Test,85%25&text=SSC%20%2F%20Equivalent,15%25&text=O%2Dlevel%20(for%20Those%20with%20A%2Dlevel,15%25&text=Last%20completed%20qualification%20for%20High,diploma%2C%20IB%20diploma%20or%20B.Sc.", // GIKI
        programs: [
            {
                label: "Undergraduate Programs",
                sources: [
                    { label: "SSC / O-Level / DAE / Equivalent", weightage: 15 },
                    { label: "Admission Test", weightage: 85 }
                ]
            },
        ]
    },
    {
        id: "Abdul Wali Khan University Mardan (AWKUM)",
        name: "Abdul Wali Khan University Mardan (AWKUM)",
        sourceUrl: "https://www.awkum.edu.pk/Downloads/Academics/UnderGrade-Semester-Rules.pdf", // AWKUM
        programs: [
            {
                label: "Undergraduate Programs",
                sources: [
                    { label: "SSC Marks", weightage: 30 },
                    { label: "HSSC Marks", weightage: 70 }
                ]
            },
        ]
    },
];