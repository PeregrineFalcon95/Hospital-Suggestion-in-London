let  main = function(){

    let box = document.getElementById("hospitalNameBox");
    box.style.display = "none";
    let list = document.getElementById('listOfHospital');
    let details = document.getElementById('detailsOfHospital');
    let information = document.getElementById('information');
    information.innerHTML = "";
    details.innerText = "";
    let hospitalName = document.getElementById("hospitalName");
    hospitalName.innerHTML = "";

    
    let hos1 = document.getElementById('hospital1');
    let hos2 = document.getElementById('hospital2');
    let hos3 = document.getElementById('hospital3');
    let hos4 = document.getElementById('hospital4');
    let hos5 = document.getElementById('hospital5');
    let hos6 = document.getElementById('hospital6');
    let hos7 = document.getElementById('hospital7');
    let hos8 = document.getElementById('hospital8');
    let hos9 = document.getElementById('hospital9');
    let hos10 = document.getElementById('hospital10');

    let map1 = document.getElementById('map1');
    map1.style.display = 'none';
    let map2 = document.getElementById('map2');
    map2.style.display = 'none';
    let map3 = document.getElementById('map3');
    map3.style.display = 'none';
    let map4 = document.getElementById('map4');
    map4.style.display = 'none';
    let map5 = document.getElementById('map5');
    map5.style.display = 'none';
    let map6 = document.getElementById('map6');
    map6.style.display = 'none';
    let map7 = document.getElementById('map7');
    map7.style.display = 'none';
    let map8 = document.getElementById('map8');
    map8.style.display = 'none';
    let map9 = document.getElementById('map9');
    map9.style.display = 'none';
    let map10 = document.getElementById('map10');
    map10.style.display = 'none';
    

    function makeAllClassEmpty()
    {   
        box.style.display = "none";
        information.innerHTML = "";
        hospitalName.innerHTML = "";
        document.getElementById('card1').style.display = "none";
        document.getElementById('card2').style.display = "none";
        document.getElementById('card3').style.display = "none";
        document.getElementById('card4').style.display = "none";
        document.getElementById('card5').style.display = "none";
        document.getElementById('card6').style.display = "none";
        document.getElementById('card7').style.display = "none";
        document.getElementById('card8').style.display = "none";
        document.getElementById('card9').style.display = "none";
        document.getElementById('card10').style.display = "none";
        
        details.innerText = "Details";
        document.getElementById('add1').style.display = "none";
        document.getElementById('add2').style.display = "none";
        document.getElementById('add3').style.display = "none";
        document.getElementById('add4').style.display = "none";
        document.getElementById('add5').style.display = "none";
        document.getElementById('add6').style.display = "none";
        document.getElementById('add7').style.display = "none";
        document.getElementById('add8').style.display = "none";
        document.getElementById('add9').style.display = "none";
        document.getElementById('add10').style.display = "none";

        hos1.style.display = "none";
        hos2.style.display = "none";
        hos3.style.display = "none";
        hos4.style.display = "none";
        hos5.style.display = "none";
        hos6.style.display = "none";
        hos7.style.display = "none";
        hos8.style.display = "none";
        hos9.style.display = "none";
        hos10.style.display = "none";

        map1.style.display = 'none';
        map2.style.display = 'none';
        map3.style.display = 'none';
        map4.style.display = 'none';
        map5.style.display = 'none';
        map6.style.display = 'none';
        map7.style.display = 'none';
        map8.style.display = 'none';
        map9.style.display = 'none';
        map10.style.display = 'none';

        details.className = "current";
        list.className = "";

    }

    
    list.addEventListener('click', function(){
        makeAllClassEmpty()
        details.className = "";
        list.className = "current";
        document.getElementById('card1').style.display = "block";
        document.getElementById('card2').style.display = "block";
        document.getElementById('card3').style.display = "block";
        document.getElementById('card4').style.display = "block";
        document.getElementById('card5').style.display = "block";
        document.getElementById('card6').style.display = "block";
        document.getElementById('card7').style.display = "block";
        document.getElementById('card8').style.display = "block";
        document.getElementById('card9').style.display = "block";
        document.getElementById('card10').style.display = "block";


        details.innerText = "";
        document.getElementById('add1').style.display = "block";
        document.getElementById('add2').style.display = "block";
        document.getElementById('add3').style.display = "block";
        document.getElementById('add4').style.display = "block";
        document.getElementById('add5').style.display = "block";
        document.getElementById('add6').style.display = "block";
        document.getElementById('add7').style.display = "block";
        document.getElementById('add8').style.display = "block";
        document.getElementById('add9').style.display = "block";
        document.getElementById('add10').style.display = "block";

        hos1.style.display = "block";
        hos2.style.display = "block";
        hos3.style.display = "block";
        hos4.style.display = "block";
        hos5.style.display = "block";
        hos6.style.display = "block";
        hos7.style.display = "block";
        hos8.style.display = "block";
        hos9.style.display = "block";
        hos10.style.display = "block";
    })

    hos1.addEventListener('click', function(){
        makeAllClassEmpty();
        box.style.display = "block";
        map1.style.display = 'block';
        hospitalName.innerHTML = "St Thomas' Hospital";
        information.innerHTML = "<br><b>Services</b>:<br>Adult congenital heart disease (ACHD) service,<br>Alcohol Care Team<br>Allergy service (adults), Anaesthetic service<br>Antibody incompatible kidney transplant<br>Bladder cancer services<br>Blood transfusion services<br>Bone marrow (stem cell) transplantation services<br>Cardiology services<br>Children's allergy service<br>Children's gastroenterology and nutrition service<br>Haematology services<br>HIV and kidney transplant<br>Orthotic community service<br>Women's dermatology service.";
    })
    

    hos2.addEventListener('click', function(){
        makeAllClassEmpty()
        box.style.display = "block";
        map2.style.display = 'block';
        hospitalName.innerHTML = "The Royal Victoria Infirmary Immunology and allergy unit";
        information.innerHTML = "<br><b>Services</b>:<br>Immunology and allergy unit<br>Audiology<br>Cardiothoracic Services (Heart & Lung)<br>Chronic fatigue clinic<br>Colorectal surgery, Dermatology<br>Ear Nose and Throat Service (ENT)<br>Endoscopy<br>Gastroenterology<br>Clinical genetics<br>Dermatology<br>Colorectal surgery<br>Radiotherapy<br>Community dental service<br>Community rehabilitation service<br>Orthodontics<br>Neurosciences Liver unit<br>Falls and syncope service<br>Gynaecology<br>Eye Department<br>Maternity.";
    })

    hos3.addEventListener('click', function(){
        makeAllClassEmpty()
        box.style.display = "block";
        map3.style.display = 'block';
        hospitalName.innerHTML = "Salford Royal Hospital";
        information.innerHTML = "<br><b>Services:</b><br>Accident and Emergency<br>Adult Social Care<br>Ageing and Complex Medicine (Care of the Elderly)<br>Allergy Service<br>Anticoagulant Service<br>Appreciation, Complaints or Concerns<br>Asthma Service - Children's<br>Audiology<br>Bariatric Services<br>Biochemistry<br>Bladder and Bowel Service<br>Cancer Services<br>Cardiology Medicine<br>Cardiovascular Rehabilitation Service<br>Care Homes Practice<br>CAST Team (COPD Assessment & Support)<br>Chaplaincy & Spiritual Care<br>Children's Community Nursing Services<br>Childrens 0-19 Service (Health Visiting, School Nursing and Family Nurse Partnership)<br>Children's Outpatient Department<br>Clinical Health Psychology";
    })

    hos4.addEventListener('click', function(){
        makeAllClassEmpty()
        box.style.display = "block";
        map4.style.display = 'block';
        hospitalName.innerHTML = "Cambridge University Hospitals";
        information.innerHTML = "<br>Services</b>:<br>Abdominal aortic aneurysm screening<br>Addenbrooke's Clinical Research Centre<br>Andrology<br>Bereavement care service<br>Birth afterthoughts<br>Blood service (NHS Blood and Transplant)<br>Brainbow<br>Breast Unit<br>Breathlessness intervention service<br>Cambridge Breast Cancer Research Unit (CBCRU)<br>Cambridge Eye Unit<br>Cambridge IVF<br>Cancer services<br>Cardiology (Heart)<br>Clinical genetics<br>Clinical Immunology<br>Clinical Microbiology & Public Health Laboratory<br>Colorectal unit<br>Communication Aid Service East of England (CASEE)<br>Core Biochemical Assay Laboratory<br>Critical care<br>Delivery Unit<br>Department of Medicine for the Elderly<br>Dermatology<br>Diabetes<br>Dialysis<br>Dyspepsia and other upper gastrointestinal disorders.";
    })
    
    hos5.addEventListener('click', function(){
        makeAllClassEmpty()
        box.style.display = "block";
        map5.style.display = 'block';
        hospitalName.innerHTML = "Hammersmith Hospital";
        information.innerHTML = "<br><b>Services:</b><br>Accident and emergency<br>Abdominal wall reconstruction<br>Acute oncology service<br>Bariatric surgery<br>Blood cancer<br>Blood transfusion<br>Neuro-oncology<br>Breast reconstruction surgery<br>Colorectal surgery<br>Cardiac imaging<br>Cancer services<br>Eczema<br>Electrophysiology and devices<br>Endocrine surgery<br>Endometriosis<br>Endoscopy<br>Haematology<br>Head and neck prosthetics<br>Cardiology<br>Heart failure<br>Immune haematology<br>Infectious diseases<br>IVF<br>Maternal medicine<br>Menopause<br>Movement disorders<br>Palliative care<br>Pathology<br>Plastic and reconstructive surgery<br>Skin cancer<br>Sexual health and HIV<br>Vascular surgery<br>Surgery<br>Gynaecology.";
    })
    
    hos6.addEventListener('click', function(){
        makeAllClassEmpty()
        box.style.display = "block";
        map6.style.display = 'block';
        hospitalName.innerHTML = "Chelsea and Westminster Hospital";
        information.innerHTML = "<br><b>Services:</b><br>Allergy service (children)<br>Ambulatory emergency care (AEC)<br>Anaesthetic services<br>Anaesthetic services (children)<br>Appointments office<br>Aquatic therapy (hydrotherapy)<br>Audiology<br>Beta Cell Centre for diabetes<br>Blood tests (children)<br>Blood tests (phlebotomy)<br>Burns anaesthetic service<br>Diabetes (children)<br>Ear, nose and throat<br>Endocrinology (children)<br>Menopause POI & PMS service<br>Neurology (children)<br>Nutrition and dietetics<br>Nutrition and dietetics (children)<br>Oncology (children)<br>Ophthalmology<br>Orthopaedics<br>Orthopaedics (children)<br>Pain management<br>Palliative care<br>Podiatry surgery<br>Psychology service (child/adolescent)<br>Renal medicine<br>Respiratory disease (children)Respiratory physiotherapy<br>Rheumatology<br>Safeguarding children<br>Scar management service<br>Children’s services<br>Diagnostic services<br>HIV & sexual health services.";
    })

    hos7.addEventListener('click', function(){
        makeAllClassEmpty()
        box.style.display = "block";
        map7.style.display = 'block';
        hospitalName.innerHTML = "National Hospital for Neurology and Neurosurgery";
        information.innerHTML = "<br><b>Services:</b><br>Acupuncture for migraine and tension-type headache<br>Acute Medical Unit (AMU)<br>Adult Cerebral Palsy<br>Adult diagnostic audiology<br>Andrology<br>Anticoagulation<br>Bariatric surgery<br>Bladder cancer<br>Blood diseases (clinical haematology)<br>Blood test department (Phlebotomy)<br>Blood transfusion<br>Brain Tumour Service (Neuro-Oncology)<br>Breast cancer<br>Cancer Academy<br>Cancer clinical trials<br>Cardiac imaging<br>Cardio-oncology<br>Cardiology outpatients<br>Laryngeal (larynx) cancer<br>Leukaemia, acute lymphoblastic (ALL)<br>Long-term-follow-up (LTFU): Late effects of Cancer<br>Lung cancer and interventional bronchoscopy service<br>Lung cancer<br>Lung function laboratory<br>UCLH lung cancer service<br>UCLH pleural service<br>Upper Gastrointestinal (GI) Service<br>Upper gastrointestinal cancer<br>Women's Health<br>Women’s Health Psychological Services (WHPS).";
    })

    hos8.addEventListener('click', function(){
        makeAllClassEmpty()
        box.style.display = "block";
        map8.style.display = 'block';
        hospitalName.innerHTML = "Weymouth Street Hospital";
        information.innerHTML = "<br><b>Services:</b><br>Allergies<br>Arthritis and Osteoporosis<br>Cardiology<br>Dermatology<br>Dexa<br>Ear, Nose and Throat (ENT)<br>Endocrine<br>Gastroenterology<br>General Practice (GP)<br>General Surgery<br>Gynaecology and Obstetrics<br>Knee Pain<br>Memory Clinic<br>Men’s Health and Fertility Clinic<br>Nurse Led Services<br>Ophthalmology<br>Oral and Maxillofacial<br>Orthopaedic<br>Osteopathy<br>Pain Management<br>Pathology<br>Pectus and Chest Wall Center<br>Physiotherapy Clinic<br>Plastic & Cosmetic Surgery<br>Podiatry<br>Prostate Clinic<br>Regenerative<br>Rib Pain Clinic<br>Sleep Studies<br>Spinal<br>Sports Medicine<br>Urology<br>Varicose, Spider and Thread Veins<br>Vascular<br>Wisdom Tooth Removal.";
    })

    hos9.addEventListener('click', function(){
        makeAllClassEmpty()
        box.style.display = "block";
        map9.style.display = 'block';
        hospitalName.innerHTML = "Royal Brompton Hospital";
        information.innerHTML = "<br><b>Services:</b><br>Aortic programme<br>Cardio-oncology<br>Complex coronary disease and refractory angina<br>Congenital heart disease<br>Heart assessment<br>Heart surgery<br>Transplantation<br>Asthma and allergy<br>Cancer services<br>Chronic obstructive pulmonary disease<br>Cystic fibrosis (adults)<br>General respiratory medicine<br>Lung surgery<br>Occupational lung disease<br>Respiratory infection and immunity<br>Respiratory physiology<br>Sleep and ventilation<br>Surgical oncology<br>Transplantation (lung)<br>Cardiac morphology<br>Children's cardiac care<br>Children's sleep and ventilation<br>Congenital heart disease service for children<br>Cystic fibrosis (children)<br>Fetal cardiology service<br>Information for children<br>Paediatric outpatients<br>Critical care and anaesthesia<br>Imaging<br>Non-clinical teams.";
    })

    hos10.addEventListener('click', function(){
        makeAllClassEmpty()
        box.style.display = "block";
        map10.style.display = 'block';
        hospitalName.innerHTML = "King's College Hospital";
        information.innerHTML = "<br><b>Services:</b><br>Accident and Emergency (A&E)<br>Acute Dental Care<br>Antenatal care<br>Antenatal scanning<br>Arthritis<br>Assisted conception<br>Asthma(children)<br>Bariatric dentistry<br>Bereavement support<br>Bile duct cancer<br>Blood disorders<br>Blood tests<br>Blood transfusions<br>Bone marrow transplantation<br>Bowel cancer<br>Gallbladder cancer<br>Gastroscopy<br>General paediatrics<br>Geriatric medicine<br>Gynae ultrasound<br>Mastectomy<br>Maternity<br>Maxillofacial prosthetics and reconstruction<br>Maxillofacial surgery<br>Menopause<br>Paediatric allergy<br>Paediatric endocrinology<br>Paediatric gastroenterology and nutrition<br>Paediatric haematology<br>Vagus nerve stimulation (VNS)<br>Vascular and endovascular surgery<br>Vascular ultrasound<br>Venous thromboembolism (VTE)<br>Video-EEG telemetry<br>Viral hepatitis<br>X-ray, general<br>X-ray, neuro.";
    })
    
    
}();