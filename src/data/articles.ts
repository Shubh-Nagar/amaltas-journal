import type { Article } from '../types';

export const articles: Article[] = [
  // ── Vol 1, Issue 1 — July 2026 ─────────────────
  {
    id: 'ijrhm-2026-v1i1-001',
    doi: '10.58723/ijrhm.2026.1.1.001',
    title: 'Clinico-Investigative Profile and Outcomes of Neonatal Meningitis: A Prospective Observational Study from a Tertiary Care Hospital',
    shortTitle: 'Clinico-Investigative Profile of Neonatal Meningitis',
    authors: [
      { id: 'a1', name: 'Ruqayya Burhani', affiliation: 'Resident Medical Officer, Dept. of Paediatrics, Amaltas Institute of Medical Science, Dewas', country: 'India', email: 'ruqayyaburhani63@gmail.com', isCorresponding: true },
      { id: 'a2', name: 'Neha Kakani', affiliation: 'Professor and Head, Dept. of Paediatrics, Amaltas Institute of Medical Science, Dewas', country: 'India' },
      { id: 'a3', name: 'Shehbaz Khan', affiliation: 'Professor, Dept. of Paediatrics, Amaltas Institute of Medical Science, Dewas', country: 'India' },
      { id: 'a4', name: 'Arpita Shrivastava', affiliation: 'Resident Medical Officer, Dept. of Paediatrics, Amaltas Institute of Medical Science, Dewas', country: 'India' },
    ],
    abstract: 'Background: Neonatal meningitis is a serious infection associated with substantial morbidity and mortality. Indian data describing its clinical profile, laboratory characteristics, microbiology, and outcomes remain limited. This study aimed to evaluate the clinico-investigative profile and hospital outcomes of neonatal meningitis in a tertiary-care neonatal intensive care unit. Methods: A prospective observational study was conducted over 18 months in a tertiary-care NICU. Neonates aged 28 days or less with clinically suspected meningitis and compatible CSF findings were enrolled (N = 120). Meningitis was defined by a positive CSF culture and/or abnormal CSF cytochemistry. Results: The mean age at presentation was 12.28 ± 3.35 days; 84 neonates (70.0%) presented after the first week of life. Males constituted 57.5% of the cohort. The most frequent presenting symptoms were lethargy (30.8%), poor feeding (30.0%), seizures (22.5%), and fever (20.0%). CRP was positive in 80.0% of neonates. Blood and CSF cultures were positive in 21 cases (17.5%). Mean CSF cell count was 2890 ± 4000 cells/mm³, mean CSF protein was 202 ± 84 mg/dL, and mean CSF glucose was 24.6 ± 15 mg/dL. The organisms isolated were Klebsiella pneumoniae (6), Staphylococcus aureus (6), Pseudomonas spp. (3), Acinetobacter spp. (3), and Streptococcus pneumoniae (3). Overall mortality was 35.0% (42/120). Preterm infants showed a trend toward higher mortality; however, no independent predictor of death was identified on multivariate analysis. Conclusion: Neonatal meningitis in this tertiary-care setting was characterized by nonspecific clinical presentation, marked CSF abnormalities, predominance of Gram-negative pathogens, and high case-fatality. Early recognition, timely lumbar puncture, appropriate empirical antibiotics, infection-control measures, and intensive supportive care are essential to improve outcomes.',
    structuredAbstract: [
      { label: 'Background', text: 'Neonatal meningitis is a serious infection associated with substantial morbidity and mortality. Indian data describing its clinical profile, laboratory characteristics, microbiology, and outcomes remain limited. This study aimed to evaluate the clinico-investigative profile and hospital outcomes of neonatal meningitis in a tertiary-care neonatal intensive care unit.' },
      { label: 'Objectives', text: 'To analyze the demographic characteristics, clinical presentation, laboratory and cerebrospinal fluid (CSF) findings, microbiological profile, treatment, and outcomes of neonates with meningitis, and to compare the findings with recent literature.' },
      { label: 'Methods', text: 'A prospective observational study was conducted over 18 months in a tertiary-care NICU. Neonates aged 28 days or less with clinically suspected meningitis and compatible CSF findings were enrolled (N = 120). Demographic details, perinatal history, presenting features, complete details, and outcomes were recorded. Meningitis was defined by a positive CSF culture and/or abnormal CSF cytochemistry. Empirical antimicrobial therapy was initiated according to institutional protocol and guideline-based practice. Categorical variables were compared using the Chi-square or Fisher exact test, and a p-value <0.05 was considered statistically significant.' },
      { label: 'Results', text: 'The mean age at presentation was 12.28 ± 3.35 days; 84 neonates (70.0%) presented after the first week of life. Males constituted 57.5% of the cohort. Most infants were term (72.5%), and 62.5% had a birth weight below 2.5 kg. The most frequent presenting symptoms were lethargy (30.8%), poor feeding (30.0%), seizures (22.5%), and fever (20.0%). Bulging anterior fontanelle was present in 17.5% of cases. CRP was positive in 80.0% of neonates. Blood and CSF cultures were positive in 21 cases (17.5%). Mean CSF cell count was 2890 ± 4000 cells/mm³, mean CSF protein was 202 ± 84 mg/dL, and mean CSF glucose was 24.6 ± 15 mg/dL. The organisms isolated were Klebsiella pneumoniae (6), Staphylococcus aureus (6), Pseudomonas spp. (3), Acinetobacter spp. (3), and Streptococcus pneumoniae (3). Overall mortality was 35.0% (42/120). Preterm infants showed a trend toward higher mortality; however, no independent predictor of death was identified on multivariate analysis.' },
      { label: 'Conclusion', text: 'Neonatal meningitis in this tertiary-care setting was characterized by nonspecific clinical presentation, marked CSF abnormalities, predominance of Gram-negative pathogens, and high case-fatality. Early recognition, timely lumbar puncture, appropriate empirical antibiotics, infection-control measures, and intensive supportive care are essential to improve outcomes.' },
    ],
    sections: [
      {
        heading: 'Introduction',
        paragraphs: [
          'Neonatal meningitis continues to pose as a life-threatening infection during the first month of life. Despite the advancment in neonatal care, affected infants continue to experience considerable mortality and long-term neurological sequelae. The reported global incidence is approximately 0.3-1.5 per 1000 live births, however those figures are much higher in developing countries, where neonatal sepsis and healthcare-associated infections are more common [1,2].',
          'The clinical manifestation in neonates is often subtle and nonspecific. Poor feeding, lethargy, temperature instability, apnea, seizures, and irritability may be the only presenting features, whereas classic meningeal signs are uncommon in neonates, which makes a lumbar puncture advisable in case of suspected sepsis if clinically feasible [1,7].',
          'The microbiological profile varies according to age at onset, place of birth, antibiotic exposure, and local NICU ecology. In early-onset disease in Western settings Group B Streptococcus and Escherichia coli are commonly reported, whereas Gram-negative enteric bacilli, Klebsiella pneumoniae, Pseudomonas spp., Acinetobacter spp., and Staphylococci are frequently encountered in late-onset or healthcare-associated infections in resource-limited settings [1,3,5,8].',
          'As the microbial epidemiology changes along with resistance patterns, center-specific data are crucial for guiding empirical therapy and infection control strategies. This study presents the clinico-investigative profile and outcomes of 120 neonates with meningitis admitted to a tertiary-care NICU in central India, and compares the findings with contemporary Indian and international literature.',
        ],
      },
      {
        heading: 'Objectives',
        paragraphs: [
          'The objectives of this study were to describe the demographic and clinical characteristics of neonatal meningitis in our center; analyze CSF, laboratory, and microbiological findings; report treatment and hospital outcomes; and explore factors associated with mortality.',
        ],
      },
      {
        heading: 'Materials and Methods',
        paragraphs: [
          'Study design and setting: This prospective observational study was conducted in the NICU of a tertiary-care hospital over a period of 18 months. The study protocol was approved by the Institutional Ethics Committee, and written informed consent was obtained from the parents or legal guardians of all enrolled neonates.',
          'Eligibility criteria: All neonates aged 28 days or less admitted with clinical suspicion of meningitis were eligible. Suspected meningitis was defined as clinical features of sepsis with abnormal CSF findings. Neonates older than 28 days, those with congenital infections such as TORCH infection, central nervous system anomalies, signs of sepsis with CRP <5 mg/L, or parental refusal of consent were excluded.',
          'Sample size: Target sample size was calculated to be 120 according to the number of neonates admitted in NICU, probability of meningitis in septic neonates and feasibility within the time frame of the study. All 120 enrolled neonates fulfilled inclusion criteria.',
          'Data collection: Maternal history, antenatal risks, perinatal history, delivery history, and clinical findings in the neonate were all collected on the standard data sheet. A thorough physical examination was performed on each patient on admission.',
          'Investigations: Blood samples were collected aseptically for complete blood count, CRP, and blood culture. Lumbar puncture was performed as early as clinically feasible unless there was a contraindication. CSF was analyzed for cell count, protein, glucose, Gram stain, and culture for aerobic organisms. CSF pleocytosis was interpreted using age-appropriate reference range. CSF glucose level <40 mg/dL or a CSF-to-serum glucose ratio <0.4 were considered low. Cultures were done by standard microbiological techniques in the hospital laboratory.',
          'Treatment: Empirical intravenous antibiotics were administered at the earliest for all suspected cases, either ampicillin or penicillin with gentamicin, or a third-generation cephalosporin based on institutional protocols and guideline-based recommendations [8]. Antibiotics were modified according to culture sensitivity reports and clinical response. Supportive care including fluids, ventilation, vasopressors, and anticonvulsants were provided as required.',
          'Definitions: Early-onset neonatal sepsis (EONS) was defined as sepsis that onset within 72 hours of life, while late-onset neonatal sepsis (LONS) as onset after 72 hours. Hospital outcome was classified into those who survived and were discharged from hospital or those who died.',
          'Statistical analysis: Data were recorded in MS Excel and analyzed with SPSS version 21. Categorical variables are shown as frequencies and percentages, while continuous variables as mean ± standard deviation. Survivors and non-survivors were compared using the Chi-square test or Fisher exact test for categorical variables and the t-test for continuous variables. Multivariate logistic regression was planned to identify independent predictors of mortality. A p-value <0.05 was considered statistically significant, and 95% confidence intervals were reported where applicable.',
        ],
      },
      {
        heading: 'Results',
        paragraphs: [
          'Baseline characteristics: Among 120 neonates, 36 (30.0%) were aged 0-7 days and 84 (70.0%) were aged 8-28 days at presentation. The mean age was 12.28 ± 3.35 days. There were 69 males (57.5%) and 51 females (42.5%). Most infants were term (87, 72.5%), while 33 (27.5%) were preterm. Low birth weight (<2.5 kg) was present in 75 neonates (62.5%). Delivery was by lower-segment cesarean section in 63 neonates (52.5%) and by vaginal delivery in 57 (47.5%). Eighty-one infants (67.5%) were inborn, while 39 (32.5%) were outborn referrals.',
          'Clinical presentation: The common presenting features were lethargy (37, 30.8%), poor feeding (36, 30.0%), seizures (27, 22.5%), and fever (24, 20.0%). Jaundice, irritability, and weak cry occurred in approximately 5-9% of cases. On examination, bulging anterior fontanelle was observed in 21 neonates (17.5%) and opisthotonus in 18 (15.0%). Other findings included apnea or pallor (approximately 11% each), hypoglycemia (8.3%), bradycardia (6.7%), and sclerema (4.2%).',
          'Laboratory findings: CRP was positive (>5 mg/L) in 96 neonates (80.0%) and negative in 24 (20.0%). Blood cultures yielded a pathogen in 21 cases (17.5%), while 99 cultures were sterile. CSF cultures were also positive in 21 of 120 cases (17.5%). The culture-positive blood and CSF cases were identical, indicating concordant microbiological identification in these infants.',
          'CSF analysis showed marked pleocytosis, with a mean leukocyte count of 2890 ± 4000 cells/mm³ (range: 145-16,400), predominantly neutrophilic. Mean CSF protein concentration was 202 ± 84 mg/dL (range: 62-450), and mean CSF glucose concentration was 24.6 ± 15 mg/dL (range: 6-52). The findings were suggestive of bacterial meningitis.',
          'Pathogen distribution: Among the 21 culture-positive cases, the isolates were Klebsiella pneumoniae (6 cases; 3 EONS and 3 LONS), Pseudomonas spp. (3 cases; all EONS), Acinetobacter spp. (3 cases; all EONS), Staphylococcus aureus (6 cases; all LONS), and Streptococcus pneumoniae (3 cases; all LONS). No case of Group B Streptococcus or Listeria was identified.',
          'Treatment and outcomes: All infants received empirical intravenous antibiotics, which were subsequently modified according to culture sensitivity and clinical response when applicable. Supportive care included intravenous fluids, ventilatory support, vasopressors, and anticonvulsants as clinically indicated. Dexamethasone was not used routinely.',
          'Seventy-eight neonates (65.0%) survived to discharge, whereas 42 (35.0%) died despite treatment. Most survivors had no documented acute neurological deficit at discharge; however, long-term neurological sequelae were not systematically assessed. Neuroimaging was not available for all patients and was performed mainly in clinically unstable infants when urgently indicated.',
          'Among culture-positive cases, case fatality was higher in Gram-negative infections. Pseudomonas and Klebsiella infections were associated with approximately 50% mortality. Multivariate logistic regression including gestation, birth weight, culture positivity, and place of birth did not identify any statistically significant independent predictor of death, likely because of limited sample size. Preterm infants showed a trend toward higher mortality compared with term infants (odds ratio approximately 2.2; 95% CI 0.97-5.03; p approximately 0.06). Sex, mode of delivery, and CRP positivity were not significantly associated with mortality.',
        ],
        tables: [
          {
            caption: 'Table 1. Cerebrospinal fluid parameters in neonates with meningitis',
            headers: ['Parameter', 'Mean ± SD', 'Range'],
            rows: [
              ['Protein (mg/dL)', '202 ± 84', '62-450'],
              ['Cell count (cells/mm³)', '2890 ± 4000', '145-16,400'],
              ['Glucose (mg/dL)', '24.6 ± 15', '6-52'],
            ],
          },
          {
            caption: 'Table 2. Bacterial isolates in early- and late-onset neonatal sepsis',
            headers: ['Organism', 'EONS', 'LONS'],
            rows: [
              ['Klebsiella pneumoniae', '3', '3'],
              ['Pseudomonas spp.', '3', '0'],
              ['Acinetobacter spp.', '3', '0'],
              ['Staphylococcus aureus', '0', '6'],
              ['Streptococcus pneumoniae', '0', '3'],
              ['Total', '9', '12'],
            ],
          },
        ],
      },
      {
        heading: 'Discussion',
        paragraphs: [
          'This prospective study highlights the nonspecific presentation, significant CSF abnormalities, Gram-negative predominance, and high mortality associated with neonatal meningitis in a tertiary-care NICU. Most neonates presented with lethargy, feeding difficulty, seizures, or fever, while classical signs such as bulging anterior fontanelle were uncommon. These findings reinforce the need for a high index of suspicion and early CSF evaluation in septic neonates whenever clinically feasible [1,7].',
          'The CSF profile in our cohort was consistent with bacterial meningitis. The very high mean CSF protein, marked pleocytosis, and low CSF glucose indicate substantial meningeal inflammation and blood-brain barrier disruption. Similar CSF patterns have been reported in other Indian neonatal meningitis cohorts [3,4].',
          'The microbiological spectrum was dominated by Gram-negative organisms, particularly Klebsiella pneumoniae, Pseudomonas spp., and Acinetobacter spp. This trend is similar to Indian NICU-based studies, where Gram-negative and multidrug-resistant organisms are frequently reported [3,5,8]. Staphylococcus aureus and Streptococcus pneumoniae comprised a significant proportion of late-onset cases in our study. Non-existence of Group B Streptococcus may reflect local epidemiology, prior antibiotic exposure, or different maternal screening and prophylaxis practices compared with Western settings.',
          'Mortality rate of 35.0% is considered high but still falls within the range of mortalities seen in resource-limited and referral NICU settings. The high mortality can be attributed to the varying case severity, timing of referral, organism distribution, antimicrobial resistance, and availability of advanced neonatal support [1,4,6]. Although prematurity and low birth weight showed a trend toward higher mortality, no independent predictor of death was found, probably due to the sample size and the relatively small number of culture-positive cases.',
        ],
      },
      {
        heading: 'Comparison with Literature',
        paragraphs: [
          'Our findings are broadly consistent with recent Indian studies. Reddy et al. described a similar CSF profile with high protein, low glucose, and Gram-negative predominance [3]. Priyadarshini et al. described neonatal meningitis among suspected sepsis cases and emphasized the importance of early predictors and short-term outcomes [4]. Other Indian NICU studies have also highlighted the burden of Gram-negative pathogens, antibiotic resistance, and mortality in neonatal meningitis and sepsis [5,8].',
        ],
      },
      {
        heading: 'Strengths and Limitations',
        paragraphs: [
          'Strengths of study include its prospective design, systemic data collection, clearly criteria for selection, and inclusion of a real-world tertiary NICU population. The study provides useful center-specific data on clinical presentation, CSF findings, microbiological profile, and hospital outcomes.',
          'Limitations of the study include the single-center design, modest sample size, lack of systematic long-term follow-up, and incomplete neuroimaging studies. Molecular diagnostics such as PCR were not performed, and prior antibiotic exposure may have reduced culture positivity. As the study was conducted in a tertiary referral center, the study may have included a higher proportion of severe and healthcare-associated cases.',
        ],
      },
      {
        heading: 'Implications for Practice',
        paragraphs: [
          'The high mortality and predominance of resistant Gram-negative pathogens indicates the need for early identification, timely lumbar puncture, rational empirical antibiotic selection based on local antibiograms, stringent infection control practices, and robust neonatal intensive care support. Efforts towards enhancing antimicrobial stewardship, pathogen surveillance in NICU, and access to rapid diagnostics may improve pathogen detection and optimize treatment. Future studies must include neurodevelopmental evaluation after the discharge from hospital to better define the burden of sequelae among survivors.',
        ],
      },
      {
        heading: 'Conclusion',
        paragraphs: [
          'Neonatal meningitis at this tertiary-care setting was associated with high case fatality and was most commonly caused by Gram-negative bacteria, particularly Klebsiella pneumoniae. Clinical presentation was mostly nonspecific, and classic meningeal findings were rare. CSF study showed marked pleocytosis, elevated protein, and low glucose. Early diagnosis, appropriate empirical antibiotic therapy, treatment based on culture reports, infection control measures and intensive supportive care are essential to reduce mortality and improve outcomes in neonates with meningitis.',
        ],
      },
      {
        heading: 'Declarations',
        paragraphs: [
          'Funding: None.',
          'Conflicts of interest: None.',
        ],
      },
    ],
    references: [
      'Bundy LM, Rajnik M, Noor A. Neonatal meningitis. StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2026 Jan-. Available from: https://www.ncbi.nlm.nih.gov/books/NBK532264/. Accessed 2026.',
      'Darmstadt GL, Batra M, Zaidi AK. Oral antibiotics in the management of serious neonatal bacterial infections in developing country communities. Pediatr Infect Dis J. 2009;28(1 Suppl): S31-S36.',
      'Reddy CM, Bagdi R, Soni MK. Neonatal meningitis: a prospective observational study on microbial etiology, cerebrospinal fluid pathology, and clinical outcomes. J Neonat Surg. 2025;14(5S):558-563.',
      'Priyadarshini P, Bhriguwanshi A, Tripathi S, Singh SN. Prevalence, predictors, and short-term outcomes of neonatal bacterial meningitis in suspected sepsis: a prospective observational study. Clin Epidemiol Glob Health. 2025; 35:102157. doi: 10.1016/j.cegh.2025.102157.',
      'Mukherjee SM, Mitra S, Dutta SD, Basu SB. Neonatal sepsis: the impact of carbapenem-resistant and hypervirulent Klebsiella pneumoniae. Front Med (Lausanne). 2021; 8:634349. doi:10.3389/fmed.2021.634349.',
      'Tunkel AR, Hartman BJ, Kaplan SL, et al. Practice guidelines for the management of bacterial meningitis. Clin Infect Dis. 2004;39(9):1267-1284.',
      'Centers for Disease Control and Prevention. Red Book: 2021 Report of the Committee on Infectious Diseases. 32nd ed. Elk Grove Village, IL: American Academy of Pediatrics; 2021.',
      'World Health Organization. Pocket Book of Hospital Care for Children: Guidelines for the Management of Common Childhood Illnesses. 2nd ed. Geneva: World Health Organization; 2013.',
    ],
    keywords: ['neonatal meningitis', 'early-onset neonatal sepsis', 'late-onset neonatal sepsis', 'cerebrospinal fluid', 'Klebsiella pneumoniae', 'neonatal intensive care unit'],
    articleType: 'research',
    accessType: 'open-access',
    volume: 1, issue: 1, year: 2026,
    publishedDate: '2026-07-01',
    pageStart: 3, pageEnd: 7,
    section: 'Pediatrics & Neonatology',
    pdfUrl: '/articles/ijrhm-2026-v1i1-001.pdf', citationCount: 0, viewCount: 412, downloadCount: 96,
    isFeatured: true, isMostRead: true,
    citation: {
      apa: 'Burhani, R., Kakani, N., Khan, S., & Shrivastava, A. (2026). Clinico-Investigative Profile and Outcomes of Neonatal Meningitis: A Prospective Observational Study from a Tertiary Care Hospital. International Journal of Rural Health and Medicine (IJRHM), 1(1), 3–7. https://doi.org/10.58723/ijrhm.2026.1.1.001',
      mla: 'Burhani, Ruqayya, et al. "Clinico-Investigative Profile and Outcomes of Neonatal Meningitis: A Prospective Observational Study from a Tertiary Care Hospital." International Journal of Rural Health and Medicine (IJRHM) 1.1 (2026): 3–7.',
      chicago: 'Burhani, Ruqayya, Neha Kakani, Shehbaz Khan, and Arpita Shrivastava. 2026. "Clinico-Investigative Profile and Outcomes of Neonatal Meningitis: A Prospective Observational Study from a Tertiary Care Hospital." International Journal of Rural Health and Medicine (IJRHM) 1 (1): 3–7.',
      bibtex: '@article{burhani2026clinico,\n  author  = {Burhani, Ruqayya and Kakani, Neha and Khan, Shehbaz and Shrivastava, Arpita},\n  title   = {Clinico-Investigative Profile and Outcomes of Neonatal Meningitis: A Prospective Observational Study from a Tertiary Care Hospital},\n  journal = {International Journal of Rural Health and Medicine (IJRHM)},\n  year    = {2026},\n  volume  = {1},\n  number  = {1},\n  pages   = {3--7},\n  doi     = {10.58723/ijrhm.2026.1.1.001}\n}',
    },
  },
  {
    id: 'ijrhm-2026-v1i1-002',
    doi: '10.58723/ijrhm.2026.1.1.002',
    title: 'Biologics in Chronic Rhinosinusitis with Nasal Polyposis: Current Evidence, Treatment Protocols and Long-Term Safety Considerations',
    shortTitle: 'Biologics in Chronic Rhinosinusitis with Nasal Polyposis',
    authors: [
      { id: 'b1', name: 'Abhay Kumar Gupta', affiliation: 'Department of Otorhinolaryngology, Amaltas Institute of Medical Sciences, Dewas', country: 'India', isCorresponding: true },
      { id: 'b2', name: 'Ajay Lavania', affiliation: 'Otorhinolaryngologist, Ambulatory Health Services, SEHA, Al Ain', country: 'United Arab Emirates' },
    ],
    abstract: 'Chronic rhinosinusitis with nasal polyposis (CRSwNP) is a persistent inflammatory disorder of the upper airway, frequently associated with type 2 inflammation, asthma, allergic disease and aspirin/non-steroidal anti-inflammatory drug-exacerbated respiratory disease. Conventional treatment with saline irrigation, intranasal corticosteroids, intermittent systemic corticosteroids and endoscopic sinus surgery remains effective for many patients; however, a subgroup develops recurrent, severe disease with persistent nasal obstruction, anosmia, impaired quality of life and repeated exposure to systemic corticosteroids or revision surgery. Biologic therapies have changed the management landscape by targeting key immunologic pathways such as IL-4/IL-13 signaling, IgE, IL-5, IL-5 receptor alpha and epithelial alarmins such as thymic stromal lymphopoietin. This narrative review summarizes the rationale for biologic therapy, candidate selection, practical treatment protocols, outcome monitoring, long-term safety considerations, steroid-sparing benefits, economic barriers and future directions. Current evidence supports biologics as add-on maintenance therapy in carefully selected patients with severe uncontrolled CRSwNP, particularly where type 2 inflammation and comorbid lower-airway disease are evident. Objective reassessment using nasal polyp score, symptom scores, SNOT-22, smell testing, systemic corticosteroid need and revision surgery requirement is essential to guide continuation, switching or discontinuation. Long-term data are reassuring but ongoing pharmacovigilance, registry-based follow-up, cost-effectiveness studies and biomarker-driven selection are needed to refine personalized care.',
    sections: [
      {
        heading: 'Introduction',
        paragraphs: [
          'Chronic rhinosinusitis with nasal polyposis (CRSwNP) is a chronic inflammatory disease characterized by persistent sinonasal inflammation and the formation of benign inflammatory polyps. The disease is clinically important because it can produce long-standing nasal obstruction, hyposmia or anosmia, facial pressure, rhinorrhea, sleep disturbance, recurrent infective exacerbations and substantial impairment of health-related quality of life. Although intranasal corticosteroids and endoscopic sinus surgery have remained central to management, disease recurrence after surgery and the adverse effects of repeated systemic corticosteroids have created a need for targeted, disease-modifying therapy [1,2].',
          'The past decade has seen rapid progress in understanding the immunologic heterogeneity of CRSwNP. In many patients, particularly in Western and increasingly in global cohorts, the dominant inflammatory pattern is type 2 inflammation, driven by interleukin (IL)-4, IL-5, IL-13, IgE, eosinophils, mast cells and epithelial-derived cytokines. This endotype overlaps with asthma, allergic rhinitis and aspirin-exacerbated respiratory disease, supporting the concept of a unified airway in which upper- and lower-airway inflammation should be managed together [2]. Biologic therapies exploit this pathobiology by interrupting specific inflammatory pathways rather than merely reducing mucosal edema or removing polyps surgically.',
        ],
      },
      {
        heading: 'Review Methodology',
        paragraphs: [
          'This narrative review was prepared by expanding the supplied editorial draft into a review-article format and updating the discussion with recent position papers, pivotal phase 3 trials, prescribing information and real-world systematic reviews. The emphasis is practical rather than systematic: patient selection, initiation protocols, monitoring, safety and implementation issues are prioritized for clinicians managing severe uncontrolled CRSwNP.',
        ],
      },
      {
        heading: 'Pathobiology and Rationale for Targeted Therapy',
        paragraphs: [
          'CRSwNP is not a single disease entity. It is a clinical phenotype with several inflammatory endotypes. Type 2 inflammation is the best characterized and is usually associated with eosinophilic tissue inflammation, local IgE production, epithelial barrier dysfunction and increased expression of IL-4, IL-5 and IL-13. IL-4 and IL-13 promote IgE class switching, mucus production, epithelial remodeling and chemokine expression; IL-5 supports eosinophil maturation, recruitment and survival; IgE amplifies mast-cell and basophil activation; and thymic stromal lymphopoietin (TSLP) acts upstream by activating dendritic cells and innate lymphoid cells, thereby amplifying type 2 responses [2].',
          'This mechanistic framework explains the current biologic classes used for CRSwNP. Anti-IL-4 receptor alpha therapy blocks shared IL-4 and IL-13 signaling; anti-IgE therapy reduces free IgE and downstream effector-cell activation; anti-IL-5 and anti-IL-5 receptor approaches reduce eosinophilic inflammation; and anti-TSLP therapy targets an epithelial alarmin that sits upstream of several inflammatory cascades. Because these pathways are also relevant to asthma and atopic disease, biologic selection should consider the whole airway and not only the endoscopic appearance of the nose.',
        ],
        tables: [
          {
            caption: 'Table 1. Major biologic options and their practical relevance.',
            headers: ['Biologic', 'Target', 'Mechanism', 'Typical approved CRSwNP use/dose', 'Clinical relevance'],
            rows: [
              ['Dupilumab', 'IL-4 receptor alpha', 'Blocks IL-4 and IL-13 signaling', 'US: adults and pediatric patients ≥12 years; 300 mg SC every 2 weeks [3]', 'Broad type 2 inflammation; strong evidence for polyp burden, congestion, smell and quality-of-life improvement.'],
              ['Omalizumab', 'IgE', 'Binds free IgE and reduces IgE-mediated effector-cell activation', 'US: adults with CRSwNP; 75-600 mg SC every 2 or 4 weeks based on IgE and body weight [4]', 'Useful where allergic phenotype, high IgE or comorbid allergic asthma is prominent.'],
              ['Mepolizumab', 'IL-5', 'Reduces eosinophil survival and activation', 'US: adults with inadequate response to nasal corticosteroids; 100 mg SC every 4 weeks [5]', 'Useful in eosinophilic disease and recurrent, refractory CRSwNP.'],
              ['Tezepelumab', 'TSLP', 'Blocks upstream epithelial alarmin signaling', 'US: ≥12 years with inadequately controlled CRSwNP; 210 mg SC every 4 weeks [6]', 'Expands targeting beyond downstream type 2 cytokines; supported by WAYPOINT phase 3 data [10].'],
              ['Benralizumab', 'IL-5 receptor alpha', 'Induces eosinophil depletion through antibody-dependent cell-mediated cytotoxicity', 'Approval status for CRSwNP varies; established in eosinophilic asthma', 'Investigational or selected-region option for eosinophilic CRSwNP; local approval must be checked.'],
            ],
          },
        ],
      },
      {
        heading: 'Current Biologic Options',
        paragraphs: [
          'Regulatory approvals vary across countries, age groups and time. Table 1 summarizes major biologic options and their practical relevance. Clinicians should verify the most recent local prescribing information before initiating therapy.',
        ],
      },
      {
        heading: 'Patient Selection: Who Should Receive a Biologic?',
        paragraphs: [
          'Biologics should not be viewed as first-line therapy for all patients with nasal polyps. They are most appropriate for severe uncontrolled CRSwNP despite optimized conventional care. Candidate selection should integrate disease severity, prior treatment burden, comorbidities, biomarkers and patient preference. Contemporary EPOS/EUFOREA guidance emphasizes type 2 inflammation, impact on quality of life, smell dysfunction, systemic corticosteroid exposure, need for surgery and lower-airway comorbidity [2].',
          'Practical indications for considering biologic therapy include:',
          '• Bilateral nasal polyposis with persistent symptoms despite regular intranasal corticosteroids and saline irrigation.',
          '• History of prior endoscopic sinus surgery with recurrent polyps, or a patient in whom surgery is contraindicated, declined or unlikely to provide durable control.',
          '• Repeated or prolonged systemic corticosteroid requirement, especially when steroid-related morbidity is present or anticipated.',
          '• High symptom burden, severe smell loss, high SNOT-22 score or marked impairment in sleep and daily functioning.',
          '• Evidence of type 2 inflammation, such as tissue eosinophilia, blood eosinophilia, elevated IgE or comorbid asthma/AERD.',
          '• Coexisting moderate-to-severe asthma where a single biologic may improve both upper- and lower-airway disease.',
          'Shared decision-making is essential. The discussion should address expected benefits, onset of response, injection schedule, need for ongoing nasal corticosteroids, possible adverse events, cost, insurance or institutional access, and the uncertainty regarding ideal treatment duration.',
        ],
      },
      {
        heading: 'Practical Protocol for Initiation and Monitoring',
        paragraphs: [
          'Historically, biologics were often reserved for patients after multiple surgeries. Current practice is shifting toward earlier use in carefully selected patients to prevent recurrent systemic corticosteroid exposure and repeated procedures. A structured protocol improves consistency and helps avoid both under-treatment and unnecessary long-term expense.',
          '6.1 Baseline Assessment: Before initiation, document the diagnosis and severity. Nasal endoscopy should record bilateral nasal polyp score; CT findings should be reviewed when surgery is being considered or when the diagnosis is uncertain. Baseline patient-reported outcomes should include SNOT-22 and a visual analog scale for nasal obstruction, rhinorrhea, facial pressure and smell. Objective smell testing is desirable where available. Baseline systemic corticosteroid use, antibiotic courses, emergency visits, revision surgery history and asthma status should be recorded.',
          '6.2 Multidisciplinary Review: Collaboration among otorhinolaryngologists, allergists, pulmonologists and primary care physicians is increasingly important, especially for patients with asthma, AERD, allergic disease, eosinophilic granulomatosis with polyangiitis mimics, immunodeficiency or recurrent infections. Multidisciplinary assessment can also identify patients in whom biologic choice should be driven primarily by lower-airway disease or by a broader type 2 inflammatory phenotype.',
          '6.3 Response Assessment: Response should be assessed at predefined intervals, commonly at 4 to 6 months and again at 12 months, using the same measures obtained at baseline. A complete response is suggested by meaningful reduction in nasal polyp score, improved smell, reduced nasal congestion, reduced systemic corticosteroid need, improved SNOT-22 and improved control of comorbid asthma. Partial response may justify continuation with closer monitoring, optimization of topical therapy or consideration of switching. Non-response should prompt reassessment of diagnosis, adherence, comorbidities and local inflammatory phenotype.',
        ],
        tables: [
          {
            caption: 'Table 2. Suggested practical monitoring framework for biologic therapy in CRSwNP.',
            headers: ['Domain', 'Baseline', 'Follow-up indicators'],
            rows: [
              ['Endoscopic disease', 'Bilateral nasal polyp score; mucosal edema; discharge', 'Reduction in polyp size and inflammation'],
              ['Symptoms', 'Nasal obstruction, rhinorrhea, facial pressure, sleep', 'Visual analog scale and symptom diary improvement'],
              ['Quality of life', 'SNOT-22 or equivalent', 'Clinically meaningful reduction in score'],
              ['Olfaction', 'Patient report; smell identification test where available', 'Improved smell identification or patient-reported smell'],
              ['Treatment burden', 'OCS courses, antibiotics, prior surgery', 'Reduced need for OCS and revision surgery'],
              ['Comorbid asthma', 'Asthma control, exacerbations, spirometry if relevant', 'Improved asthma control and reduced exacerbations'],
            ],
          },
        ],
      },
      {
        heading: 'Evidence from Pivotal Trials and Real-World Studies',
        paragraphs: [
          'Dupilumab demonstrated significant improvements in endoscopic polyp score, sinus opacification, nasal congestion, smell and health-related quality of life in the LIBERTY NP SINUS-24 and SINUS-52 phase 3 trials and is considered one of the best-established options for severe CRSwNP [7]. Omalizumab improved endoscopic, clinical and patient-reported outcomes in the replicate POLYP 1 and POLYP 2 phase 3 trials, supporting IgE blockade as a useful option in severe disease with inadequate response to standard therapy [8]. Mepolizumab, evaluated in the SYNAPSE trial, improved nasal polyp size and nasal obstruction and reduced the need for surgery in patients with recurrent, refractory severe bilateral CRSwNP [9].',
          'Tezepelumab has recently added a new upstream therapeutic approach. In the WAYPOINT phase 3 trial, tezepelumab significantly reduced nasal polyp size, nasal congestion severity and sinonasal symptom burden in severe uncontrolled CRSwNP [10]. This is clinically relevant because epithelial alarmins may drive inflammation across a broader spectrum of patients than those defined by a single downstream biomarker. Real-world studies and meta-analyses are broadly reassuring regarding effectiveness and safety, but they also highlight heterogeneity in response, the need for standard response definitions and the importance of long-term follow-up [11,12].',
        ],
      },
      {
        heading: 'Long-Term Safety Considerations',
        paragraphs: [
          'The long-term safety profile of biologics in CRSwNP is generally reassuring, particularly when compared with the cumulative harms of repeated systemic corticosteroid exposure. Nonetheless, biologics are chronic immune-modulating therapies and require ongoing vigilance. Common adverse events include injection-site reactions, upper respiratory tract infections, nasopharyngitis, headache, arthralgia, transient eosinophilia and drug-specific events such as conjunctivitis with dupilumab in some patients. Hypersensitivity reactions are uncommon but clinically important. Helminth infection considerations and live-vaccine cautions appear in several biologic labels and should be reviewed before initiation [3-6].',
          'No consistent signal of increased malignancy, opportunistic infection or severe immunosuppression has emerged from available trial and real-world data, but registry-based surveillance remains essential because many patients require prolonged therapy. Clinicians should avoid abrupt withdrawal of systemic or inhaled corticosteroids when biologics are started; tapering should be gradual and clinically supervised. Special populations such as pregnancy, lactation, elderly patients, patients with immunodeficiency and pediatric patients require individualized risk-benefit assessment based on local labeling and specialty consultation.',
        ],
        tables: [
          {
            caption: 'Table 3. Safety and follow-up considerations during biologic therapy.',
            headers: ['Issue', 'Examples', 'Practical approach'],
            rows: [
              ['Common adverse events', 'Injection-site reactions, nasopharyngitis, upper respiratory tract infection, headache, arthralgia', 'Explain before initiation; record at each visit.'],
              ['Drug-specific cautions', 'Conjunctivitis/keratitis reported with dupilumab; herpes zoster warning for mepolizumab; hypersensitivity warnings across agents', 'Review label-specific warnings and past history.'],
              ['Steroid tapering', 'Risk of adrenal suppression or disease flare if corticosteroids are stopped abruptly', 'Taper gradually and monitor asthma and sinonasal disease.'],
              ['Infection/vaccination', 'Helminth infection precautions; avoidance of live attenuated vaccines in some labels', 'Screen history and update vaccination plan where appropriate.'],
              ['Long-term uncertainty', 'Optimal duration, stopping rules and switching strategy remain incompletely defined', 'Use response criteria, shared decision-making and registry follow-up.'],
            ],
          },
        ],
      },
      {
        heading: 'Steroid-Sparing and Surgery-Sparing Value',
        paragraphs: [
          'Repeated systemic corticosteroid exposure is associated with diabetes, hypertension, osteoporosis, cataract, weight gain, mood disturbance, adrenal suppression and increased infection risk. A major advantage of biologic therapy is the potential to reduce corticosteroid dependence while improving symptoms and quality of life. In selected patients, biologics may also delay or reduce revision surgery. This does not eliminate the role of surgery: endoscopic sinus surgery remains important for mechanical obstruction, tissue diagnosis, restoration of sinus ventilation, access for topical therapy and rapid debulking in appropriate patients. The emerging paradigm is not biologics versus surgery, but individualized sequencing and combination of surgery, topical therapy and biologic treatment.',
        ],
      },
      {
        heading: 'Economic and Access Challenges',
        paragraphs: [
          'Despite their clinical promise, biologics create substantial economic and logistical challenges. High acquisition costs, injection training, cold-chain storage, reimbursement variability and need for prolonged administration can limit access, particularly in low-resource settings. Economic models often compare biologics with revision surgery, but the most relevant comparison differs by patient: some patients primarily need steroid-sparing control; others need surgery to restore anatomy; still others require a biologic because of severe comorbid asthma. Cost-effectiveness research should incorporate quality-adjusted life years, corticosteroid morbidity, surgery avoidance, asthma benefits, adherence and patient preference.',
        ],
      },
      {
        heading: 'Switching, Discontinuation and Duration of Therapy',
        paragraphs: [
          'The ideal duration of biologic therapy remains one of the major unanswered questions. Most pivotal trials provide data up to approximately one year, while real-world cohorts are beginning to describe longer-term outcomes. Some patients relapse when treatment is stopped, suggesting that ongoing immune modulation may be required for disease control. For partial responders, switching to another biologic with a different mechanism is reasonable after reassessment of adherence, topical therapy, comorbid asthma, aspirin sensitivity and diagnostic accuracy. Discontinuation may be considered in non-responders, patients with unacceptable adverse effects, patients with sustained remission who prefer a monitored trial off treatment, or when cost or access becomes prohibitive. Any discontinuation strategy should include a clear follow-up plan and rescue pathway.',
        ],
      },
      {
        heading: 'Future Directions',
        paragraphs: [
          "Future progress will depend on precision medicine. Current selection criteria rely on clinical severity, history of systemic corticosteroid use, prior surgery and broad type 2 markers. More accurate biomarkers are needed to predict which patient will respond best to anti-IL-4/IL-13, anti-IgE, anti-IL-5, anti-IL-5 receptor or anti-TSLP therapy. Molecular endotyping, transcriptomic profiling, local tissue biomarkers, peripheral eosinophil dynamics and integrated upper-lower airway phenotyping may eventually support more rational biologic choice. Other research priorities include optimal timing relative to surgery, standardized definitions of remission, pediatric outcomes, pregnancy safety, low-resource implementation and cost-effective treatment algorithms.",
        ],
      },
      {
        heading: 'Conclusion',
        paragraphs: [
          'Biologics have ushered in a new era in the management of severe uncontrolled CRSwNP. By targeting the immune pathways responsible for type 2 and epithelial-driven inflammation, these therapies can reduce polyp burden, improve nasal obstruction and smell, enhance quality of life and reduce dependence on systemic corticosteroids and revision surgery in appropriately selected patients. Successful implementation requires careful candidate selection, multidisciplinary assessment, objective monitoring and regular review of response, safety and cost. Surgery and topical corticosteroid therapy remain essential parts of care, but biologics have redefined the standard for patients with recurrent, severe and steroid-dependent disease. The next phase of progress will be driven by biomarkers, long-term registry data and precision protocols that match the right biologic to the right patient at the right time.',
        ],
      },
      {
        heading: 'Declarations',
        paragraphs: ['Funding: None.', 'Conflicts of interest: None.'],
      },
    ],
    references: [
      'Fokkens WJ, Viskens AS, Backer V, et al. EPOS/EUFOREA update on indication and evaluation of biologics in chronic rhinosinusitis with nasal polyps 2023. Rhinology. 2023;61(3):194-202. doi:10.4193/Rhin22.489.',
      'DUPIXENT (dupilumab) injection, for subcutaneous use. US Prescribing Information. Revised 2026.',
      'XOLAIR (omalizumab) injection, for subcutaneous use. US Prescribing Information. Revised 2024.',
      'NUCALA (mepolizumab) for injection, for subcutaneous use. US Prescribing Information. Revised 2025.',
      'TEZSPIRE (tezepelumab-ekko) injection, for subcutaneous use. US Prescribing Information. Revised 2025.',
      'Bachert C, Han JK, Desrosiers M, Hellings PW, Amin N, Lee SE, et al. Efficacy and safety of dupilumab in patients with severe chronic rhinosinusitis with nasal polyps (LIBERTY NP SINUS-24 and LIBERTY NP SINUS-52): results from two multicentre, randomised, double-blind, placebo-controlled, parallel-group phase 3 trials. Lancet. 2019;394(10209):1638-1650.',
      'Gevaert P, Omachi TA, Corren J, Han JK, Mullol J, Lee SE, et al. Efficacy and safety of omalizumab in nasal polyposis: 2 randomized phase 3 trials. J Allergy Clin Immunol. 2020;146(3):595-605. doi:10.1016/j.jaci.2020.05.032.',
      'Han JK, Bachert C, Fokkens W, Desrosiers M, Wagenmann M, Lee SE, et al. Mepolizumab for chronic rhinosinusitis with nasal polyps (SYNAPSE): a randomized, double-blind, placebo-controlled, phase 3 trial. Lancet Respir Med. 2021;9(10):1141-1153. doi:10.1016/S2213-2600(21)00097-7.',
      'Lipworth BJ, Han JK, Desrosiers M, Hopkins C, Lee SE, Mullol J, et al. Tezepelumab in adults with severe chronic rhinosinusitis with nasal polyps. N Engl J Med. 2025;392(12):1178-1188. doi:10.1056/NEJMoa2414482.',
      'Cai S, et al. Efficacy and safety of biologics for chronic rhinosinusitis with nasal polyps in real-world settings: systematic review and meta-analysis. 2025.',
      'Lee KI, et al. Biologics for chronic rhinosinusitis with nasal polyps. 2025.',
    ],
    keywords: ['chronic rhinosinusitis with nasal polyps', 'nasal polyposis', 'biologics', 'dupilumab', 'omalizumab', 'mepolizumab', 'tezepelumab', 'type 2 inflammation', 'endoscopic sinus surgery', 'steroid-sparing therapy'],
    articleType: 'review',
    accessType: 'open-access',
    volume: 1, issue: 1, year: 2026,
    publishedDate: '2026-07-01',
    pageStart: 8, pageEnd: 13,
    section: 'Otorhinolaryngology',
    pdfUrl: '/articles/ijrhm-2026-v1i1-002.pdf', citationCount: 0, viewCount: 298, downloadCount: 71,
    isFeatured: false, isMostRead: true,
    citation: {
      apa: 'Gupta, A. K., & Lavania, A. (2026). Biologics in Chronic Rhinosinusitis with Nasal Polyposis: Current Evidence, Treatment Protocols and Long-Term Safety Considerations. International Journal of Rural Health and Medicine (IJRHM), 1(1), 8–13. https://doi.org/10.58723/ijrhm.2026.1.1.002',
      mla: 'Gupta, Abhay Kumar, and Ajay Lavania. "Biologics in Chronic Rhinosinusitis with Nasal Polyposis: Current Evidence, Treatment Protocols and Long-Term Safety Considerations." International Journal of Rural Health and Medicine (IJRHM) 1.1 (2026): 8–13.',
      chicago: 'Gupta, Abhay Kumar, and Ajay Lavania. 2026. "Biologics in Chronic Rhinosinusitis with Nasal Polyposis: Current Evidence, Treatment Protocols and Long-Term Safety Considerations." International Journal of Rural Health and Medicine (IJRHM) 1 (1): 8–13.',
      bibtex: '@article{gupta2026biologics,\n  author  = {Gupta, Abhay Kumar and Lavania, Ajay},\n  title   = {Biologics in Chronic Rhinosinusitis with Nasal Polyposis: Current Evidence, Treatment Protocols and Long-Term Safety Considerations},\n  journal = {International Journal of Rural Health and Medicine (IJRHM)},\n  year    = {2026},\n  volume  = {1},\n  number  = {1},\n  pages   = {8--13},\n  doi     = {10.58723/ijrhm.2026.1.1.002}\n}',
    },
  },
  {
    id: 'ijrhm-2026-v1i1-003',
    doi: '10.58723/ijrhm.2026.1.1.003',
    title: 'From Polycystic Ovary Syndrome to Polyendocrine Metabolic Ovarian Syndrome: Rationale and Clinical Implications',
    shortTitle: 'PCOS to Polyendocrine Metabolic Ovarian Syndrome',
    authors: [
      { id: 'c1', name: 'Sangeeta Tiwari', affiliation: 'Principal, Amaltas Institute of Nursing Sciences, Amaltas University, Dewas', country: 'India', email: 'tiwarisangeeta94@gmail.com', isCorresponding: true },
    ],
    abstract: 'Background: Polycystic ovary syndrome (PCOS), recently renamed polyendocrine metabolic ovarian syndrome (PMOS), is a common, heterogeneous disorder with reproductive, endocrine, metabolic and psychological consequences. The traditional term PCOS has been criticized because it overemphasizes ovarian morphology and suggests the presence of pathological cysts, although the ultrasound finding usually represents multiple arrested follicles and is neither universal nor essential for diagnosis. Objective: To summarize the rationale for replacing PCOS with PMOS and to describe the expected implications of the terminology change for diagnosis, patient communication, multidisciplinary care, research and public health messaging. Methods: This narrative review was prepared from the recent global consensus on naming of PCOS/PMOS and current international guidance on assessment and management of the condition. Summary: The term PMOS better reflects the multisystem nature of the disorder. "Polyendocrine" acknowledges involvement of multiple hormonal pathways, including androgen excess, insulin-related pathways, neuroendocrine regulation and ovarian function. "Metabolic" highlights central cardiometabolic risks, including insulin resistance, dyslipidemia, type 2 diabetes risk, obesity-associated complications and cardiovascular risk factors. Retaining "ovarian" recognizes that ovulatory dysfunction and ovarian morphology remain clinically important. Conclusion: Adoption of PMOS is more than a semantic change. It supports clearer patient education, earlier recognition in patients without polycystic ovarian morphology, and more integrated care across gynecology, endocrinology, primary care, nutrition, psychology and fertility services.',
    structuredAbstract: [
      { label: 'Background', text: 'Polycystic ovary syndrome (PCOS), recently renamed polyendocrine metabolic ovarian syndrome (PMOS), is a common, heterogeneous disorder with reproductive, endocrine, metabolic and psychological consequences. The traditional term PCOS has been criticized because it overemphasizes ovarian morphology and suggests the presence of pathological cysts, although the ultrasound finding usually represents multiple arrested follicles and is neither universal nor essential for diagnosis.' },
      { label: 'Objective', text: 'To summarize rationale for replacing PCOS with PMOS and to describe the expected implications of terminology change for diagnosis, patient communication, multidisciplinary care, research and public health messaging.' },
      { label: 'Methods', text: 'This narrative review was prepared from the recent global consensus on naming of PCOS/PMOS and current international guidance on assessment and management of condition.' },
      { label: 'Summary', text: 'The term PMOS better reflects multisystem nature of the disorder. "Polyendocrine" acknowledges involvement of multiple hormonal pathways, including androgen excess, insulin-related pathways, neuroendocrine regulation and ovarian function. "Metabolic" highlights central cardiometabolic risks, including insulin resistance, dyslipidemia, type 2 diabetes risk, obesity-associated complications and cardiovascular risk factors. Retaining "ovarian" recognizes that ovulatory dysfunction and ovarian morphology remain clinically important.' },
      { label: 'Conclusion', text: 'Adoption of PMOS is more than a semantic change. It supports clearer patient education, earlier recognition in patients without polycystic ovarian morphology, and more integrated care across gynecology, endocrinology, primary care, nutrition, psychology and fertility services.' },
    ],
    sections: [
      {
        heading: 'Introduction',
        paragraphs: [
          'In the past, polycystic ovarian syndrome has been classified as a gynecological or reproductive disorder. Clinical experience and current data, however, indicate that the illness affects much more than only the ovary. Hyperandrogenism, ovulatory dysfunction, insulin resistance, cardiometabolic risk factors, and psychosocial strain are frequently included. In order to bring terminology into line with the biology and clinical realities of the disorder, a global consensus procedure was used to suggest the new word, polyendocrine metabolic ovarian syndrome (PMOS).',
          'As disease names influence patient comprehension, professional attitudes, diagnostic paths, funding goals, and research conceptualization, the change is therapeutically significant. Patients and medical professionals may believe that ovarian cysts are necessary for diagnosis or that the illness only affects fertility if the name is based around "cysts." This misunderstanding could cause care to be fragmented and diagnosis to be delayed.',
        ],
      },
      {
        heading: 'Why the Term PCOS Was Considered Inaccurate',
        paragraphs: [
          'The word "polycystic" is misleading. The ovarian appearance classically described in PCOS usually reflects multiple small, arrested follicles rather than true pathological ovarian cysts. In addition, many affected individuals do not have polycystic ovarian morphology on ultrasound, and some may meet diagnostic criteria through hyperandrogenism and ovulatory dysfunction alone.',
          'The term "ovary syndrome" also underrepresents endocrine and metabolic dimensions of disorder. Ovarian dysfunction is important, but it is part of a broader network of hormonal and metabolic disturbance. A name that appears purely gynecological may reduce attention to insulin resistance, obesity-associated risk, dyslipidemia, hypertension, type 2 diabetes risk, cardiovascular risk factors, fatty liver risk and mental health concerns.',
        ],
      },
      {
        heading: 'Meaning of the New Term PMOS',
        paragraphs: [
          'The consensus name polyendocrine metabolic ovarian syndrome retains the familiar syndrome structure while making the disease framework more accurate. Each component of the name has clinical meaning.',
        ],
        tables: [
          {
            caption: 'Table 1. Interpretation of the term Polyendocrine Metabolic Ovarian Syndrome',
            headers: ['Component', 'Clinical interpretation', 'Practical implication'],
            rows: [
              ['Polyendocrine', 'Involvement of multiple hormonal pathways, including androgen excess, insulin-related pathways, neuroendocrine function and ovarian hormones.', 'Encourages assessment beyond pelvic ultrasound and menstrual history.'],
              ['Metabolic', 'Recognition of insulin resistance and long-term cardiometabolic risk.', 'Supports screening for weight-related risk, glucose intolerance, dyslipidemia, blood pressure and lifestyle needs.'],
              ['Ovarian', 'Ovarian dysfunction remains part of the condition through ovulatory disturbance, menstrual irregularity and ovarian morphology in some patients.', 'Preserves the reproductive and fertility dimensions of the disorder.'],
              ['Syndrome', 'A cluster of related signs and symptoms rather than a single-organ disease.', 'Supports individualized, multidisciplinary care.'],
            ],
          },
        ],
      },
      {
        heading: 'Clinical Features and Pathophysiological Emphasis',
        paragraphs: [
          'PMOS commonly presents with irregular menstrual cycles, anovulation or oligo-ovulation, clinical or biochemical hyperandrogenism, acne, hirsutism, scalp hair thinning, subfertility, weight gain or difficulty with weight management, and metabolic abnormalities. The clinical phenotype is heterogeneous; therefore, absence of one feature, such as polycystic ovarian morphology, should not exclude the diagnosis when other criteria are fulfilled.',
          'The metabolic dimension is central. Insulin resistance can amplify androgen production and contribute to weight gain, dysglycemia and cardiometabolic risk. Psychological features, including distress related to body image, acne, hirsutism, infertility, delayed diagnosis and stigma, should also be recognized as part of holistic care.',
        ],
      },
      {
        heading: 'Implications for Diagnosis',
        paragraphs: [
          'The name change does not mean that PMOS is a new disease. It is the updated terminology for the condition previously known as PCOS. Diagnostic criteria and clinical evaluation should continue to follow current evidence-based guidance while terminology transitions in clinical records, patient education materials and professional communication.',
          'In adults, contemporary guidance supports diagnosis using revised evidence-based criteria: two of the following after exclusion of other causes—clinical or biochemical hyperandrogenism, ovulatory dysfunction, and polycystic ovarian morphology on ultrasound or elevated anti-Müllerian hormone where appropriate. When both irregular cycles and hyperandrogenism are present, ultrasound or anti-Müllerian hormone testing may not be required. Adolescents require more cautious diagnostic assessment because normal pubertal physiology can overlap with PMOS features.',
        ],
      },
      {
        heading: 'Benefits for Patient Communication',
        paragraphs: [
          'Patient comprehension may be enhanced by a more precise name. According to PMOS, the condition is more than just "cysts in the ovary," and symptoms like irregular periods, acne, hirsutism, weight problems, insulin resistance, exhaustion, and psychological discomfort can all be related. By characterizing the condition as a systemic endocrine-metabolic ailment rather than one that is only related to reproduction, the name may also lessen stigma associated with fertility.',
          'During the transition period, clinicians may use both terms, such as "PMOS, previously known as PCOS," to maintain continuity for patients, prescriptions, insurance documentation, coding systems and educational resources.',
        ],
      },
      {
        heading: 'Implications for Multidisciplinary Care',
        paragraphs: [
          'PMOS requires coordinated care. Gynecologists remain central for menstrual, ovarian and fertility issues, but comprehensive management may also involve endocrinologists, primary care physicians, dietitians, dermatologists, psychologists, diabetes educators and fertility specialists. The terminology supports this broader approach by making endocrine and metabolic care visible in the name itself.',
          'Routine assessment should consider menstrual pattern, signs of androgen excess, fertility goals, metabolic risk, body mass index and waist measures where appropriate, blood pressure, glycemic status, lipid profile, sleep and psychological wellbeing. Management should be individualized according to age, symptoms, reproductive plans, cardiometabolic risk and patient priorities.',
        ],
      },
      {
        heading: 'Public Health and Research Implications',
        paragraphs: [
          'The global burden of PMOS is substantial. The condition affects a large proportion of women and people assigned female at birth during reproductive years, and its long-term implications extend into diabetes prevention, cardiovascular risk reduction, fertility care and mental health. A terminology shift may improve public health messaging and promote research that examines the whole condition rather than isolated ovarian morphology.',
          'For researchers, PMOS may encourage study designs that integrate reproductive, metabolic, endocrine and psychosocial outcomes. For educators and policymakers, it can support more accurate training materials and broader service models.',
        ],
      },
      {
        heading: 'Implementation Challenges',
        paragraphs: [
          "It takes time for medical terminology to evolve. Updating textbooks, recommendations, electronic medical records, diagnostic codes, public health resources, patient advocacy content, and exam curricula are among the challenges. Due of PCOS's strong linkages to patient communities and clinical practice, dual terminology is probably going to persist for a while.",
          "In order to prevent confusion, clinicians should clarify that PMOS is an updated term meant to enhance accuracy and care rather than a distinct diagnosis from PCOS. Simple explanations should be used in patient-facing materials, and it should be emphasized that care is still determined by each patient's unique symptoms and risks.",
        ],
      },
      {
        heading: 'Conclusion',
        paragraphs: [
          'The renaming of PCOS to PMOS represents a major conceptual shift from an ovary-centered label to a multisystem endocrine-metabolic framework. The new terminology better captures the central roles of hormonal dysregulation, insulin resistance and cardiometabolic risk while preserving the importance of ovarian dysfunction. Adoption of PMOS may improve diagnosis, reduce stigma, broaden multidisciplinary care and align patient education with contemporary evidence.',
        ],
      },
      {
        heading: 'Acknowledgement',
        paragraphs: ['The author acknowledges the use of the original draft material as the basis for this revised narrative review.'],
      },
      {
        heading: 'Declarations',
        paragraphs: ['Funding: None.', 'Conflicts of interest: None.'],
      },
    ],
    references: [
      'Teede HJ, Bahri Khomami M, Morman R, et al. Polyendocrine metabolic ovarian syndrome, the new name for polycystic ovary syndrome: a multistep global consensus process. Lancet. 2026; S0140-6736(26)00717-8.',
      'Endocrine Society. Polyendocrine Metabolic Ovarian Syndrome: New name to improve diagnosis and care of condition affecting 170 million women worldwide. News release. 12 May 2026.',
      'Teede HJ, Tay CT, Laven JJE, et al. Recommendations from the 2023 International Evidence-based Guideline for the Assessment and Management of Polycystic Ovary Syndrome. J Clin Endocrinol Metab. 2023;108(10):2447-2469.',
      "International Evidence-based Guideline for the Assessment and Management of Polycystic Ovary Syndrome 2023. Monash University, Centre for Research Excellence in Women's Health in Reproductive Life.",
    ],
    keywords: ['polycystic ovary syndrome', 'polyendocrine metabolic ovarian syndrome', 'PMOS', 'PCOS', 'insulin resistance', 'hyperandrogenism', 'metabolic syndrome', "women's health"],
    articleType: 'review',
    accessType: 'open-access',
    volume: 1, issue: 1, year: 2026,
    publishedDate: '2026-07-01',
    pageStart: 14, pageEnd: 17,
    section: "Endocrinology & Women's Health",
    pdfUrl: '/articles/ijrhm-2026-v1i1-003.pdf', citationCount: 0, viewCount: 356, downloadCount: 88,
    isFeatured: true, isMostRead: true,
    citation: {
      apa: 'Tiwari, S. (2026). From Polycystic Ovary Syndrome to Polyendocrine Metabolic Ovarian Syndrome: Rationale and Clinical Implications. International Journal of Rural Health and Medicine (IJRHM), 1(1), 14–17. https://doi.org/10.58723/ijrhm.2026.1.1.003',
      mla: 'Tiwari, Sangeeta. "From Polycystic Ovary Syndrome to Polyendocrine Metabolic Ovarian Syndrome: Rationale and Clinical Implications." International Journal of Rural Health and Medicine (IJRHM) 1.1 (2026): 14–17.',
      chicago: 'Tiwari, Sangeeta. 2026. "From Polycystic Ovary Syndrome to Polyendocrine Metabolic Ovarian Syndrome: Rationale and Clinical Implications." International Journal of Rural Health and Medicine (IJRHM) 1 (1): 14–17.',
      bibtex: '@article{tiwari2026polycystic,\n  author  = {Tiwari, Sangeeta},\n  title   = {From Polycystic Ovary Syndrome to Polyendocrine Metabolic Ovarian Syndrome: Rationale and Clinical Implications},\n  journal = {International Journal of Rural Health and Medicine (IJRHM)},\n  year    = {2026},\n  volume  = {1},\n  number  = {1},\n  pages   = {14--17},\n  doi     = {10.58723/ijrhm.2026.1.1.003}\n}',
    },
  },
  {
    id: 'ijrhm-2026-v1i1-004',
    doi: '10.58723/ijrhm.2026.1.1.004',
    title: 'Respiratory Cilia and Airway Defense: From Physiology to Clinical Disorders',
    shortTitle: 'Respiratory Cilia and Airway Defense',
    authors: [
      { id: 'd1', name: 'Abhilasha Datta', affiliation: 'Professor and Head (Physiology), Amaltas Institute of Medical Sciences, Dewas', country: 'India', isCorresponding: true },
    ],
    abstract: 'Mucociliary clearance is the hidden backbone of the respiratory system, functioning to maintain a sterile environment in the airways and contributing to pulmonary homeostasis, done largely with the help of specialized motile organelles called respiratory cilia. Mucus, trapped pathogens, environmental pollutants and particulate matter are all propelled out by the coordinated beating of cilia toward the upper airway for elimination, a process largely dependent on ciliary ultrastructure along with the thickness, viscosity, elasticity and flow behavior of the mucus and adequate hydration of the airway surface. A large spectrum of airway conditions can result in dysfunction of respiratory cilia, including primary ciliary dyskinesia (PCD), chronic obstructive pulmonary disease (COPD), cystic fibrosis (CF), asthma, bronchiectasis and chronic rhinosinusitis. Recent advances have substantially contributed to our understanding of ciliary biology, molecular genetics, epithelial signaling pathways and translational therapeutics, while innovations such as high-speed video microscopy, cryoelectron tomography, next-generation genetic sequencing, artificial intelligence-assisted diagnostics, organoid models and emerging gene therapies have transformed both research and clinical management of ciliary disorders. Based on recent literature, this review discusses the basic physiology of respiratory cilia, mechanisms regulating mucociliary clearance, the pathophysiology of ciliary dysfunction, recent diagnostic and therapeutic advances, and future perspectives in respiratory ciliary medicine.',
    sections: [
      {
        heading: 'Introduction',
        paragraphs: [
          'The respiratory system is in constant exposure and interaction with the external micro inhabitants of the environment namely, airborne microorganisms, allergens, particulate pollutants, smoke, and environmental toxins. However, maintenance of a sterile pulmonary environment is one of the fundamental requirements of the body so as to further prevent lower respiratory tract infections for which the airways are blessed with several innate defense mechanisms among which mucociliary clearance is one of the most important ones (1).',
          'It is a known and evident fact that the dynamic protective functioning of the entire respiratory system comes from the mucociliary apparatus that continuously removes harmful inhaled particles before they can reach the distal bronchioles and alveoli.',
          'Respiratory cilia are microscopic motile projections present on the apical surface of pseudostratified columnar epithelial cells lining the nasal cavity, paranasal sinuses, trachea, bronchi, and larger bronchioles (2). Approximately 200 motile cilia are present on each ciliated epithelial cell that beat in a highly coordinated fashion to propel mucus toward the pharynx. This process, known as the mucociliary escalator, is the first line of defense against inhaled pathogens and toxins (3).',
          'Multiple interacting factors like ultrastructure of the cilia, frequency rate of beating of the cilia, ciliary coordination, composition of the mucus and airway surface liquid hydration all affect normal mucociliary clearance (4). Disturbance of any of these components impairs mucus transport and predisposes individuals to recurrent respiratory infections, chronic inflammation, that ultimately leads to progressive lung damage.',
          'Interestingly, malfunctioning of respiratory cilia has been linked to have a role in both inherited and acquired respiratory disorders and has therefore attracted a lot of attention (5). Disorders such as primary ciliary dyskinesia, cystic fibrosis, COPD, severe asthma, and post-viral airway diseases are increasingly linked to abnormalities in ciliary function and epithelial defense mechanisms (5,6). Furthermore, the occurrence of the COVID-19 pandemic renewed scientific interest in mucociliary defense as viral infections seem to directly impair ciliary integrity and airway clearance (15).',
          'This review discusses the physiology of respiratory cilia, the mechanisms underlying mucociliary clearance, the clinical consequences of ciliary dysfunction, recent advances in diagnostics and therapeutics, and future directions in respiratory ciliary research.',
        ],
      },
      {
        heading: 'Structure and Ultrastructure of Respiratory Cilia',
        paragraphs: [
          'Respiratory motile cilia are highly specialized organelles approximately 5–7 µm in length and 0.2 µm in diameter (2). Their origin is from basal bodies that are attached within the apical cytoplasm of epithelial cells. Structurally, motile cilia possess the classical "9+2" axonemal arrangement composed of nine peripheral microtubular doublets, two central microtubules, inner and outer dynein arms, radial spokes and nexin links (6).',
          'Dynein arms are specific in that they contain ATPase enzymes responsible for generating sliding movement between adjacent microtubules. Coordinated sliding forces are converted into bending motions with the help of nexin links while radial spokes help in the stabilization of the entire arrangement during rhythmic ciliary beating (7).',
          'Ciliary orientation and its synchronization are maintained very efficiently by the basal body. Also, proper alignment of cilia allows coordinated metachronal beating, without which mucus transport cannot happen effectively. Any type of structural defects affecting dynein arms, radial spokes, central microtubules, or basal bodies will impair ciliary motion and contribute to ciliary dyskinesia syndromes (8).',
          'Recent cryoelectron tomography studies performed by Gui et al (9) between 2020 and 2025 have contributed significantly in improving our understanding of ciliary ultrastructure and molecular architecture, mainly related to dynein assembly proteins and axonemal organization (9).',
        ],
      },
      {
        heading: 'Physiology of Ciliary Beating',
        paragraphs: [
          'Ciliary Beat Frequency: Normal ciliary beat frequency ranges between 7–20 Hz but vary by temperature, hydration, pH, and local signaling impulses received (3). The ciliary beat cycle consists of two strokes: an effective stroke and recovery stroke. The effective stroke aims to propel mucus proximally and upwards by extending the cilia rigidly into the mucus layer where the recovery stroke largely focuses on minimizing the backward movement of mucus by bending the cilia closer to the epithelial surface.',
          'Regulation of Ciliary Activity: Ciliary motility is regulated by complex intracellular signaling pathways that involve the interaction between calcium ions, cyclic AMP and GMP, nitric oxide and ATP-mediated purinergic signaling (3). It has been seen that adrenergic stimulation generally works towards increasing ciliary beat frequency, whereas environmental toxins and inflammatory mediators may suppress ciliary activity. Also, nitric oxide plays an especially important role in modulating ciliary movement and maintaining epithelial homeostasis (10).',
          'Recent research has shown that airway epithelial cells actively regulate ciliary function in response to environmental stimuli, inflammation, and infection. This dynamic regulation highlights the importance of cilia as active participants in airway immunity rather than passive mechanical structures.',
        ],
      },
      {
        heading: 'Mucociliary Clearance Mechanism',
        paragraphs: [
          'Not only is mucociliary clearance dependent on the working of the respiratory cilia but also on the coordinated interaction between respiratory cilia, airway mucus and airway surface liquid (ASL) (11). It is worth noting that the ASL consists of two layers, the mucus gel layer which traps inhaled particles, bacteria, allergens, and pollutants and the periciliary liquid layer, a low-viscosity fluid that permits free ciliary movement (11).',
          'As the cilia beat in this ASL fluid and at the same time interact with the mucus, proper hydration of the ASL is of utmost importance because dehydration will compress the periciliary layer and thereby restrict ciliary movement. This mechanism is particularly important in the pathophysiology of diseases such as cystic fibrosis, where defective ion transport causes ASL dehydration and impaired mucus clearance (12).',
          'Computational and biophysical studies from 2020 onward have demonstrated that mucus viscosity, elasticity, and hydration significantly influence mucociliary transport efficiency (13). Excessively thick mucus impairs ciliary propulsion, leading to mucus stasis and infection susceptibility.',
        ],
      },
      {
        heading: 'Respiratory Cilia in Airway Defense',
        paragraphs: [
          'One of the important components of innate pulmonary immunity is the respiratory cilia. Their major functions include not only removal of inhaled pathogens, clearance of toxic particles but also prevention of microbial colonization and maintenance of airway sterility that ultimately prevents or limits inflammation related injury. By this process of continuous clearing of mucus and debris, cilia prevent pathogens from reaching distal lung regions (4). Efficient mucociliary clearance also minimizes prolonged exposure of epithelial cells to inflammatory mediators and environmental toxins. A study published by Fahy et al in 2021 showed that impaired mucociliary clearance is associated with increased risk of bacterial biofilm formation, chronic airway inflammation, and recurrent respiratory infections (14).',
          'Respiratory viral infections have shown to damage ciliated epithelial cells directly where viruses such as influenza and SARS-CoV-2 cause ciliary loss, abnormal beating patterns, epithelial disruption, and impaired mucociliary transport, thereby increasing vulnerability to secondary bacterial infections (15).',
        ],
      },
      {
        heading: 'Environmental Factors Affecting Respiratory Cilia',
        paragraphs: [
          'Cigarette Smoke: One of the most important acquired causes of ciliary dysfunction has been proven time and again to be cigarette smoke. Tobacco smoke exposure affects the cilia in a number of ways, mainly reducing ciliary beat frequency and causing its shortening and also causing a loss of ciliated epithelial cells; it also adversely causes goblet cell hyperplasia with increased mucus production (16). Apart from this, oxidative stress and inflammatory mediators generated by smoking also contribute to damaging both ciliary ultrastructure and epithelial integrity. Chronic impairment of mucociliary clearance contributes ultimately to COPD pathogenesis.',
          'Air Pollution: With air pollution on the rise, it is not surprising that particulate matter, industrial pollutants, and toxic gases are seen to be linked towards impairing ciliary motility and epithelial health. Fine particulate pollutants penetrate deep into the airways and induce oxidative injury, inflammation, and mucus hypersecretion (17). Urban air pollution is increasingly recognized as an important contributor to chronic airway diseases through its effects on mucociliary defense mechanisms (17).',
          'Viral Infections: Respiratory viruses directly act on and damage airway epithelial cells and impair mucociliary transport. Severe respiratory viral infection has shown to reduce ciliary density and disrupt ciliary coordination, causing epithelial shedding and altering mucus composition (15). Because of this, post-viral ciliary dysfunction may contribute to persistent respiratory symptoms and chronic airway inflammation.',
        ],
      },
      {
        heading: 'Ciliary Dysfunction and Respiratory Diseases',
        paragraphs: [
          'Primary Ciliary Dyskinesia (PCD): Primary ciliary dyskinesia is a rare inherited disorder affecting approximately 1 in 10,000–20,000 individuals with autosomal recessive inheritance patterns and is characterized by abnormal ciliary structure or motility resulting in defective mucociliary clearance (5,18).',
          'Genetics of PCD involves more than 50 genes that control the structure and assembly of PCD (19,20). These genes encode directly for proteins involved in dynein arm formation, axonemal assembly, radial spoke stabilization and intraflagellar transport. Recent genotype-phenotype studies have demonstrated substantial clinical variability depending on the underlying mutation (20). Certain genetic defects are associated with more severe lung disease, earlier bronchiectasis, and faster decline in pulmonary function.',
          'Pathophysiology of PCD involves defective ciliary motility that leads to impaired mucus clearance and chronic retention of secretions within the airways. Persistent mucus stasis promotes bacterial colonization, recurrent infections, and chronic neutrophilic inflammation (18). With time, chronic inflammation damages airway walls and causes progressive bronchiectasis. The frequent occurrence of infections further impairs lung growth and pulmonary function.',
          'Longitudinal study of lung disease in primary ciliary dyskinesia by Davis et al. have shown that early diagnosis and aggressive airway clearance therapy significantly improve long-term outcomes in PCD patients (21).',
          'Chronic Obstructive Pulmonary Disease (COPD): COPD is associated with multiple abnormalities in mucociliary clearance including reduced ciliary density, ciliary shortening and impaired ciliary coordination along with excess mucus production and airway dehydration (16). All of these contribute together to increase susceptibility to respiratory infections and cause acute exacerbations.',
          'Cystic Fibrosis: Mutations in the CFTR chloride channel lead to impaired chloride and water transport across epithelial surfaces resulting in cystic fibrosis (12). This results in dehydration of airway surface liquid that compresses the periciliary layer and severely impairs mucociliary clearance. It is remarkable to note that although ciliary ultrastructure may remain relatively preserved, thick viscoelastic mucus prevents effective transport. Recent studies suggest that restoring airway hydration significantly improves ciliary efficiency and mucus clearance (22).',
          'Asthma: Asthma is associated with alteration in both ciliary coordination and ciliary orientation where microscopic examination shows epithelial inflammation, mucus hypersecretion, and altered ciliary coordination. Moreover, abnormalities linked to epithelial structure affect ciliary orientation and function and also seem to accompany severe asthma. Along with this, there is usually a rise in inflammatory cytokines such as IL-13 that promote goblet cell hyperplasia and mucus overproduction, which interfere with mucociliary transport (23).',
          'Chronic Rhinosinusitis: Patients with chronic rhinosinusitis have also shown to exhibit impaired mucociliary clearance frequently owing to epithelial inflammation, stasis in mucus movement, and altered ciliary function. Unfortunately, persistent impairment contributes to recurrent infections and chronic sinonasal symptoms (24) and poor quality of life.',
        ],
      },
      {
        heading: 'Diagnostic Advances in Ciliary Disorders',
        paragraphs: [
          'High-Speed Video Microscopy: Direct visualization of ciliary beat pattern and frequency can be done using high-speed video microscopy, and with time this technique has become an important diagnostic tool for PCD and acquired ciliary disorders (25).',
          'Electron Microscopy: The use of electron microscopy permits the identification of ultrastructural abnormalities such as dynein arm defects, central pair abnormalities and microtubular disorganization. Despite it being a useful tool, the number of cases of functional ciliary disorders cannot be ignored, where anatomical appearance is absolutely normal.',
          'Nasal Nitric Oxide Measurement: Patients with PCD have shown to have markedly reduced nasal nitric oxide levels. Based on this, nasal nitric oxide testing is being used as a screening tool due to its high sensitivity (26).',
          'Genetic Testing: Genetic studies have now proven to be diagnostic and also a preventive measure where next-generation sequencing panels can identify causative mutations in the majority of PCD patients. Also, genetic testing facilitates family counseling and prognostic assessment (20).',
          'Artificial Intelligence-Assisted Diagnostics: With advancing technology, especially in the field of medical devices, one of the promising tools available is an artificial intelligence-based image analysis system that works towards automated assessment of ciliary beat frequency, beat coordination and ultrastructural abnormalities. These technologies may improve diagnostic accessibility and reduce observer variability (27).',
        ],
      },
      {
        heading: 'Emerging Therapeutic Strategies',
        paragraphs: [
          'Airway Clearance Therapy: Certain physical maneuvers and management focus largely on providing mucus clearance using techniques like chest physiotherapy, positive expiratory pressure devices, oscillatory devices, etc. The role of regular exercise also cannot be overlooked or ignored as airway clearance remains central to management of PCD and bronchiectasis.',
          'Hypertonic Saline and Hydration Therapy: Hypertonic saline improves airway hydration, a proven fact, and because of that it enhances mucociliary transport by increasing periciliary liquid depth (22). Owing to that, hydration therapy is regarded as an indispensable supportive strategy in chronic airway diseases associated with impaired mucus clearance.',
          'Anti-inflammatory Therapies: Excessive neutrophilic inflammation has been directly linked to contribute significantly to airway damage in ciliary disorders. Keeping this in mind, many anti-inflammatory therapies targeting epithelial cytokines and inflammatory mediators are also currently under investigation (23).',
          'Gene Therapy: Experimental studies are ongoing for gene-editing approaches, and some advances in CRISPR-Cas9 technology and mRNA therapeutics have brought along a large interest in gene correction strategies for inherited ciliary disorders (20), as they may eventually provide disease-modifying treatment for PCD.',
          'Stem Cell and Regenerative Medicine: Studies are already being done involving airway epithelial stem cell therapies and organoid technologies for regeneration of damaged ciliated epithelium (28), as these methodologies can bring future treatment benefits for patients with severe airway injury and inherited ciliary disease.',
        ],
      },
      {
        heading: 'Future Directions',
        paragraphs: [
          'From the future perspectives, respiratory ciliary medicine needs to delve deeper into approaches involving modern technologies like precision medicine, personalized genetic therapies, AI-assisted and nanotechnology-based diagnosis and therapy. At the same time, experts need to look into regenerative airway medicine and advance care for improvement of the disorders.',
          'Also, integration of translational medicine, molecular genetics, and computational biology will surely lead to highly targeted therapies that may be capable of restoring normal mucociliary function (29).',
        ],
      },
      {
        heading: 'Declarations',
        paragraphs: ['Funding: None.', 'Conflicts of interest: None.'],
      },
    ],
    references: [
      'Ostrowski LE, et al. Mucociliary and cough clearance in primary ciliary dyskinesia. Ann Am Thorac Soc. 2026.',
      "West JB, Luks AM. West's Respiratory Physiology: The Essentials. 11th ed. Philadelphia: Wolters Kluwer; 2021.",
      'Joskova M, et al. Respiratory cilia as a therapeutic target of phosphodiesterase inhibitors. Front Pharmacol. 2020; 11:609.',
      'Bustamante-Marin XM, Ostrowski LE. Cilia and mucociliary clearance. Cold Spring Harb Perspect Biol. 2021;13(4): a028241.',
      'Awasthi S, et al. Primary ciliary dyskinesia: A review. Respir Med Res. 2025.',
      "Barrett KE, et al. Ganong's Review of Medical Physiology. 26th ed. New York: McGraw-Hill; 2019.",
      'Horani A, Ferkol TW. Advances in the genetics and biology of ciliary motility disorders. Lancet Respir Med. 2021;9(7):780–793.',
      'Shoemark A, et al. Motile ciliopathies and airway disease. Clin Chest Med. 2022;43(2):245–258.',
      'Gui L, et al. Cryo-electron tomography of respiratory cilia ultrastructure. Nature. 2021;595(7867):520–524.',
      'Marthin JK, Nielsen KG. Hand-held tidal breathing nasal nitric oxide measurement. Eur Clin Respir J. 2020;7(1):1730672.',
      'Boucher RC. Muco-obstructive lung diseases. N Engl J Med. 2022;386(20):1941–1953.',
      'Button B, et al. Roles of mucus adhesion and cohesion in cough clearance. Proc Natl Acad Sci USA. 2020;117(8):4287–4294.',
      'Guo H, Kanso E. Mucociliary transport in healthy and diseased environments. Biophys J. 2021;120(4):756–769.',
      'Fahy JV, Dickey BF. Airway mucus function and dysfunction. N Engl J Med. 2021;384(9):878–888.',
      'Robinot R, et al. SARS-CoV-2 infection damages airway motile cilia. Nat Commun. 2021; 12:4354.',
      'Higham A, et al. Ciliary dysfunction in COPD. Cells. 2021;10(9):2328.',
      'Muñoz X, et al. Air pollution and respiratory health. J Clin Med. 2020;9(10):3256.',
      'Kapania EM, et al. Primary ciliary dysfunction. StatPearls. 2022.',
      'Rubbo B, et al. Clinical features and management of children with primary ciliary dyskinesia in England. Arch Dis Child. 2020;105(8):724–729.',
      'Omran H, Loges NT. Genetics of primary ciliary dyskinesia: advances and future directions. Pediatr Pulmonol. 2026.',
      'Davis SD, et al. Longitudinal study of lung disease in primary ciliary dyskinesia. Am J Respir Crit Care Med. 2020;201(2):190–198.',
      'Donaldson SH, et al. Mucociliary clearance as an outcome measure for cystic fibrosis clinical research. Proc Am Thorac Soc. 2021;18(2):314–321.',
      'Porsbjerg C, Menzies-Gow A. Co-morbidities in severe asthma. J Allergy Clin Immunol Pract. 2022;10(2):375–386.',
      'Sedaghat AR. Chronic rhinosinusitis. Am Fam Physician. 2021;103(8):485–494.',
      'Shoemark A, et al. Accuracy of high-speed video analysis to diagnose primary ciliary dyskinesia. Chest. 2020;158(5):1865–1876.',
      'Lucas JS, et al. European Respiratory Society guidelines for diagnosis of primary ciliary dyskinesia. Eur Respir J. 2021;58(2):2001090.',
      'Quinn SP, et al. Artificial intelligence approaches for ciliary motion analysis. Diagnostics. 2025;15(4):622.',
      'Hawkins F, Kotton DN. Embryonic and induced pluripotent stem cells for lung regeneration. Ann Am Thorac Soc. 2021;18(5):757–764.',
      'Deprez M, et al. A single-cell atlas of the human healthy airways. Nature Med. 2020;26(3):447–457.',
    ],
    keywords: ['respiratory cilia', 'mucociliary clearance', 'airway defense', 'primary ciliary dyskinesia', 'pulmonary physiology', 'airway epithelium', 'respiratory disease'],
    articleType: 'review',
    accessType: 'open-access',
    volume: 1, issue: 1, year: 2026,
    publishedDate: '2026-07-01',
    pageStart: 18, pageEnd: 23,
    section: 'Pulmonology & Respiratory Medicine',
    pdfUrl: '/articles/ijrhm-2026-v1i1-004.pdf', citationCount: 0, viewCount: 241, downloadCount: 63,
    isFeatured: false, isMostRead: true,
    citation: {
      apa: 'Datta, A. (2026). Respiratory Cilia and Airway Defense: From Physiology to Clinical Disorders. International Journal of Rural Health and Medicine (IJRHM), 1(1), 18–23. https://doi.org/10.58723/ijrhm.2026.1.1.004',
      mla: 'Datta, Abhilasha. "Respiratory Cilia and Airway Defense: From Physiology to Clinical Disorders." International Journal of Rural Health and Medicine (IJRHM) 1.1 (2026): 18–23.',
      chicago: 'Datta, Abhilasha. 2026. "Respiratory Cilia and Airway Defense: From Physiology to Clinical Disorders." International Journal of Rural Health and Medicine (IJRHM) 1 (1): 18–23.',
      bibtex: '@article{datta2026respiratory,\n  author  = {Datta, Abhilasha},\n  title   = {Respiratory Cilia and Airway Defense: From Physiology to Clinical Disorders},\n  journal = {International Journal of Rural Health and Medicine (IJRHM)},\n  year    = {2026},\n  volume  = {1},\n  number  = {1},\n  pages   = {18--23},\n  doi     = {10.58723/ijrhm.2026.1.1.004}\n}',
    },
  },
  {
    id: 'ijrhm-2026-v1i1-005',
    doi: '10.58723/ijrhm.2026.1.1.005',
    title: 'A Large Choroidal Melanoma in an Indian Male: A Case Report with Clinicopathological Correlation',
    shortTitle: 'A Large Choroidal Melanoma in an Indian Male',
    authors: [
      { id: 'e1', name: 'Mohammad Ali', affiliation: 'Resident Surgical Officer, Index Medical College, Indore', country: 'India', isCorresponding: true },
      { id: 'e2', name: 'Sudhir Mahashabde', affiliation: 'Professor and Head, Ophthalmology, Index Medical College, Indore', country: 'India' },
      { id: 'e3', name: 'U. S. Tiwari', affiliation: 'Professor, Amaltas Institute of Medical Sciences, Dewas', country: 'India' },
      { id: 'e4', name: 'Swati Saxena', affiliation: 'Associate Professor, Index Medical College, Indore', country: 'India' },
      { id: 'e5', name: 'Ekta Rairikar', affiliation: 'Associate Professor, Index Medical College, Indore', country: 'India' },
    ],
    abstract: 'Background: Choroidal melanoma is the most common primary intraocular malignancy in adults. It arises from melanocytes of the uveal tract and is considerably rarer in Asian populations compared to Western cohorts. Because early symptoms may be absent or nonspecific, diagnosis can be delayed, particularly in regions where the disease is uncommon. Multimodal ocular imaging, supplemented by histopathological evaluation when tissue is available, is critical for establishing the diagnosis and guiding management. Case report: A 50-year-old man presented with a two-month history of progressive, painless vision loss in the right eye. Fundus examination showed a large, elevated, pigmented choroidal mass involving the posterior segment. B-scan ultrasonography demonstrated a dome-shaped intraocular lesion with low-to-medium internal acoustic reflectivity. Magnetic resonance imaging revealed a well-defined postero-medial intraocular mass that was hyperintense on T1-weighted images and hypointense on T2-weighted images. Systemic screening did not identify distant metastasis. Because of the tumor\'s size and poor visual potential, right-eye enucleation was performed. Histopathological examination confirmed spindle-cell choroidal melanoma measuring 19 mm in basal diameter and 9 mm in thickness, without optic nerve or extraocular invasion. Conclusion: Although rare in Asian populations, choroidal melanoma should be considered in middle-aged or older individuals with unexplained, progressive visual loss and a pigmented intraocular mass. This case underscores that for large tumors, enucleation remains the definitive treatment, and it highlights the essential need for structured long-term metastatic surveillance—with particular emphasis on hepatic monitoring—to optimize outcomes.',
    structuredAbstract: [
      { label: 'Background', text: 'Choroidal melanoma is the most common primary intraocular malignancy in adults. It arises from melanocytes of the uveal tract and is considerably rarer in Asian populations compared to Western cohorts. Because early symptoms may be absent or nonspecific, diagnosis can be delayed, particularly in regions where the disease is uncommon. Multimodal ocular imaging, supplemented by histopathological evaluation when tissue is available, is critical for establishing the diagnosis and guiding management.' },
      { label: 'Case report', text: 'A 50-year-old man presented with a two-month history of progressive, painless vision loss in the right eye. Fundus examination showed a large, elevated, pigmented choroidal mass involving the posterior segment. B-scan ultrasonography demonstrated a dome-shaped intraocular lesion with low-to-medium internal acoustic reflectivity. Magnetic resonance imaging revealed a well-defined postero-medial intraocular mass that was hyperintense on T1-weighted images and hypointense on T2-weighted images. Systemic screening did not identify distant metastasis. Because of the tumor\'s size and poor visual potential, right-eye enucleation was performed. Histopathological examination confirmed spindle-cell choroidal melanoma measuring 19 mm in basal diameter and 9 mm in thickness, without optic nerve or extraocular invasion.' },
      { label: 'Conclusion', text: 'Although rare in Asian populations, choroidal melanoma should be considered in middle-aged or older individuals with unexplained, progressive visual loss and a pigmented intraocular mass. This case underscores that for large tumors, enucleation remains the definitive treatment, and it highlights the essential need for structured long-term metastatic surveillance—with particular emphasis on hepatic monitoring—to optimize outcomes.' },
    ],
    sections: [
      {
        heading: 'Introduction',
        paragraphs: [
          'Choroidal melanoma is the most common primary intraocular malignancy in adults, arising from melanocytes within the uveal tract, most frequently the choroid, followed by the ciliary body and iris. Its incidence varies considerably by geography and ethnicity, being substantially higher in populations of European descent and markedly lower in Asian and African populations.',
          'Recognized risk factors include fair skin, light-colored irides, ocular or oculodermal melanocytosis, atypical cutaneous nevus syndrome, and certain inherited cancer-predisposition syndromes such as BAP1 tumor predisposition syndrome. Chronic sunlight exposure has a less clearly established role in uveal melanoma than in cutaneous melanoma.',
          'Clinically, choroidal melanoma may remain asymptomatic for a prolonged period, particularly when located peripherally, and is often detected incidentally on routine fundus examination. When symptomatic, patients typically present with blurred or progressively diminishing vision, photopsia, visual field defects, or, less commonly, pain from secondary angle-closure glaucoma or inflammation.',
          'Hematogenous spread to the liver is the dominant pattern of metastasis, reflecting the absence of intraocular lymphatics, and hepatic micrometastases may already be present at the time of initial diagnosis in a proportion of patients, even when systemic imaging is unremarkable. This underlies the rationale for long-term surveillance directed particularly at the liver.',
          'Diagnosis relies on a combination of clinical examination and multimodal imaging, including indirect ophthalmoscopy, B-scan ultrasonography, and, where available, magnetic resonance imaging, with histopathological confirmation obtained when the eye is enucleated or biopsied. We report a case of a large choroidal melanoma in an Indian male, highlighting the clinical, radiological, and histopathological features that guided diagnosis and management.',
        ],
      },
      {
        heading: 'Case Report',
        paragraphs: [
          'A 50-year-old man presented to the ophthalmology outpatient department with a two-month history of progressive, painless diminution of vision in the right eye. There was no history of trauma, ocular surgery, floaters, flashes of light, or pain. He had no significant past ocular or systemic history, and no family history of ocular malignancy.',
          'On examination, best-corrected visual acuity in the right eye was severely reduced, while the left eye was normal. The anterior segment of the right eye was unremarkable, with a clear cornea, quiet anterior chamber, and normally reactive pupil. Intraocular pressure was within normal limits bilaterally. Detailed findings of the ophthalmic examination are summarized in Table 1.',
          'Fundus examination of the right eye, performed after pupillary dilatation, revealed a large, elevated, dome-shaped, pigmented mass arising from the choroid and involving the posterior segment, with associated exudative changes in the surrounding retina. The left fundus was within normal limits.',
          'B-scan ultrasonography of the right eye demonstrated a dome-shaped, solid intraocular mass with low-to-medium internal acoustic reflectivity, choroidal excavation, and a surrounding shallow exudative retinal detachment — features characteristic of choroidal melanoma rather than other simulating lesions such as choroidal hemangioma or metastasis.',
          'Magnetic resonance imaging of the orbit was performed to further characterize the lesion and assess for extraocular extension. It revealed a well-defined, postero-medially located intraocular mass that was hyperintense on T1-weighted images and hypointense on T2-weighted images, a signal pattern consistent with the melanin content of the tumor, without evidence of extrascleral extension or optic nerve involvement.',
          'Systemic evaluation, including liver function tests and abdominal imaging, was performed to screen for distant metastatic disease. No evidence of hepatic or other systemic metastasis was identified at presentation. Given the large tumor size, extensive retinal detachment, and poor visual potential of the eye, right-eye enucleation was performed after appropriate counseling and informed consent.',
          'Gross examination of the enucleated globe revealed a large, dark brown to black, dome-shaped intraocular mass arising from the choroid, measuring 19 mm in basal diameter and 9 mm in thickness. On cut section, the tumor was seen to indent the retina without evidence of scleral or optic nerve invasion.',
          'Microscopic examination showed a proliferation of spindle-shaped melanoma cells with elongated nuclei, inconspicuous nucleoli, and abundant intracytoplasmic melanin pigment, arranged in interlacing fascicles, confirming the diagnosis of spindle-cell choroidal melanoma. There was no histological evidence of optic nerve invasion or extraocular extension.',
          'The postoperative course was uneventful. The patient was counseled regarding the need for lifelong systemic surveillance, with particular emphasis on periodic liver function tests and hepatic imaging, given the propensity of uveal melanoma for late hepatic metastasis. At the time of reporting, the patient remained free of systemic metastatic disease on follow-up.',
        ],
        tables: [
          {
            caption: 'Table 1. Ophthalmic examination findings',
            headers: ['Parameter', 'Right eye', 'Left eye'],
            rows: [
              ['Distance vision', 'Severely reduced', 'Normal'],
              ['Near vision', 'Reduced', 'Normal'],
              ['Cornea', 'Clear', 'Clear'],
              ['Conjunctiva', 'Normal', 'Normal'],
              ['Anterior chamber', 'Quiet, normal depth', 'Quiet, normal depth'],
              ['IOP', 'Within normal limits', 'Within normal limits'],
              ['Pupil', 'Normally reactive', 'Normally reactive'],
              ['Lens', 'Clear', 'Clear'],
              ['Lids', 'Normal', 'Normal'],
            ],
          },
        ],
      },
      {
        heading: 'Discussion',
        paragraphs: [
          'Choroidal melanoma is well established as the most common primary intraocular malignancy in adults in Western populations, but it remains comparatively rare in Asian populations, including in India. This disparity is thought to relate to differences in iris and skin pigmentation, ocular melanocytosis, and possibly genetic susceptibility factors, although the precise reasons remain incompletely understood.',
          'The clinical presentation in this case — progressive, painless loss of vision over two months in a middle-aged man — is typical of posteriorly located choroidal melanoma, where symptoms arise chiefly from macular involvement, exudative retinal detachment, or both, rather than from pain or inflammation, which are more characteristic of advanced or complicated tumors.',
          'Multimodal imaging played a central role in establishing the diagnosis in this patient. B-scan ultrasonography remains a cornerstone investigation for choroidal melanoma, as it reliably demonstrates the characteristic low-to-medium internal reflectivity, choroidal excavation, and acoustic hollowing that distinguish melanoma from other choroidal masses such as hemangioma, metastasis, or disciform scarring.',
          'Magnetic resonance imaging, while not routinely required for smaller or clinically unambiguous tumors, is valuable in larger lesions or where extraocular extension is a concern, owing to the characteristic T1-hyperintense, T2-hypointense signal pattern conferred by melanin, as was observed in this case, and its superior soft-tissue contrast for assessing orbital and optic nerve involvement.',
          'Histopathologically, choroidal melanomas are classified according to the modified Callender classification into spindle-cell, epithelioid, and mixed-cell types, with spindle-cell tumors, as in this patient, generally carrying a more favorable prognosis than epithelioid or mixed-cell tumors, which are associated with a higher risk of metastasis.',
          'Management of choroidal melanoma is guided principally by tumor size, location, and the visual potential of the eye. Eye-conserving approaches such as plaque brachytherapy or, less commonly, local resection are preferred for small-to-medium tumors with reasonable visual potential, whereas enucleation remains the standard of care for large tumors, tumors associated with extensive retinal detachment, or eyes with no useful vision, as was the case in this patient.',
          'The landmark Collaborative Ocular Melanoma Study (COMS) demonstrated no significant difference in overall survival between enucleation and plaque brachytherapy for medium-sized choroidal melanomas, but did not similarly evaluate large tumors, for which enucleation continues to be recommended given the limited efficacy of globe-conserving therapy and the poor visual prognosis in any case. For patients who develop metastatic disease, treatment options remain limited, and outcomes are generally poor, with liver-directed therapies and, more recently, immunotherapeutic agents such as tebentafusp being explored in metastatic uveal melanoma, though systemic treatment options remain an area of active investigation. In the present case, the large tumor size, extensive retinal detachment, and absent visual potential together supported the decision to proceed with enucleation rather than a globe-conserving approach.',
        ],
      },
      {
        heading: 'Conclusion',
        paragraphs: [
          'This case illustrates that although choroidal melanoma is uncommon in Asian populations, it must remain an important differential diagnosis in middle-aged or older patients presenting with unexplained, progressive visual loss and a pigmented intraocular mass, so that diagnosis and appropriate management are not unduly delayed.',
          'A systematic diagnostic approach combining clinical fundus examination with B-scan ultrasonography and, where indicated, magnetic resonance imaging allows accurate characterization of the tumor, while histopathological examination of the enucleated globe remains essential for confirming the diagnosis and cell type, which in turn informs prognosis.',
          'For large tumors with poor visual potential, as in this patient, enucleation remains the definitive treatment. Given the well-recognized risk of late hematogenous metastasis, particularly to the liver, structured lifelong systemic surveillance is essential to enable early detection and optimize long-term outcomes.',
        ],
      },
      {
        heading: 'Declarations',
        paragraphs: [
          'Declaration of patient consent: The authors certify that they have obtained appropriate patient consent for the publication of this case report and any accompanying clinical images.',
          'Conflicts of interest: None.',
        ],
      },
    ],
    references: [
      'Spagnolo F, Caltabiano G, Queirolo P. Uveal melanoma. Cancer Treat Rev. 2012;38(5):549-553.',
      'Singh AD, Turell ME, Topham AK. Uveal melanoma: trends in incidence, treatment, and survival. Ophthalmology. 2011;118(9):1881-1885.',
      'Kaliki S, Shields CL. Uveal melanoma: relatively rare but deadly cancer. Eye (Lond). 2017;31(2):241-257.',
      'Chattopadhyay C, Kim DW, Gombos DS, et al. Uveal melanoma: from diagnosis to treatment and the science in between. Cancer. 2016;122(15):2299-2312.',
      'Shields CL, Furuta M, Thangappan A, et al. Metastasis of uveal melanoma millimeter-by-millimeter in 8033 consecutive eyes. Arch Ophthalmol. 2009;127(8):989-998.',
      'Damato B. Progress in the management of patients with uveal melanoma. The 2012 Ashton Lecture. Eye (Lond). 2012;26(9):1157-1172.',
      'Kaliki S, Shields CL, Shields JA. Uveal melanoma: estimating prognosis. Indian J Ophthalmol. 2015;63(2):93-102.',
      'Coupland SE, Lake SL, Zeschnigk M, Damato BE. Molecular pathology of uveal melanoma. Eye (Lond). 2013;27(2):230-242.',
      'Shields JA, Shields CL. Management of posterior uveal melanoma: past, present, and future: the 2014 Charles L. Schepens lecture. Ophthalmology. 2015;122(2):414-428.',
      'Diener-West M, Earle JD, Fine SL, et al. The COMS randomized trial of iodine 125 brachytherapy for choroidal melanoma III: initial mortality findings. COMS Report No. 18. Arch Ophthalmol. 2001;119(7):969-982.',
      'Collaborative Ocular Melanoma Study Group. The COMS randomized trial of iodine 125 brachytherapy for choroidal melanoma: V. Twelve-year mortality rates and prognostic factors. COMS Report No. 28. Arch Ophthalmol. 2006;124(12):1684-1693.',
      'Kujala E, Mäkitie T, Kivelä T. Very long-term prognosis of patients with malignant uveal melanoma. Invest Ophthalmol Vis Sci. 2003;44(11):4651-4659.',
      'Nathan P, Hassel JC, Rutkowski P, et al. Overall survival benefit with tebentafusp in metastatic uveal melanoma. N Engl J Med. 2021;385(13):1196-1206.',
      'Rietschel P, Panageas KS, Hanlon C, Patel A, Abramson DH, Chapman PB. Variates of survival in metastatic uveal melanoma. J Clin Oncol. 2005;23(31):8076-8080.',
      'Aronow ME, Topham AK, Singh AD. Uveal melanoma: 5-year update on incidence, treatment, and survival (SEER 1973-2013). Ocul Oncol Pathol. 2018;4(3):145-151.',
      'Weis E, Shah CP, Lajous M, Shields JA, Shields CL. The association between host susceptibility factors and uveal melanoma: a meta-analysis. Arch Ophthalmol. 2006;124(1):54-60.',
      'Singh AD, Bergman L, Seregard S. Uveal melanoma: epidemiologic aspects. Ophthalmol Clin North Am. 2005;18(1):75-84.',
      'Chadha V, Guleria S, Gupta S. Choroidal melanoma in Indian eyes: clinical profile and outcome. Indian J Ophthalmol. 2016;64(6):440-444.',
    ],
    keywords: ['choroidal melanoma', 'uveal melanoma', 'magnetic resonance imaging', 'histopathology', 'enucleation', 'metastasis', 'liver surveillance', 'ocular oncology'],
    articleType: 'case-study',
    accessType: 'open-access',
    volume: 1, issue: 1, year: 2026,
    publishedDate: '2026-07-01',
    pageStart: 24, pageEnd: 29,
    section: 'Ophthalmology & Oncology',
    pdfUrl: '/articles/ijrhm-2026-v1i1-005.pdf', citationCount: 0, viewCount: 530, downloadCount: 142,
    isFeatured: true, isMostRead: true,
    citation: {
      apa: 'Ali, M., Mahashabde, S., Tiwari, U. S., Saxena, S., & Rairikar, E. (2026). A Large Choroidal Melanoma in an Indian Male: A Case Report with Clinicopathological Correlation. International Journal of Rural Health and Medicine (IJRHM), 1(1), 24–29. https://doi.org/10.58723/ijrhm.2026.1.1.005',
      mla: 'Ali, Mohammad, et al. "A Large Choroidal Melanoma in an Indian Male: A Case Report with Clinicopathological Correlation." International Journal of Rural Health and Medicine (IJRHM) 1.1 (2026): 24–29.',
      chicago: 'Ali, Mohammad, Sudhir Mahashabde, U. S. Tiwari, Swati Saxena, and Ekta Rairikar. 2026. "A Large Choroidal Melanoma in an Indian Male: A Case Report with Clinicopathological Correlation." International Journal of Rural Health and Medicine (IJRHM) 1 (1): 24–29.',
      bibtex: '@article{ali2026large,\n  author  = {Ali, Mohammad and Mahashabde, Sudhir and Tiwari, U. S. and Saxena, Swati and Rairikar, Ekta},\n  title   = {A Large Choroidal Melanoma in an Indian Male: A Case Report with Clinicopathological Correlation},\n  journal = {International Journal of Rural Health and Medicine (IJRHM)},\n  year    = {2026},\n  volume  = {1},\n  number  = {1},\n  pages   = {24--29},\n  doi     = {10.58723/ijrhm.2026.1.1.005}\n}',
    },
  },
  {
    id: 'ijrhm-2026-v1i1-006',
    doi: '10.58723/ijrhm.2026.1.1.006',
    title: 'Removal of a Rare Foreign Body from the Right Secondary Bronchus',
    shortTitle: 'Foreign Body in the Right Secondary Bronchus',
    authors: [
      { id: 'f1', name: 'Shubham Bhatia', affiliation: 'Resident Surgical Officer, Dept. of ENT, Shri Aurobindo Institute of Medical Sciences, Indore', country: 'India', isCorresponding: true },
      { id: 'f2', name: 'Praveen Surana', affiliation: 'Associate Professor, Dept. of ENT, Shri Aurobindo Institute of Medical Sciences, Indore', country: 'India' },
      { id: 'f3', name: 'V. R. Munjal', affiliation: 'Professor and Head, Dept. of ENT, Shri Aurobindo Institute of Medical Sciences, Indore', country: 'India' },
    ],
    abstract: 'Foreign body aspiration is an important airway emergency, particularly in the paediatric age group. We report an 8-year-old boy who presented one day after accidentally inhaling a broken whistle, with cough, breathing difficulty, a whistling sound on forceful expiration, and reduced air entry with rhonchi and expiratory wheeze on the right side. Chest X-ray was normal, but a CT scan of the neck and chest revealed a 7 mm hyperdense cylindrical foreign body in the distal right secondary bronchus, approximately 2.5 cm distal to the carina, causing partial obstruction with air trapping in the right lower lobe. The foreign body was successfully removed in two pieces via rigid bronchoscopy with optical forceps under sedation, followed by a check bronchoscopy to confirm complete clearance and postoperative observation in the paediatric intensive care unit. The child remained stable throughout recovery. This case illustrates that a normal chest radiograph does not exclude airway foreign body aspiration, and it reinforces rigid bronchoscopy as the diagnostic and therapeutic gold standard for paediatric tracheobronchial foreign bodies.',
    sections: [
      {
        heading: 'Introduction',
        paragraphs: [
          'Foreign body aspiration is an important airway emergency, particularly in paediatric age group. Children are especially vulnerable due to their tendency to place objects in their mouths, immature protective airway reflexes, and incomplete coordination between swallowing and respiration. Aspirated foreign bodies can become lodged in the larynx, trachea, or bronchial tree, based on their size, shape, and type. When they reach the bronchi, they may cause cough, wheezing, diminished airflow, respiratory distress, or sometimes only mild symptoms. Prompt diagnosis and removal are essential to prevent complications such as airway obstruction, atelectasis, pneumonia, and bronchiectasis.',
        ],
      },
      {
        heading: 'Case Report',
        paragraphs: [
          'An 8-year-old male child, firstborn, resident of Ratlam, presented to emergency department with a history of accidental foreign body inhalation one day before admission. According to mother\'s history, the child had apparently been well until accidentally inhaling a broken whistle. Following the incident, he developed cough, difficulty in breathing, and a whistling sound during forceful expiration.',
          'There was no significant past medical or surgical history. On general examination, child was conscious, oriented, afebrile, and in fair general condition. There was no pallor, icterus, cyanosis, lymphadenopathy, or oedema. Respiratory examination revealed an oxygen saturation of 98% on room air and a respiratory rate of 22 breaths per minute. The patient showed no signs of acute respiratory distress. However, reduced air entry was noted on the right side, accompanied by rhonchi and expiratory wheezing. Cardiovascular exam revealed normal S1 and S2 sounds with no murmurs. Abdominal and neurological examinations were unremarkable.',
          'Investigations: Routine blood investigations showed haemoglobin of 13.9 g%, platelet count of 4.48 lakhs, and total leukocyte count of 18,200/mm³. Renal function tests were within normal limits, with urea/creatinine of 17/0.49 mg/dL. Serum electrolytes were normal, with sodium 140 mEq/L, potassium 4.18 mEq/L, and chloride 105 mEq/L.',
          'Chest X-ray showed clear bilateral lung fields. However, a CT scan of the neck and chest revealed a 7 mm hyperdense cylindrical structure, suggestive of a foreign body, located in the distal right secondary bronchus approximately 2.5 cm distal to the carina. It was causing partial obstruction with air trapping in the right lower lobe. No other significant abnormality was detected on CT scan. Based on the clinical and radiological findings, a diagnosis of non-vegetative foreign body in the right secondary bronchus was made.',
          'Management: The patient was planned for rigid bronchoscopic foreign body removal using optical forceps. High-risk consent, consent for possible postoperative ICU care, and ventilator consent were obtained. After pre-anaesthetic clearance, the patient was taken for surgery.',
          'Under sedation, the child was placed in the supine position. A Macintosh laryngoscope was introduced into the oral cavity under direct vision, followed by insertion of a rigid bronchoscope of size 3.5 into the trachea. The carina was visualized using optical forceps. The foreign body was identified in the distal part of the right secondary bronchus.',
          'The foreign body was removed in two pieces after two attempts. A bronchoscopy was subsequently performed to rule out any retained foreign body fragments. Thick mucopurulent pus was suctioned from the airway. Bronchoscopic images confirmed visualisation and successful removal of the foreign body.',
        ],
      },
      {
        heading: 'Postoperative Care',
        paragraphs: [
          'Postoperatively, the child was shifted to the paediatric intensive care unit for observation for one day. Intravenous antibiotics were administered to prevent pulmonary infection. Strict oxygen saturation monitoring was maintained. Nebulization with budesonide and salbutamol was given, along with chest physiotherapy. The child remained stable during the postoperative period.',
        ],
      },
      {
        heading: 'Discussion',
        paragraphs: [
          'Foreign body aspiration remains a potentially life-threatening condition in children. The nature, size, and shape of the foreign body influence its site of lodgement. Larger foreign bodies may become impacted at the level of the glottis or sub glottis, while smaller objects may pass into the trachea or bronchial tree. Sharp foreign bodies such as pins, needles, and fish bones can become lodged anywhere in the laryngo-tracheo-bronchial tree.',
          'Children are at increased risk because they commonly place objects in the mouth and may cry, walk, or run while holding objects orally. In addition, lack of molars, immature swallowing coordination, elevated laryngeal position, and underdeveloped protective reflexes contribute to the risk of aspiration. In adults, aspiration may occur during coma, deep sleep, alcohol intoxication, anaesthesia, or due to loose teeth and dentures.',
          'The most common symptoms of airway foreign body aspiration include choking, cough, wheeze, and decreased breath sounds. In the present case, the child had cough, breathing difficulty, a whistling sound on expiration, reduced right-sided air entry, and wheeze. Although the chest X-ray was normal, the CT scan clearly demonstrated the foreign body in the right secondary bronchus with associated air trapping. This highlights the importance of advanced imaging when clinical suspicion remains high despite a normal chest radiograph.',
          'The gold standard for diagnosing and treating pediatric tracheobronchial foreign bodies is still rigid bronchoscopy. It makes safe foreign object extraction, direct viewing, and airway management easier. In this instance, the broken whistle pieces were successfully removed using rigid bronchoscopy and optical forceps, after which a check bronchoscopy is performed to guarantee full clearance.',
        ],
      },
      {
        heading: 'Conclusion',
        paragraphs: [
          'Foreign body aspiration should be suspected in any child presenting with a sudden onset cough, wheeze, unilateral reduced air entry, or abnormal respiratory sounds following a choking episode. A normal chest X-ray does not exclude the diagnosis. CT scan can help localise radiopaque or suspected foreign bodies, especially when symptoms persist.',
          'The best course of action is still early intervention with rigid bronchoscopy. Preventing morbidity and guaranteeing positive results requires prompt diagnosis, cautious airway management, total removal, and suitable postoperative care.',
        ],
      },
    ],
    references: [
      'Kryger M, Bode F, Antic R, Anthonisen N. Diagnosis of obstruction of the upper and central airways. Am J Med. 1976;61(1):85-93.',
      'Jackson C, Jackson CL. Bronchoesophagology. WB Sauders; Philadelphia: 1950. Bronchoscopy; pp. 50-67.',
      'Tietjen PA, Kaner RJ, Quinn CE. Aspiration emergencies. Clin Chest Med. 1994;15(1):117-135.',
      'Heimlich HJ. A life-saving manoeuvre to prevent food choking. JAMA. 1975;234(4):398-401.',
      'Kim IG, Brummitt WM, Humphry A, Siomara SW, Wallace WB. Foreign body in the airway: a review of 202 cases. Laryngoscope. 1973;83(3):347-354.',
    ],
    keywords: ['foreign body aspiration', 'rigid bronchoscopy', 'paediatric airway', 'secondary bronchus', 'airway obstruction'],
    articleType: 'case-study',
    accessType: 'open-access',
    volume: 1, issue: 1, year: 2026,
    publishedDate: '2026-07-01',
    pageStart: 30, pageEnd: 32,
    section: 'Otorhinolaryngology',
    pdfUrl: '/articles/ijrhm-2026-v1i1-006.pdf', citationCount: 0, viewCount: 187, downloadCount: 49,
    isFeatured: false, isMostRead: false,
    citation: {
      apa: 'Bhatia, S., Surana, P., & Munjal, V. R. (2026). Removal of a Rare Foreign Body from the Right Secondary Bronchus. International Journal of Rural Health and Medicine (IJRHM), 1(1), 30–32. https://doi.org/10.58723/ijrhm.2026.1.1.006',
      mla: 'Bhatia, Shubham, Praveen Surana, and V. R. Munjal. "Removal of a Rare Foreign Body from the Right Secondary Bronchus." International Journal of Rural Health and Medicine (IJRHM) 1.1 (2026): 30–32.',
      chicago: 'Bhatia, Shubham, Praveen Surana, and V. R. Munjal. 2026. "Removal of a Rare Foreign Body from the Right Secondary Bronchus." International Journal of Rural Health and Medicine (IJRHM) 1 (1): 30–32.',
      bibtex: '@article{bhatia2026removal,\n  author  = {Bhatia, Shubham and Surana, Praveen and Munjal, V. R.},\n  title   = {Removal of a Rare Foreign Body from the Right Secondary Bronchus},\n  journal = {International Journal of Rural Health and Medicine (IJRHM)},\n  year    = {2026},\n  volume  = {1},\n  number  = {1},\n  pages   = {30--32},\n  doi     = {10.58723/ijrhm.2026.1.1.006}\n}',
    },
  },
  {
    id: 'ijrhm-2026-v1i1-007',
    doi: '10.58723/ijrhm.2026.1.1.007',
    title: 'Retroperitoneal Caecal Perforation Secondary to Abdominal Tuberculosis: A Rare Case Report',
    shortTitle: 'Retroperitoneal Caecal Perforation from Abdominal TB',
    authors: [
      { id: 'g1', name: 'Kiran Shukla', affiliation: 'Resident Surgical Officer, Dept. of Surgery, Amaltas Institute of Medical Sciences, Dewas', country: 'India', isCorresponding: true },
      { id: 'g2', name: 'A. K. Pithawa', affiliation: 'Dean, Amaltas Institute of Medical Sciences, Dewas', country: 'India' },
      { id: 'g3', name: 'Indra Singh Sahani', affiliation: 'Professor, Dept. of Surgery, Amaltas Institute of Medical Sciences, Dewas', country: 'India' },
    ],
    abstract: 'Background: Abdominal tuberculosis remains an important cause of acute and subacute abdominal emergencies in endemic regions. Ileocecal involvement is common, but caecal perforation, particularly with retroperitoneal extension, is rare and may be diagnostically challenging. Case presentation: A 31-year-old woman, a known case of abdominal tuberculosis who had started anti-tubercular therapy 10 days earlier, presented with generalized abdominal pain, recurrent vomiting, obstipation and low-grade fever for six days. Clinical examination suggested peritonitis. Imaging showed pneumoperitoneum with bowel obstruction and computed tomography findings consistent with ileocecal tuberculosis. Colonoscopy revealed ulcerated mucosa with a tight narrowed segment, and biopsy was suggestive of tubercular colitis. Emergency exploratory laparotomy revealed a 1 x 1 cm caecal perforation, dense ileocecal adhesions and two completely non-passable strictures 30 cm and 70 cm proximal to the ileocecal junction. Right hemicolectomy with side-to-side jejuno-colic anastomosis and peritoneal toileting was performed. Histopathology showed granulomatous ileitis with epithelioid granulomas and Langhans-type giant cells, consistent with tuberculosis. Anti-tubercular therapy was continued postoperatively and the patient showed satisfactory clinical improvement. Conclusion: Retroperitoneal caecal perforation is a rare but potentially life-threatening manifestation of abdominal tuberculosis. In endemic settings, tuberculosis should remain an important differential diagnosis in patients presenting with intestinal obstruction, perforation or atypical ileocecal pathology. Early surgical intervention, histopathological confirmation and continuation of appropriate anti-tubercular therapy are central to a good outcome.',
    structuredAbstract: [
      { label: 'Background', text: 'Abdominal tuberculosis remains an important cause of acute and subacute abdominal emergencies in endemic regions. Ileocecal involvement is common, but caecal perforation, particularly with retroperitoneal extension, is rare and may be diagnostically challenging.' },
      { label: 'Case presentation', text: 'A 31-year-old woman, a known case of abdominal tuberculosis who had started anti-tubercular therapy 10 days earlier, presented with generalized abdominal pain, recurrent vomiting, obstipation and low-grade fever for six days. Clinical examination suggested peritonitis. Imaging showed pneumoperitoneum with bowel obstruction and computed tomography findings consistent with ileocecal tuberculosis. Colonoscopy revealed ulcerated mucosa with a tight narrowed segment, and biopsy was suggestive of tubercular colitis. Emergency exploratory laparotomy revealed a 1 x 1 cm caecal perforation, dense ileocecal adhesions and two completely non-passable strictures 30 cm and 70 cm proximal to the ileocecal junction. Right hemicolectomy with side-to-side jejuno-colic anastomosis and peritoneal toileting was performed. Histopathology showed granulomatous ileitis with epithelioid granulomas and Langhans-type giant cells, consistent with tuberculosis. Anti-tubercular therapy was continued postoperatively and the patient showed satisfactory clinical improvement.' },
      { label: 'Conclusion', text: 'Retroperitoneal caecal perforation is a rare but potentially life-threatening manifestation of abdominal tuberculosis. In endemic settings, tuberculosis should remain an important differential diagnosis in patients presenting with intestinal obstruction, perforation or atypical ileocecal pathology. Early surgical intervention, histopathological confirmation and continuation of appropriate anti-tubercular therapy are central to good outcome.' },
    ],
    sections: [
      {
        heading: 'Introduction',
        paragraphs: [
          'Abdominal tuberculosis may involve the gastrointestinal tract, peritoneum, mesenteric lymph nodes and solid abdominal viscera. Gastrointestinal disease most often affects the ileocecal region, where lymphoid tissue, relative stasis and absorptive activity favor involvement. Its clinical presentation is frequently nonspecific, with abdominal pain, fever, altered bowel habits, weight loss, obstruction or a palpable mass, and it may mimic Crohn disease, malignancy or other inflammatory conditions.',
          'Although abdominal tuberculosis usually responds to medical therapy, surgical treatment is required when complications occur, including perforation, abscess, fistula, bleeding, complete intestinal obstruction or obstruction that fails to respond to conservative management. Caecal perforation due to tuberculosis is uncommon, and isolated caecal perforation with retroperitoneal involvement is particularly rare. Intestinal perforation may also occur at the beginning of, during or after anti-tubercular therapy, sometimes as part of a paradoxical inflammatory response. We report a rare case of retroperitoneal caecal perforation associated with ileocecal tuberculosis and multiple strictures, managed successfully by emergency surgery and continuation of anti-tubercular therapy.',
        ],
      },
      {
        heading: 'Case Presentation',
        paragraphs: [
          'A 31-year-old woman presented to the emergency department in January 2025 with diffuse abdominal pain involving all quadrants, multiple episodes of vomiting, failure to pass flatus and stool, and low-grade fever for six days. She was a known case of abdominal tuberculosis and had been receiving anti-tubercular therapy for 10 days. There was no history of trauma or previous abdominal surgery.',
          'On examination, she had tachycardia with generalized abdominal tenderness and guarding. Routine blood investigations were within normal limits. Screening for HIV, HCV and HBsAg was negative. Erect abdominal radiography showed gas under the diaphragm. Ultrasonography of the abdomen showed dilated bowel loops with to-and-fro peristalsis, suggestive of intestinal obstruction.',
          'Contrast-enhanced computed tomography of the abdomen demonstrated multifocal circumferential asymmetric wall thickening involving the terminal ileum, ileocecal valve, caecum and proximal ascending colon over a segment longer than 13 cm, with transmural perifocal infiltration, necrotic regional ileocolic lymphadenopathy, a small hyperdense perifocal collection, a skip lesion in the mid-ileal region and short-segment proximal obstruction. A tubercular etiology was considered most likely. Colonoscopy showed thickened ulcerated mucosa with luminal narrowing just beyond the hepatic flexure; the scope could not be negotiated beyond the narrowed segment. Biopsy from this area was suggestive of tubercular colitis.',
          'In view of peritonitis with radiological evidence of perforation and obstruction, emergency exploratory laparotomy was performed. Intraoperatively, a 1 x 1 cm caecal perforation was identified, with multiple adhesions, most marked around the ileocecal junction. Two completely non-passable strictures were present approximately 30 cm and 70 cm proximal to the ileocecal junction. No abnormality was detected in the other abdominal organs. Right hemicolectomy with resection of diseased bowel, side-to-side jejuno-colic anastomosis and peritoneal toileting was performed. The specimen was sent for histopathological examination.',
          'Histopathology revealed non-caseating epithelioid granulomas surrounded by a rim of transformed lymphocytes, along with Langhans-type giant cells. The lamina propria showed dense lymphoid infiltration, consistent with granulomatous ileitis, most probably tuberculous ileitis. Chest radiography was normal, the Mantoux test was negative, erythrocyte sedimentation rate was 18 mm in the first hour and sputum CBNAAT was negative.',
          'Anti-tubercular therapy was continued postoperatively with isoniazid, rifampicin, pyrazinamide and ethambutol for the intensive phase, followed by isoniazid and rifampicin for the continuation phase. The patient showed satisfactory postoperative recovery with overall clinical improvement and remained under fortnightly follow-up.',
        ],
      },
      {
        heading: 'Discussion',
        paragraphs: [
          'The present case is notable for the coexistence of caecal perforation, ileocecal adhesions and two tight proximal strictures in a patient recently started on anti-tubercular therapy. Caecal perforation is more commonly associated with conditions such as diverticular disease, inflammatory bowel disease, closed-loop obstruction, ischemia, trauma and malignancy; tuberculosis is an uncommon cause. In intestinal tuberculosis, strictures and obstruction are frequent surgical presentations, whereas perforation is less common but carries significant morbidity and mortality.',
          'Ileocecal tuberculosis is a diagnostic challenge because symptoms are often nonspecific and microbiological tests may be negative. In this patient, chest radiograph, Mantoux test and sputum CBNAAT did not provide supportive evidence; however, the combination of CT findings, colonoscopic biopsy and postoperative histopathology supported the diagnosis. The presence of epithelioid granulomas with giant cells in the appropriate clinicoradiological setting is an important clue, although histology should always be interpreted along with clinical, radiological and microbiological findings.',
          'Perforation during the early phase of treatment has been described in intestinal tuberculosis and may reflect progression of an undetected lesion, transmural necrosis, obstruction-related pressure effects or a paradoxical inflammatory response to anti-tubercular therapy. The risk of delayed diagnosis is high because worsening abdominal symptoms may initially be attributed to drug intolerance, nonspecific gastroenteritis or subacute obstruction.',
          'Surgery in abdominal tuberculosis should be individualized. Current evidence supports operative intervention for acute complications such as free or contained perforation, abscess, fistula, massive bleeding, complete obstruction and obstruction that does not respond to medical treatment. Resection of the diseased segment with anastomosis is commonly performed when the patient is physiologically stable and local contamination is controlled; diversion may be required in unstable patients, gross contamination or poor bowel condition. Anti-tubercular therapy remains essential after surgery and should be continued according to national or international tuberculosis treatment guidance.',
          'This case emphasizes that a high index of suspicion must be maintained in endemic regions when a patient with suspected or confirmed abdominal tuberculosis develops acute abdomen, pneumoperitoneum or intestinal obstruction, even shortly after initiation of therapy. Early surgical exploration, adequate resection of diseased bowel, histopathological confirmation and continuation of anti-tubercular therapy can result in favorable outcome.',
        ],
      },
      {
        heading: 'Conclusion',
        paragraphs: [
          'Retroperitoneal caecal perforation is a rare and severe complication of abdominal tuberculosis. Because clinical manifestations may be nonspecific and routine tests can be negative, diagnosis requires integration of clinical suspicion, imaging, endoscopic biopsy and histopathology. In patients presenting with perforation and obstructing strictures, timely surgical intervention combined with appropriate anti-tubercular therapy is the key to successful management.',
        ],
      },
    ],
    references: [
      'Sharma MP, Bhatia V. Abdominal tuberculosis. Indian J Med Res. 2004;120(4):305-315.',
      'Weledji EP, Pokam BT. Abdominal tuberculosis: Is there a role for surgery? World J Gastrointest Surg. 2017;9(8):174-181.',
      'Prasai P, Joshi A, Poudel S, K C S, Pahari R. Cecal Perforation Following Intraperitoneal Abscess after Anti-tubercular Therapy: A Case Report. J Nepal Med Assoc. 2023;61(258):175-178.',
      'Leung VKS, Chu W, Lee VHM, Chau TN, Law ST, Lam SH. Tuberculosis intestinal perforation during anti-tuberculosis treatment. Hong Kong Med J. 2006;12(4):313-315.',
      'Dore P, Maurice JC, Rouffineau J, Carretier M, Babin P, Barbier J, et al. Intestinal perforation occurring at the beginning of treatment: a severe complication of bacillary tuberculosis. Rev Pneumol Clin. 1990;46:49-54.',
      'Kang SH, Moon HS, Park JH, Kim JS, Kang SH, Lee ES, et al. Intestinal perforation as a paradoxical reaction to antitubercular therapy: a case report. Ann Coloproctol. 2021;37(Suppl 1):S18-S23.',
      'Barot M, Yagnik VD, Patel K, Dawka S. Surgical management of abdominal tuberculosis: A prospective single-center study. Tzu Chi Med J. 2021;33(3):282-287.',
      'Di Buono G, Romano G, Amato G, Barletta G, Romano G, Adelfio N, et al. Surgical Management of Complicated Abdominal Tuberculosis: The First Systematic Review-New Treatments for an Ancient Disease and the State of the Art. J Clin Med. 2024;13(16):4894.',
      'World Health Organization. WHO consolidated guidelines on tuberculosis: module 4: treatment and care. Geneva: World Health Organization; 2025.',
    ],
    keywords: ['abdominal tuberculosis', 'caecal perforation', 'ileocecal tuberculosis', 'intestinal obstruction', 'right hemicolectomy', 'anti-tubercular therapy'],
    articleType: 'case-study',
    accessType: 'open-access',
    volume: 1, issue: 1, year: 2026,
    publishedDate: '2026-07-01',
    pageStart: 33, pageEnd: 35,
    section: 'General & GI Surgery',
    pdfUrl: '/articles/ijrhm-2026-v1i1-007.pdf', citationCount: 0, viewCount: 224, downloadCount: 57,
    isFeatured: false, isMostRead: false,
    citation: {
      apa: 'Shukla, K., Pithawa, A. K., & Sahani, I. S. (2026). Retroperitoneal Caecal Perforation Secondary to Abdominal Tuberculosis: A Rare Case Report. International Journal of Rural Health and Medicine (IJRHM), 1(1), 33–35. https://doi.org/10.58723/ijrhm.2026.1.1.007',
      mla: 'Shukla, Kiran, A. K. Pithawa, and Indra Singh Sahani. "Retroperitoneal Caecal Perforation Secondary to Abdominal Tuberculosis: A Rare Case Report." International Journal of Rural Health and Medicine (IJRHM) 1.1 (2026): 33–35.',
      chicago: 'Shukla, Kiran, A. K. Pithawa, and Indra Singh Sahani. 2026. "Retroperitoneal Caecal Perforation Secondary to Abdominal Tuberculosis: A Rare Case Report." International Journal of Rural Health and Medicine (IJRHM) 1 (1): 33–35.',
      bibtex: '@article{shukla2026retroperitoneal,\n  author  = {Shukla, Kiran and Pithawa, A. K. and Sahani, Indra Singh},\n  title   = {Retroperitoneal Caecal Perforation Secondary to Abdominal Tuberculosis: A Rare Case Report},\n  journal = {International Journal of Rural Health and Medicine (IJRHM)},\n  year    = {2026},\n  volume  = {1},\n  number  = {1},\n  pages   = {33--35},\n  doi     = {10.58723/ijrhm.2026.1.1.007}\n}',
    },
  },
];

export function getArticleById(id: string): Article | undefined {
  return articles.find((a) => a.id === id);
}

export function getArticlesByIssue(volume: number, issue: number): Article[] {
  return articles.filter((a) => a.volume === volume && a.issue === issue);
}

export function getFeaturedArticles(): Article[] {
  return articles.filter((a) => a.isFeatured);
}

export function getMostReadArticles(limit = 5): Article[] {
  return [...articles]
    .filter((a) => a.isMostRead)
    .sort((a, b) => b.viewCount - a.viewCount)
    .slice(0, limit);
}

export function searchArticles(query: string): Article[] {
  const q = query.toLowerCase();
  return articles.filter(
    (a) =>
      a.title.toLowerCase().includes(q) ||
      a.abstract.toLowerCase().includes(q) ||
      a.keywords.some((k) => k.toLowerCase().includes(q)) ||
      a.authors.some((au) => au.name.toLowerCase().includes(q)) ||
      a.section.toLowerCase().includes(q)
  );
}
