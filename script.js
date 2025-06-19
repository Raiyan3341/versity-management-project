// --- Hardcoded Data (GLOBAL - accessible by all scripts) ---
const departmentsData = [
    { id: "CSE001", name: "Computer Science and Engineering", head: "Dr. A. Rahman", students: 20, faculties: 15 },
    { id: "EEE001", name: "Electrical and Electronic Engineering", head: "Prof. S. Islam", students: 20, faculties: 15 },
    { id: "BAN001", name: "Bangla", head: "Dr. M. Akter", students: 20, faculties: 15 },
    { id: "ENG001", name: "English", head: "Prof. R. Chowdhury", students: 20, faculties: 15 },
    { id: "TEX001", name: "Textile Engineering", head: "Dr. K. Hassan", students: 20, faculties: 15 }
];

const studentsData = [
    // --- CSE Students ---
    // Semester 1
    { id: "CSE2024001", name: "Ali Ahmed", department: "Computer Science and Engineering", semester: 1, section: "A", gpa: 3.85, contact: "ali.ahmed@cse.edu" },
    { id: "CSE2024002", name: "Fahim Khan", department: "Computer Science and Engineering", semester: 1, section: "A", gpa: 3.70, contact: "fahim.khan@cse.edu" },
    { id: "CSE2024003", name: "Nadia Islam", department: "Computer Science and Engineering", semester: 1, section: "B", gpa: 3.92, contact: "nadia.islam@cse.edu" },
    { id: "CSE2024004", name: "Rahat Hasan", department: "Computer Science and Engineering", semester: 1, section: "B", gpa: 3.65, contact: "rahat.hasan@cse.edu" },
    { id: "CSE2024005", name: "Zara Rahman", department: "Computer Science and Engineering", semester: 1, section: "C", gpa: 3.95, contact: "zara.rahman@cse.edu" },
    { id: "CSE2024006", name: "Samiha Akter", department: "Computer Science and Engineering", semester: 1, section: "C", gpa: 3.80, contact: "samiha.akter@cse.edu" },
    { id: "CSE2024007", name: "Imran Chowdhury", department: "Computer Science and Engineering", semester: 1, section: "D", gpa: 3.78, contact: "imran.chowdhury@cse.edu" },
    { id: "CSE2024008", name: "Tisha Begum", department: "Computer Science and Engineering", semester: 1, section: "D", gpa: 3.60, contact: "tisha.begum@cse.edu" },
    { id: "CSE2024009", name: "Kabir Hossain", department: "Computer Science and Engineering", semester: 1, section: "E", gpa: 3.90, contact: "kabir.hossain@cse.edu" },
    { id: "CSE2024010", name: "Lima Khatun", department: "Computer Science and Engineering", semester: 1, section: "E", gpa: 3.73, contact: "lima.khatun@cse.edu" },

    // Semester 2
    { id: "CSE2024021", name: "Ahmed Faysal", department: "Computer Science and Engineering", semester: 2, section: "A", gpa: 3.80, contact: "ahmed.faysal@cse.edu" },
    { id: "CSE2024022", name: "Sara Jahan", department: "Computer Science and Engineering", semester: 2, section: "A", gpa: 3.75, contact: "sara.jahan@cse.edu" },
    { id: "CSE2024023", name: "Ruhul Amin", department: "Computer Science and Engineering", semester: 2, section: "B", gpa: 3.90, contact: "ruhul.amin@cse.edu" },
    { id: "CSE2024024", name: "Shanta Akter", department: "Computer Science and Engineering", semester: 2, section: "B", gpa: 3.68, contact: "shanta.akter@cse.edu" },
    { id: "CSE2024025", name: "Joy Kumar", department: "Computer Science and Engineering", semester: 2, section: "C", gpa: 3.93, contact: "joy.kumar@cse.edu" },
    { id: "CSE2024026", name: "Bristy Chowdhury", department: "Computer Science and Engineering", semester: 2, section: "C", gpa: 3.72, contact: "bristy.chowdhury@cse.edu" },
    { id: "CSE2024027", name: "Kamal Hasan", department: "Computer Science and Engineering", semester: 2, section: "D", gpa: 3.85, contact: "kamal.hasan@cse.edu" },
    { id: "CSE2024028", name: "Mina Begum", department: "Computer Science and Engineering", semester: 2, section: "D", gpa: 3.62, contact: "mina.begum@cse.edu" },
    { id: "CSE2024029", name: "Robin Islam", department: "Computer Science and Engineering", semester: 2, section: "E", gpa: 3.96, contact: "robin.islam@cse.edu" },
    { id: "CSE2024030", name: "Anika Rahman", department: "Computer Science and Engineering", semester: 2, section: "E", gpa: 3.78, contact: "anika.rahman@cse.edu" },

    // Semester 3
    { id: "CSE2024031", name: "Sajib Hossain", department: "Computer Science and Engineering", semester: 3, section: "A", gpa: 3.70, contact: "sajib.hossain@cse.edu" },
    { id: "CSE2024032", name: "Tamanna Khan", department: "Computer Science and Engineering", semester: 3, section: "A", gpa: 3.88, contact: "tamanna.khan@cse.edu" },

    // Semester 4
    { id: "CSE2024041", name: "Nasir Uddin", department: "Computer Science and Engineering", semester: 4, section: "A", gpa: 3.82, contact: "nasir.uddin@cse.edu" },
    { id: "CSE2024042", name: "Afia Akter", department: "Computer Science and Engineering", semester: 4, section: "A", gpa: 3.77, contact: "afia.akter@cse.edu" },

    // Semester 5 - Data from IMG-20250430-WA0005.jpg for Section C, GPA 4.00
    { id: "CSE220100053", name: "Wajio Tausif", department: "Computer Science and Engineering", semester: 5, section: "C", gpa: 4.00, contact: "wajio.tausif@cse.edu" },
    { id: "CSE220100121", name: "Mohammed", department: "Computer Science and Engineering", semester: 5, section: "C", gpa: 4.00, contact: "mohammed@cse.edu" },
    { id: "CSE230100843", name: "Arman Khan", department: "Computer Science and Engineering", semester: 5, section: "C", gpa: 4.00, contact: "arman.khan@cse.edu" },
    { id: "CSE230201103", name: "Mamun Hossain", department: "Computer Science and Engineering", semester: 5, section: "C", gpa: 4.00, contact: "mamun.hossain@cse.edu" },
    { id: "CSE230201188", name: "A.R.M Faiyaj", department: "Computer Science and Engineering", semester: 5, section: "C", gpa: 4.00, contact: "arm.faiyaj@cse.edu" },
    { id: "CSE230301387", name: "Yasmin Islam", department: "Computer Science and Engineering", semester: 5, section: "C", gpa: 4.00, contact: "yasmin.islam@cse.edu" },
    { id: "CSE230301411", name: "Jahidul Islam", department: "Computer Science and Engineering", semester: 5, section: "C", gpa: 4.00, contact: "jahidul.islam@cse.edu" },
    { id: "CSE230301417", name: "Md. Fahim", department: "Computer Science and Engineering", semester: 5, section: "C", gpa: 4.00, contact: "md.fahim@cse.edu" },
    { id: "CSE230301487", name: "Protam Chandra", department: "Computer Science and Engineering", semester: 5, section: "C", gpa: 4.00, contact: "protam.chandra@cse.edu" },
    { id: "CSE230301614", name: "Asif Ahmed", department: "Computer Science and Engineering", semester: 5, section: "C", gpa: 4.00, contact: "asif.ahmed@cse.edu" },
    { id: "CSE230301646", name: "Md. Tardin Yar", department: "Computer Science and Engineering", semester: 5, section: "C", gpa: 4.00, contact: "md.tardin.yar@cse.edu" },
    { id: "CSE230301704", name: "Md. Uzzal", department: "Computer Science and Engineering", semester: 5, section: "C", gpa: 4.00, contact: "md.uzzal@cse.edu" },
    { id: "CSE230301709", name: "Md. Asif Mondol", department: "Computer Science and Engineering", semester: 5, section: "C", gpa: 4.00, contact: "md.asif.mondol@cse.edu" },
    { id: "CSE240101986", name: "Abul Hasnat Anik", department: "Computer Science and Engineering", semester: 5, section: "C", gpa: 4.00, contact: "abul.anik@cse.edu" },
    { id: "CSE240101987", name: "Masum Islam", department: "Computer Science and Engineering", semester: 5, section: "C", gpa: 4.00, contact: "masum.islam@cse.edu" },
    { id: "CSE240101988", name: "Zareen Tasneem", department: "Computer Science and Engineering", semester: 5, section: "C", gpa: 4.00, contact: "zareen.tasneem@cse.edu" },
    { id: "CSE240101992", name: "Sumaiya Akter", department: "Computer Science and Engineering", semester: 5, section: "C", gpa: 4.00, contact: "sumaiya.akter@cse.edu" },
    { id: "CSE240102010", name: "Ahasanul Haque", department: "Computer Science and Engineering", semester: 5, section: "C", gpa: 4.00, contact: "ahasanul.haque@cse.edu" },
    { id: "CSE240102044", name: "Afroja Jim Orny", department: "Computer Science and Engineering", semester: 5, section: "C", gpa: 4.00, contact: "afroja.jim.orny@cse.edu" },
    { id: "CSE240102059", name: "Nusrat Jahan Bilkis", department: "Computer Science and Engineering", semester: 5, section: "C", gpa: 4.00, contact: "nusrat.jahan@cse.edu" },
    { id: "CSE240102080", name: "Mst. Sumaita", department: "Computer Science and Engineering", semester: 5, section: "C", gpa: 4.00, contact: "mst.sumaita@cse.edu" },
    { id: "CSE240102085", name: "Sumayyea Subath", department: "Computer Science and Engineering", semester: 5, section: "C", gpa: 4.00, contact: "sumayyea.subath@cse.edu" },
    { id: "CSE240102086", name: "Md Tahsin", department: "Computer Science and Engineering", semester: 5, section: "C", gpa: 4.00, contact: "md.tahsin@cse.edu" },
    { id: "CSE240102091", name: "Md. Farhadul Islam", department: "Computer Science and Engineering", semester: 5, section: "C", gpa: 4.00, contact: "md.farhadul.islam@cse.edu" },
    { id: "CSE240102098", name: "Rubaiyat Kamal", department: "Computer Science and Engineering", semester: 5, section: "C", gpa: 4.00, contact: "rubaiyat.kamal@cse.edu" },
    { id: "CSE240102100", name: "Shafiq Hasan", department: "Computer Science and Engineering", semester: 5, section: "C", gpa: 4.00, contact: "shafiq.hasan@cse.edu" },
    { id: "CSE240102110", name: "Rakib Hossain", department: "Computer Science and Engineering", semester: 5, section: "C", gpa: 4.00, contact: "rakib.hossain@cse.edu" },
    { id: "CSE240102131", name: "MD. RAYAN BIN", department: "Computer Science and Engineering", semester: 5, section: "C", gpa: 4.00, contact: "rayan.bin@cse.edu" },
    { id: "CSE240102132", name: "Mahamud Hasan", department: "Computer Science and Engineering", semester: 5, section: "C", gpa: 4.00, contact: "mahamud.hasan@cse.edu" },
    { id: "CSE240102134", name: "Abdur Rahman", department: "Computer Science and Engineering", semester: 5, section: "C", gpa: 4.00, contact: "abdur.rahman@cse.edu" },
    { id: "CSE240102139", name: "Md. Arafat Uddin", department: "Computer Science and Engineering", semester: 5, section: "C", gpa: 4.00, contact: "arafat.uddin@cse.edu" },
    { id: "CSE240102140", name: "Tania Akter", department: "Computer Science and Engineering", semester: 5, section: "C", gpa: 4.00, contact: "tania.akter@cse.edu" },
    { id: "CSE240102141", name: "Razmut Islam", department: "Computer Science and Engineering", semester: 5, section: "C", gpa: 4.00, contact: "razmut.islam@cse.edu" },
    { id: "CSE240102142", name: "Sadia Akter Mim", department: "Computer Science and Engineering", semester: 5, section: "C", gpa: 4.00, contact: "sadia.mim@cse.edu" },
    { id: "CSE240102143", name: "Saifuddin", department: "Computer Science and Engineering", semester: 5, section: "C", gpa: 4.00, contact: "saifuddin@cse.edu" },
    { id: "CSE240102147", name: "Nisha Rani Singha", department: "Computer Science and Engineering", semester: 5, section: "C", gpa: 4.00, contact: "nisha.singha@cse.edu" },
    { id: "CSE240102152", name: "S M Toufiqur", department: "Computer Science and Engineering", semester: 5, section: "C", gpa: 4.00, contact: "toufiqur@cse.edu" },
    { id: "CSE240102153", name: "Md. Shamim", department: "Computer Science and Engineering", semester: 5, section: "C", gpa: 4.00, contact: "md.shamim@cse.edu" },
    { id: "CSE240102160", name: "Kawsar Ahamed", department: "Computer Science and Engineering", semester: 5, section: "C", gpa: 4.00, contact: "kawsar.ahamed@cse.edu" },
    { id: "CSE240102161", name: "Abdur Rob", department: "Computer Science and Engineering", semester: 5, section: "C", gpa: 4.00, contact: "abdur.rob@cse.edu" },


    // Semester 6
    { id: "CSE2024061", name: "Shuvo Sen", department: "Computer Science and Engineering", semester: 6, section: "A", gpa: 3.79, contact: "shuvo.sen@cse.edu" },
    { id: "CSE2024062", name: "Shanta Debnath", department: "Computer Science and Engineering", semester: 6, section: "A", gpa: 3.86, contact: "shanta.debnath@cse.edu" },

    // Semester 7
    { id: "CSE2024071", name: "Asif Iqbal", department: "Computer Science and Engineering", semester: 7, section: "A", gpa: 3.90, contact: "asif.iqbal@cse.edu" },
    { id: "CSE2024072", name: "Nabila Tabassum", department: "Computer Science and Engineering", semester: 7, section: "A", gpa: 3.75, contact: "nabila.tabassum@cse.edu" },

    // Semester 8
    { id: "CSE2024081", name: "Jubayer Alam", department: "Computer Science and Engineering", semester: 8, section: "A", gpa: 3.83, contact: "jubayer.alam@cse.edu" },
    { id: "CSE2024082", name: "Tamanna Afroze", department: "Computer Science and Engineering", semester: 8, section: "A", gpa: 3.91, contact: "tamanna.afroze@cse.edu" },

    // Semester 9
    { id: "CSE2024091", name: "Robiul Alam", department: "Computer Science and Engineering", semester: 9, section: "A", gpa: 3.76, contact: "robiul.alam@cse.edu" },
    { id: "CSE2024092", name: "Naznin Akter", department: "Computer Science and Engineering", semester: 9, section: "A", gpa: 3.89, contact: "naznin.akter@cse.edu" },

    // Semester 10
    { id: "CSE2024101", name: "Faysal Haque", department: "Computer Science and Engineering", semester: 10, section: "A", gpa: 3.92, contact: "faysal.haque@cse.edu" },
    { id: "CSE2024102", name: "Sumona Begum", department: "Computer Science and Engineering", semester: 10, section: "A", gpa: 3.80, contact: "sumona.begum@cse.edu" },

    // Semester 11
    { id: "CSE2024111", name: "Imran Hossain", department: "Computer Science and Engineering", semester: 11, section: "A", gpa: 3.85, contact: "imran.hossain@cse.edu" },
    { id: "CSE2024112", name: "Sadia Rahman", department: "Computer Science and Engineering", semester: 11, section: "A", gpa: 3.74, contact: "sadia.rahman@cse.edu" },

    // Semester 12
    { id: "CSE2024121", name: "Md. Arif", department: "Computer Science and Engineering", semester: 12, section: "A", gpa: 3.95, contact: "md.arif@cse.edu" },
    { id: "CSE2024122", name: "Priyanka Das", department: "Computer Science and Engineering", semester: 12, section: "A", gpa: 3.87, contact: "priyanka.das@cse.edu" },

    // --- EEE Students ---
    // Semester 1
    { id: "EEE2024001", name: "Kamal Uddin", department: "Electrical and Electronic Engineering", semester: 1, section: "A", gpa: 3.75, contact: "kamal.uddin@eee.edu" },
    { id: "EEE2024002", name: "Laila Begum", department: "Electrical and Electronic Engineering", semester: 1, section: "A", gpa: 3.60, contact: "laila.begum@eee.edu" },

    // --- Bangla Students ---
    // Semester 1
    { id: "BAN2024001", name: "Rumi Akter", department: "Bangla", semester: 1, section: "A", gpa: 3.80, contact: "rumi.akter@bangla.edu" },
    { id: "BAN2024002", name: "Nurul Huda", department: "Bangla", semester: 1, section: "A", gpa: 3.70, contact: "nurul.huda@bangla.edu" },

    // --- English Students ---
    // Semester 1
    { id: "ENG2024001", name: "David Miller", department: "English", semester: 1, section: "A", gpa: 3.88, contact: "david.miller@english.edu" },
    { id: "ENG2024002", name: "Sarah Johnson", department: "English", semester: 1, section: "A", gpa: 3.75, contact: "sarah.johnson@english.edu" },

    // --- Textile Engineering Students ---
    // Semester 1
    { id: "TEX2024001", name: "Abdullah Al Noman", department: "Textile Engineering", semester: 1, section: "A", gpa: 3.70, contact: "abdullah.noman@textile.edu" },
    { id: "TEX2024002", name: "Fatema Akter", department: "Textile Engineering", semester: 1, section: "A", gpa: 3.60, contact: "fatema.akter@textile.edu" },
];

const facultiesData = [
    // CSE Faculties
    { id: "CSEF001", name: "Dr. Zobair Khan", department: "Computer Science and Engineering", designation: "Professor", email: "zobair.khan@cse.edu" },
    { id: "CSEF002", name: "Ms. Roksana Islam", department: "Computer Science and Engineering", designation: "Assistant Professor", email: "roksana.islam@cse.edu" },
    { id: "CSEF003", name: "Mr. Tanvir Hasan", department: "Computer Science and Engineering", designation: "Lecturer", email: "tanvir.hasan@cse.edu" },
    { id: "CSEF004", name: "Dr. Farida Yesmin", department: "Computer Science and Engineering", designation: "Professor", email: "farida.yesmin@cse.edu" },
    { id: "CSEF005", name: "Mr. Karim Ullah", department: "Computer Science and Engineering", designation: "Assistant Professor", email: "karim.ullah@cse.edu" },
    { id: "CSEF006", name: "Ms. Shumi Akter", department: "Computer Science and Engineering", designation: "Lecturer", email: "shumi.akter@cse.edu" },
    { id: "CSEF007", name: "Dr. Hasan Mahmud", department: "Computer Science and Engineering", designation: "Professor", email: "hasan.mahmud@cse.edu" },
    { id: "CSEF008", name: "Mr. Sifat Rahman", department: "Computer Science and Engineering", designation: "Assistant Professor", email: "sifat.rahman@cse.edu" },
    { id: "CSEF009", name: "Ms. Nabila Afsar", department: "Computer Science and Engineering", designation: "Lecturer", email: "nabila.afsar@cse.edu" },
    { id: "CSEF010", name: "Dr. Kamrul Islam", department: "Computer Science and Engineering", designation: "Professor", email: "kamrul.islam@cse.edu" },
    { id: "CSEF011", name: "Mr. Asif Iqbal", department: "Computer Science and Engineering", designation: "Assistant Professor", email: "asif.iqbal@cse.edu" },
    { id: "CSEF012", name: "Ms. Tania Sultana", department: "Computer Science and Engineering", designation: "Lecturer", email: "tania.sultana@cse.edu" },
    { id: "CSEF013", name: "Dr. Monir Hossain", department: "Computer Science and Engineering", designation: "Professor", email: "monir.hossain@cse.edu" },
    { id: "CSEF014", name: "Mr. Alomgir Kabir", department: "Computer Science and Engineering", designation: "Assistant Professor", email: "alomgir.kabir@cse.edu" },
    { id: "CSEF015", name: "Ms. Jarin Tasnim", department: "Computer Science and Engineering", designation: "Lecturer", email: "jarin.tasnim@cse.edu" },

    // EEE Faculties
    { id: "EEEF001", name: "Dr. Saifuddin Ahmed", department: "Electrical and Electronic Engineering", designation: "Professor", email: "saifuddin.ahmed@eee.edu" },
    { id: "EEEF002", name: "Ms. Nazma Begum", department: "Electrical and Electronic Engineering", designation: "Assistant Professor", email: "nazma.begum@eee.edu" },
    { id: "EEEF003", name: "Mr. Shakil Khan", department: "Electrical and Electronic Engineering", designation: "Lecturer", email: "shakil.khan@eee.edu" },
    { id: "EEEF004", name: "Dr. Khaled Mahmud", department: "Electrical and Electronic Engineering", designation: "Professor", email: "khaled.mahmud@eee.edu" },
    { id: "EEEF005", name: "Ms. Pervin Akter", department: "Electrical and Electronic Engineering", designation: "Assistant Professor", email: "pervin.akter@eee.edu" },
    { id: "EEEF006", name: "Mr. Rubel Miah", department: "Electrical and Electronic Engineering", designation: "Lecturer", email: "rubel.miah@eee.edu" },
    { id: "EEEF007", name: "Dr. Sumon Barua", department: "Electrical and Electronic Engineering", designation: "Professor", email: "sumon.barua@eee.edu" },
    { id: "EEEF008", name: "Ms. Lucky Khatun", department: "Electrical and Electronic Engineering", designation: "Assistant Professor", email: "lucky.khatun@eee.edu" },
    { id: "EEEF009", name: "Mr. Ripon Ali", department: "Electrical and Electronic Engineering", designation: "Lecturer", email: "ripon.ali@eee.edu" },
    { id: "EEEF010", name: "Dr. S. K. Roy", department: "Electrical and Electronic Engineering", designation: "Professor", email: "sk.roy@eee.edu" },
    { id: "EEEF011", name: "Ms. Mousumi Akter", department: "Electrical and Electronic Engineering", designation: "Assistant Professor", email: "mousumi.akter@eee.edu" },
    { id: "EEEF012", name: "Mr. Emon Chowdhury", department: "Electrical and Electronic Engineering", designation: "Lecturer", email: "emon.chowdhury@eee.edu" },
    { id: "EEEF013", name: "Dr. Joyanta Saha", department: "Electrical and Electronic Engineering", designation: "Professor", email: "joyanta.saha@eee.edu" },
    { id: "EEEF014", name: "Ms. Liza Islam", department: "Electrical and Electronic Engineering", designation: "Assistant Professor", email: "liza.islam@eee.edu" },
    { id: "EEEF015", name: "Mr. Bipul Chandra", department: "Electrical and Electronic Engineering", designation: "Lecturer", email: "bipul.chandra@eee.edu" },

    // Bangla Faculties
    { id: "BANF001", name: "Prof. Abul Kalam Azad", department: "Bangla", designation: "Professor", email: "abul.azad@bangla.edu" },
    { id: "BANF002", name: "Dr. Sharmin Akter", department: "Bangla", designation: "Assistant Professor", email: "sharmin.akter@bangla.edu" },
    { id: "BANF003", name: "Ms. Farida Khanam", department: "Bangla", designation: "Lecturer", email: "farida.khanam@bangla.edu" },
    { id: "BANF004", name: "Prof. Rashed Zaman", department: "Bangla", designation: "Professor", email: "rashed.zaman@bangla.edu" },
    { id: "BANF005", name: "Dr. Nahid Sultana", department: "Bangla", designation: "Assistant Professor", email: "nahid.sultana@bangla.edu" },
    { id: "BANF006", name: "Mr. Jamal Uddin", department: "Bangla", designation: "Lecturer", email: "jamal.uddin@bangla.edu" },
    { id: "BANF007", name: "Prof. Kamrun Nahar", department: "Bangla", designation: "Professor", email: "kamrun.nahar@bangla.edu" },
    { id: "BANF008", name: "Dr. Sumon Das", department: "Bangla", designation: "Assistant Professor", email: "sumon.das@bangla.edu" },
    { id: "BANF009", name: "Ms. Rina Parvin", department: "Bangla", designation: "Lecturer", email: "rina.parvin@bangla.edu" },
    { id: "BANF010", name: "Prof. Alamgir Hossain", department: "Bangla", designation: "Professor", email: "alamgir.hossain@bangla.edu" },
    { id: "BANF011", name: "Dr. Nazmul Hasan", department: "Bangla", designation: "Assistant Professor", email: "nazmul.hasan@bangla.edu" },
    { id: "BANF012", name: "Ms. Afrin Jahan", department: "Bangla", designation: "Lecturer", email: "afrin.jahan@bangla.edu" },
    { id: "BANF013", name: "Prof. Mizanur Rahman", department: "Bangla", designation: "Professor", email: "mizanur.rahman@bangla.edu" },
    { id: "BANF014", name: "Dr. Liza Akter", department: "Bangla", designation: "Assistant Professor", email: "liza.akter@bangla.edu" },
    { id: "BANF015", name: "Mr. Rubel Ahmed", department: "Bangla", designation: "Lecturer", email: "rubel.ahmed@bangla.edu" },

    // English Faculties
    { id: "ENGF001", name: "Prof. Edward Smith", department: "English", designation: "Professor", email: "edward.smith@english.edu" },
    { id: "ENGF002", name: "Dr. Sarah Adams", department: "English", designation: "Assistant Professor", email: "sarah.adams@english.edu" },
    { id: "ENGF003", name: "Mr. Daniel Brown", department: "English", designation: "Lecturer", email: "daniel.brown@english.edu" },
    { id: "ENGF004", name: "Prof. Olivia Wilson", department: "English", designation: "Professor", email: "olivia.wilson@english.edu" },
    { id: "ENGF005", name: "Dr. Robert Taylor", department: "English", designation: "Assistant Professor", email: "robert.taylor@english.edu" },
    { id: "ENGF006", name: "Ms. Sophia Martin", department: "English", designation: "Lecturer", email: "sophia.martin@english.edu" },
    { id: "ENGF007", name: "Prof. James White", department: "English", designation: "Professor", email: "james.white@english.edu" },
    { id: "ENGF008", name: "Dr. Emily Davis", department: "English", designation: "Assistant Professor", email: "emily.davis@english.edu" },
    { id: "ENGF009", name: "Mr. David Johnson", department: "English", designation: "Lecturer", email: "david.johnson@english.edu" },
    { id: "ENGF010", name: "Prof. Ava Lee", department: "English", designation: "Professor", email: "ava.lee@english.edu" },
    { id: "ENGF011", name: "Dr. William Green", department: "English", designation: "Assistant Professor", email: "william.green@english.edu" },
    { id: "ENGF012", name: "Ms. Mia Hall", department: "English", designation: "Lecturer", email: "mia.hall@english.edu" },
    { id: "ENGF013", name: "Prof. Joseph King", department: "English", designation: "Professor", email: "joseph.king@english.edu" },
    { id: "ENGF014", name: "Dr. Grace Wright", department: "English", designation: "Assistant Professor", email: "grace.wright@english.edu" },
    { id: "ENGF015", name: "Mr. Christopher Clark", department: "English", designation: "Lecturer", email: "christopher.clark@english.edu" },

    // Textile Engineering Faculties
    { id: "TEXF001", name: "Dr. Rehana Chowdhury", department: "Textile Engineering", designation: "Professor", email: "rehana.chowdhury@textile.edu" },
    { id: "TEXF002", name: "Mr. Imtiaz Ahmed", department: "Textile Engineering", designation: "Assistant Professor", email: "imtiaz.ahmed@textile.edu" },
    { id: "TEXF003", name: "Ms. Khadija Begum", department: "Textile Engineering", designation: "Lecturer", email: "khadija.begum@textile.edu" },
    { id: "TEXF004", name: "Dr. Shafiqul Islam", department: "Textile Engineering", designation: "Professor", email: "shafiqul.islam@textile.edu" },
    { id: "TEXF005", name: "Mr. Nasir Uddin", department: "Textile Engineering", designation: "Assistant Professor", email: "nasir.uddin@textile.edu" },
    { id: "TEXF006", name: "Ms. Sumaiya Akter", department: "Textile Engineering", designation: "Lecturer", email: "sumaiya.akter@textile.edu" },
    { id: "TEXF007", name: "Dr. Golam Sarwar", department: "Textile Engineering", designation: "Professor", email: "golam.sarwar@textile.edu" },
    { id: "TEXF008", name: "Mr. Tareq Aziz", department: "Textile Engineering", designation: "Assistant Professor", email: "tareq.aziz@textile.edu" },
    { id: "TEXF009", name: "Ms. Sanjida Khanam", department: "Textile Engineering", designation: "Lecturer", email: "sanjida.khanam@textile.edu" },
    { id: "TEXF010", name: "Dr. Fahim Murshed", department: "Textile Engineering", designation: "Professor", email: "fahim.murshed@textile.edu" },
    { id: "TEXF011", name: "Mr. Farhan Rahman", department: "Textile Engineering", designation: "Assistant Professor", email: "farhan.rahman@textile.edu" },
    { id: "TEXF012", name: "Ms. Afrin Sultana", department: "Textile Engineering", designation: "Lecturer", email: "afrin.sultana@textile.edu" },
    { id: "TEXF013", name: "Dr. Jamal Hossain", department: "Textile Engineering", designation: "Professor", email: "jamal.hossain@textile.edu" },
    { id: "TEXF014", name: "Mr. Alamin Miah", department: "Textile Engineering", designation: "Assistant Professor", email: "alamin.miah@textile.edu" },
    { id: "TEXF015", name: "Ms. Tanjila Haque", department: "Textile Engineering", designation: "Lecturer", email: "tanjila.haque@textile.edu" },
];

const coursesData = [
    // Computer Science and Engineering
    // Semester 1
    { code: "CSE101", title: "Programming Fundamentals", department: "Computer Science and Engineering", credits: 3, semester: 1, description: "Introduction to programming concepts using C++." },
    { code: "CSE102", title: "Discrete Mathematics", department: "Computer Science and Engineering", credits: 3, semester: 1, description: "Mathematical structures for computer science." },
    // Semester 2
    { code: "CSE201", title: "Data Structures & Algorithms", department: "Computer Science and Engineering", credits: 3, semester: 2, description: "Core concepts of data organization and algorithm efficiency." },
    { code: "CSE202", title: "Object-Oriented Programming", department: "Computer Science and Engineering", credits: 3, semester: 2, description: "Advanced programming with OOP principles and design patterns." },
    // Semester 3
    { code: "CSE301", title: "Database Management Systems", department: "Computer Science and Engineering", credits: 3, semester: 3, description: "Design, implementation, and management of databases." },
    { code: "CSE302", title: "Digital Logic Design", department: "Computer Science and Engineering", credits: 3, semester: 3, description: "Fundamentals of digital circuit design." },
    // Semester 4
    { code: "CSE401", title: "Operating Systems", department: "Computer Science and Engineering", credits: 3, semester: 4, description: "Concepts of operating systems and process management." },
    { code: "CSE402", title: "Computer Networks", department: "Computer Science and Engineering", credits: 3, semester: 4, description: "Principles of computer networking and protocols." },
    // Semester 5
    { code: "CSE501", title: "Software Engineering", department: "Computer Science and Engineering", credits: 3, semester: 5, description: "Software development methodologies and life cycles." },
    { code: "CSE502", title: "Artificial Intelligence", department: "Computer Science and Engineering", credits: 3, semester: 5, description: "Introduction to AI concepts and algorithms." },
    // Semester 6
    { code: "CSE601", title: "Web Technologies", department: "Computer Science and Engineering", credits: 3, semester: 6, description: "Development of web applications using modern technologies." },
    { code: "CSE602", title: "Compiler Design", department: "Computer Science and Engineering", credits: 3, semester: 6, description: "Principles and techniques of compiler construction." },
    // Semester 7
    { code: "CSE701", title: "Machine Learning", department: "Computer Science and Engineering", credits: 3, semester: 7, description: "Theory and application of machine learning algorithms." },
    { code: "CSE702", title: "Computer Graphics", department: "Computer Science and Engineering", credits: 3, semester: 7, description: "Fundamentals of image synthesis and manipulation." },
    // Semester 8
    { code: "CSE801", title: "Cyber Security", department: "Computer Science and Engineering", credits: 3, semester: 8, description: "Concepts and practices of information security." },
    { code: "CSE802", title: "Distributed Systems", department: "Computer Science and Engineering", credits: 3, semester: 8, description: "Design and implementation of distributed applications." },
    // Semester 9
    { code: "CSE901", title: "Image Processing", department: "Computer Science and Engineering", credits: 3, semester: 9, description: "Techniques for analyzing and manipulating digital images." },
    { code: "CSE902", title: "Data Mining", department: "Computer Science and Engineering", credits: 3, semester: 9, description: "Discovering patterns and insights from large datasets." },
    // Semester 10
    { code: "CSE1001", title: "Cloud Computing", department: "Computer Science and Engineering", credits: 3, semester: 10, description: "Concepts and services of cloud-based infrastructure." },
    { code: "CSE1002", title: "Big Data Analytics", department: "Computer Science and Engineering", credits: 3, semester: 10, description: "Processing and analyzing large volumes of data." },
    // Semester 11
    { code: "CSE1101", title: "Parallel Computing", department: "Computer Science and Engineering", credits: 3, semester: 11, description: "Techniques for concurrent execution of computations." },
    { code: "CSE1102", title: "Bioinformatics", department: "Computer Science and Engineering", credits: 3, semester: 11, description: "Application of computational methods to biological data." },
    // Semester 12
    { code: "CSE1201", title: "Capstone Project I", department: "Computer Science and Engineering", credits: 3, semester: 12, description: "First part of the final year project." },
    { code: "CSE1202", title: "Internship", department: "Computer Science and Engineering", credits: 3, semester: 12, description: "Practical experience in an industry setting." },


    // Electrical and Electronic Engineering
    // Semester 1
    { code: "EEE101", title: "Basic Electrical Circuits", department: "Electrical and Electronic Engineering", credits: 3, semester: 1, description: "Fundamentals of electrical circuit analysis." },
    { code: "EEE102", title: "Physics for Engineers", department: "Electrical and Electronic Engineering", credits: 3, semester: 1, description: "Applied physics principles for engineering." },
    // Semester 2
    { code: "EEE201", title: "Electronic Devices and Circuits", department: "Electrical and Electronic Engineering", credits: 3, semester: 2, description: "Study of diodes, transistors, and basic circuits." },
    { code: "EEE202", title: "Electric Machines I", department: "Electrical and Electronic Engineering", credits: 3, semester: 2, description: "Introduction to electric motors and generators." },
    // Semester 3
    { code: "EEE301", title: "Digital Signal Processing", department: "Electrical and Electronic Engineering", credits: 3, semester: 3, description: "Analysis and design of digital filters." },
    { code: "EEE302", title: "Power Systems I", department: "Electrical and Electronic Engineering", credits: 3, semester: 3, description: "Introduction to power generation and transmission." },


    // Bangla
    // Semester 1
    { code: "BAN101", title: "Modern Bangla Poetry", department: "Bangla", credits: 3, semester: 1, description: "An in-depth study of prominent modern Bangla poets." },
    { code: "BAN102", title: "History of Bangla Literature I", department: "Bangla", credits: 3, semester: 1, description: "Evolution of Bangla literature from ancient to medieval periods." },
    // Semester 2
    { code: "BAN201", title: "Bangla Novel: Form and Content", department: "Bangla", credits: 3, semester: 2, description: "Exploration of major Bangla novels and their themes." },
    { code: "BAN202", title: "Bangla Grammar and Linguistics", department: "Bangla", credits: 3, semester: 2, description: "Structure of Bangla language and linguistic theories." },


    // English
    // Semester 1
    { code: "ENG101", title: "Introduction to Literary Studies", department: "English", credits: 3, semester: 1, description: "Key concepts and theories in literary analysis." },
    { code: "ENG102", title: "English Phonetics and Phonology", department: "English", credits: 3, semester: 1, description: "Study of English speech sounds and sound systems." },
    // Semester 2
    { code: "ENG201", title: "Critical Reading and Writing", department: "English", credits: 3, semester: 2, description: "Developing advanced reading and argumentation skills." },
    { code: "ENG202", title: "History of English Literature I", department: "English", credits: 3, semester: 2, description: "Survey of English literature from Old English to the Renaissance." },


    // Textile Engineering
    // Semester 1
    { code: "TEX101", title: "Textile Raw Materials", department: "Textile Engineering", credits: 3, semester: 1, description: "Properties and processing of natural and synthetic fibers." },
    { code: "TEX102", title: "Basic Textile Calculations", department: "Textile Engineering", credits: 3, semester: 1, description: "Fundamental calculations in textile production." },
    // Semester 2
    { code: "TEX201", title: "Fabric Manufacturing", department: "Textile Engineering", credits: 3, semester: 2, description: "Principles of weaving, knitting, and non-woven fabric production." },
    { code: "TEX202", title: "Yarn Manufacturing I", department: "Textile Engineering", credits: 3, semester: 2, description: "Processes involved in spinning different types of yarns." },
];

const libraryData = [
    { id: "B001", title: "The Alchemist", author: "Paulo Coelho", genre: "Fiction", available: true },
    { id: "B002", title: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari", genre: "History", available: true },
    { id: "B003", title: "1984", author: "George Orwell", genre: "Dystopian", available: true },
    { id: "B004", title: "Cosmos", author: "Carl Sagan", genre: "Science", available: true },
    { id: "B005", title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", available: true },
    { id: "B006", title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance", available: true },
    { id: "B007", title: "The Lord of the Rings", author: "J.R.R. Tolkien", genre: "Fantasy", available: true },
    { id: "B008", title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", genre: "Science Fiction", available: true },
    { id: "B009", title: "Educated", author: "Tara Westover", genre: "Memoir", available: true },
    { id: "B010", title: "Dune", author: "Frank Herbert", genre: "Science Fiction", available: true },
    { id: "B011", title: "Crime and Punishment", author: "Fyodor Dostoevsky", genre: "Classic", available: true },
    { id: "B012", title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic", available: true },
    { id: "B013", title: "Atomic Habits", author: "James Clear", genre: "Self-help", available: true },
    { id: "B014", title: "Deep Work", author: "Cal Newport", genre: "Self-help", available: true },
    { id: "B015", title: "The Lean Startup", author: "Eric Ries", genre: "Business", available: true },
];

const cafeteriaData = [
    { id: "F001", name: "Chicken Biriyani", price: 180.00, category: "Main Course" },
    { id: "F002", name: "Vegetable Curry with Rice", price: 120.00, category: "Main Course" },
    { id: "F003", name: "Beef Burger", price: 150.00, category: "Fast Food" },
    { id: "F004", name: "French Fries", price: 80.00, category: "Snack" },
    { id: "F005", name: "Coffee (Hot)", price: 50.00, category: "Beverage" },
    { id: "F006", name: "Tea (Hot)", price: 30.00, category: "Beverage" },
    { id: "F007", name: "Cold Coffee", price: 70.00, category: "Beverage" },
    { id: "F008", name: "Mineral Water", price: 20.00, category: "Beverage" },
    { id: "F009", name: "Samosa (2 pcs)", price: 40.00, category: "Snack" },
    { id: "F010", name: "Vegetable Roll", price: 60.00, category: "Snack" },
    { id: "F011", name: "Doi Fuchka", price: 100.00, category: "Snack" },
    { id: "F012", name: "Sandwich", price: 90.00, category: "Snack" },
    { id: "F013", name: "Fruit Salad", price: 110.00, category: "Dessert" },
    { id: "F014", name: "Chocolate Cake Slice", price: 130.00, category: "Dessert" },
    { id: "F015", name: "Ice Cream", price: 70.00, category: "Dessert" },
];


document.addEventListener('DOMContentLoaded', () => {
    // --- Populate Hero Section Stats (only for index.html) ---
    const totalStudentsElement = document.getElementById('totalStudents');
    const totalFacultiesElement = document.getElementById('totalFaculties');

    if (totalStudentsElement) {
        totalStudentsElement.textContent = studentsData.length;
    }
    if (totalFacultiesElement) {
        totalFacultiesElement.textContent = facultiesData.length;
    }

    // --- Department Functions ---
    // Make renderDepartments global so it can be called from departments.html
    window.renderDepartments = () => {
        const departmentTableBody = document.getElementById('departmentTableBody');
        if (!departmentTableBody) return; // Exit if not on department page

        departmentTableBody.innerHTML = '';
        departmentsData.forEach(dept => {
            const row = departmentTableBody.insertRow();
            row.insertCell().textContent = dept.id;
            row.insertCell().textContent = dept.name;
            row.insertCell().textContent = dept.head;
            row.insertCell().textContent = dept.students;
            row.insertCell().textContent = dept.faculties;
        });
    };

    // --- Student Functions ---
    // Make populateStudentDepartmentFilters global
    window.populateStudentDepartmentFilters = () => {
        const studentDeptFilter = document.getElementById('studentDeptFilter');
        if (!studentDeptFilter) return; // Exit if not on student page

        const uniqueDepartments = ['all', ...new Set(studentsData.map(student => student.department))];
        studentDeptFilter.innerHTML = ''; // Clear previous options
        uniqueDepartments.forEach(deptName => {
            const option = document.createElement('option');
            option.value = deptName === 'all' ? 'all' : deptName;
            option.textContent = deptName === 'all' ? 'All Departments' : deptName;
            studentDeptFilter.appendChild(option);
        });
    };

    // Populate Student Semester Filters
    window.populateStudentSemesterFilters = () => {
        const studentSemesterFilter = document.getElementById('studentSemesterFilter');
        if (!studentSemesterFilter) return;

        const uniqueSemesters = ['all', ...new Set(studentsData.map(student => student.semester).sort((a, b) => a - b))];
        studentSemesterFilter.innerHTML = '';
        uniqueSemesters.forEach(sem => {
            const option = document.createElement('option');
            option.value = sem === 'all' ? 'all' : sem;
            option.textContent = sem === 'all' ? 'All Semesters' : `Semester ${sem}`;
            studentSemesterFilter.appendChild(option);
        });
    };

    // Populate Student Section Filters
    window.populateStudentSectionFilters = () => {
        const studentSectionFilter = document.getElementById('studentSectionFilter');
        if (!studentSectionFilter) return;

        const uniqueSections = ['all', ...new Set(studentsData.map(student => student.section).sort())];
        studentSectionFilter.innerHTML = '';
        uniqueSections.forEach(sec => {
            const option = document.createElement('option');
            option.value = sec === 'all' ? 'all' : sec;
            option.textContent = sec === 'all' ? 'All Sections' : `Section ${sec}`;
            studentSectionFilter.appendChild(option);
        });
    };


    // Make renderStudents global (updated to include semester and section)
    window.renderStudents = () => {
        const studentTableBody = document.getElementById('studentTableBody');
        const studentDeptFilter = document.getElementById('studentDeptFilter');
        const studentSemesterFilter = document.getElementById('studentSemesterFilter');
        const studentSectionFilter = document.getElementById('studentSectionFilter');
        const studentSearch = document.getElementById('studentSearch');

        if (!studentTableBody || !studentDeptFilter || !studentSemesterFilter || !studentSectionFilter || !studentSearch) return;

        studentTableBody.innerHTML = '';
        const selectedDept = studentDeptFilter.value;
        const selectedSemester = studentSemesterFilter.value;
        const selectedSection = studentSectionFilter.value;
        const searchTerm = studentSearch.value.toLowerCase();

        const filteredStudents = studentsData.filter(student => {
            const matchesDepartment = selectedDept === 'all' || student.department === selectedDept;
            const matchesSemester = selectedSemester === 'all' || student.semester.toString() === selectedSemester;
            const matchesSection = selectedSection === 'all' || student.section === selectedSection;
            const matchesSearch = student.id.toLowerCase().includes(searchTerm) ||
                                  student.name.toLowerCase().includes(searchTerm);
            return matchesDepartment && matchesSemester && matchesSection && matchesSearch;
        });

        filteredStudents.forEach(student => {
            const row = studentTableBody.insertRow();
            row.insertCell().textContent = student.id;
            row.insertCell().textContent = student.name;
            row.insertCell().textContent = student.department;
            row.insertCell().textContent = student.semester;
            row.insertCell().textContent = student.section;
            row.insertCell().textContent = student.gpa.toFixed(2);
            row.insertCell().textContent = student.contact;
        });
    };

    // Attach event listeners for students only if elements exist
    const studentDeptFilter = document.getElementById('studentDeptFilter');
    const studentSemesterFilter = document.getElementById('studentSemesterFilter');
    const studentSectionFilter = document.getElementById('studentSectionFilter');
    const studentSearch = document.getElementById('studentSearch');

    if (studentDeptFilter && studentSearch && studentSemesterFilter && studentSectionFilter) {
        studentDeptFilter.addEventListener('change', window.renderStudents);
        studentSemesterFilter.addEventListener('change', window.renderStudents);
        studentSectionFilter.addEventListener('change', window.renderStudents);
        studentSearch.addEventListener('keyup', window.renderStudents);
    }


    // --- Faculty Functions ---
    // Make populateFacultyDepartmentFilters global
    window.populateFacultyDepartmentFilters = () => {
        const facultyDeptFilter = document.getElementById('facultyDeptFilter');
        if (!facultyDeptFilter) return;

        const uniqueDepartments = ['all', ...new Set(facultiesData.map(faculty => faculty.department))];
        facultyDeptFilter.innerHTML = '';
        uniqueDepartments.forEach(deptName => {
            const option = document.createElement('option');
            option.value = deptName === 'all' ? 'all' : deptName;
            option.textContent = deptName === 'all' ? 'All Departments' : deptName;
            facultyDeptFilter.appendChild(option);
        });
    };

    // Make renderFaculties global
    window.renderFaculties = () => {
        const facultyTableBody = document.getElementById('facultyTableBody');
        const facultyDeptFilter = document.getElementById('facultyDeptFilter');
        const facultySearch = document.getElementById('facultySearch');

        if (!facultyTableBody || !facultyDeptFilter || !facultySearch) return;

        facultyTableBody.innerHTML = '';
        const selectedDept = facultyDeptFilter.value;
        const searchTerm = facultySearch.value.toLowerCase();

        const filteredFaculties = facultiesData.filter(faculty => {
            const matchesDepartment = selectedDept === 'all' || faculty.department === selectedDept;
            const matchesSearch = faculty.id.toLowerCase().includes(searchTerm) ||
                                  faculty.name.toLowerCase().includes(searchTerm);
            return matchesDepartment && matchesSearch;
        });

        filteredFaculties.forEach(faculty => {
            const row = facultyTableBody.insertRow();
            row.insertCell().textContent = faculty.id;
            row.insertCell().textContent = faculty.name;
            row.insertCell().textContent = faculty.department;
            row.insertCell().textContent = faculty.designation;
            row.insertCell().textContent = faculty.email;
        });
    };

    // Attach event listeners for faculties only if elements exist
    const facultyDeptFilter = document.getElementById('facultyDeptFilter');
    const facultySearch = document.getElementById('facultySearch');
    if (facultyDeptFilter && facultySearch) {
        facultyDeptFilter.addEventListener('change', window.renderFaculties);
        facultySearch.addEventListener('keyup', window.renderFaculties);
    }

    // --- Course Functions ---
    // Make populateCourseDepartmentFilters global
    window.populateCourseDepartmentFilters = () => {
        const courseDeptFilter = document.getElementById('courseDeptFilter');
        if (!courseDeptFilter) return;

        const uniqueDepartments = ['all', ...new Set(coursesData.map(course => course.department))];
        courseDeptFilter.innerHTML = '';
        uniqueDepartments.forEach(deptName => {
            const option = document.createElement('option');
            option.value = deptName === 'all' ? 'all' : deptName;
            option.textContent = deptName === 'all' ? 'All Departments' : deptName;
            courseDeptFilter.appendChild(option);
        });
    };

    // NEW: Populate Course Semester Filters
    window.populateCourseSemesterFilters = () => {
        const courseSemesterFilter = document.getElementById('courseSemesterFilter');
        if (!courseSemesterFilter) return;

        // Get unique semesters from coursesData and sort them numerically
        const uniqueSemesters = ['all', ...new Set(coursesData.map(course => course.semester).sort((a, b) => a - b))];
        courseSemesterFilter.innerHTML = ''; // Clear previous options
        uniqueSemesters.forEach(sem => {
            const option = document.createElement('option');
            option.value = sem === 'all' ? 'all' : sem;
            option.textContent = sem === 'all' ? 'All Semesters' : `Semester ${sem}`;
            courseSemesterFilter.appendChild(option);
        });
    };


    // Make renderCourses global (updated to include semester filter)
    window.renderCourses = () => {
        const courseTableBody = document.getElementById('courseTableBody');
        const courseDeptFilter = document.getElementById('courseDeptFilter');
        const courseSemesterFilter = document.getElementById('courseSemesterFilter'); // NEW
        const courseSearch = document.getElementById('courseSearch');

        if (!courseTableBody || !courseDeptFilter || !courseSemesterFilter || !courseSearch) return;

        courseTableBody.innerHTML = '';
        const selectedDept = courseDeptFilter.value;
        const selectedSemester = courseSemesterFilter.value; // NEW
        const searchTerm = courseSearch.value.toLowerCase();

        const filteredCourses = coursesData.filter(course => {
            const matchesDepartment = selectedDept === 'all' || course.department === selectedDept;
            // NEW: Check for semester match (convert to string for comparison)
            const matchesSemester = selectedSemester === 'all' || course.semester.toString() === selectedSemester;
            const matchesSearch = course.code.toLowerCase().includes(searchTerm) ||
                                  course.title.toLowerCase().includes(searchTerm);
            return matchesDepartment && matchesSemester && matchesSearch; // Include semester in filter logic
        });

        filteredCourses.forEach(course => {
            const row = courseTableBody.insertRow();
            row.insertCell().textContent = course.code;
            row.insertCell().textContent = course.title;
            row.insertCell().textContent = course.department;
            row.insertCell().textContent = course.semester; // Display semester
            row.insertCell().textContent = course.credits;
            row.insertCell().textContent = course.description;
        });
    };

    // Attach event listeners for courses only if elements exist
    const courseDeptFilter = document.getElementById('courseDeptFilter');
    const courseSemesterFilter = document.getElementById('courseSemesterFilter'); // NEW
    const courseSearch = document.getElementById('courseSearch');
    if (courseDeptFilter && courseSearch && courseSemesterFilter) { // Ensure new filter exists
        courseDeptFilter.addEventListener('change', window.renderCourses);
        courseSemesterFilter.addEventListener('change', window.renderCourses); // NEW
        courseSearch.addEventListener('keyup', window.renderCourses);
    }

    // --- Library Functions ---
    // Make renderLibraryBooks global
    window.renderLibraryBooks = () => {
        const libraryTableBody = document.getElementById('libraryTableBody');
        const bookSearch = document.getElementById('bookSearch');
        const bookAvailabilityFilter = document.getElementById('bookAvailabilityFilter');

        if (!libraryTableBody || !bookSearch || !bookAvailabilityFilter) return;

        libraryTableBody.innerHTML = '';
        const searchTerm = bookSearch.value.toLowerCase();
        const availabilityFilter = bookAvailabilityFilter.value;

        const filteredBooks = libraryData.filter(book => {
            const matchesSearch = book.id.toLowerCase().includes(searchTerm) ||
                                  book.title.toLowerCase().includes(searchTerm) ||
                                  book.author.toLowerCase().includes(searchTerm);
            const matchesAvailability = (availabilityFilter === 'all') ||
                                        (availabilityFilter === 'available' && book.available) ||
                                        (availabilityFilter === 'unavailable' && !book.available);
            return matchesSearch && matchesAvailability;
        });

        filteredBooks.forEach(book => {
            const row = libraryTableBody.insertRow();
            row.insertCell().textContent = book.id;
            row.insertCell().textContent = book.title;
            row.insertCell().textContent = book.author;
            row.insertCell().textContent = book.genre;
            const availabilityCell = row.insertCell();
            availabilityCell.textContent = book.available ? "Yes" : "No";
            availabilityCell.style.color = book.available ? 'green' : 'red';
            availabilityCell.style.fontWeight = 'bold';
        });
    };

    // Attach event listeners for library only if elements exist
    const bookSearch = document.getElementById('bookSearch');
    const bookAvailabilityFilter = document.getElementById('bookAvailabilityFilter');
    if (bookSearch && bookAvailabilityFilter) {
        bookSearch.addEventListener('keyup', window.renderLibraryBooks);
        bookAvailabilityFilter.addEventListener('change', window.renderLibraryBooks);
    }

    // --- Cafeteria Functions ---
    // Make populateMenuCategoryFilters global
    window.populateMenuCategoryFilters = () => {
        const menuCategoryFilter = document.getElementById('menuCategoryFilter');
        if (!menuCategoryFilter) return;

        const uniqueCategories = ['all', ...new Set(cafeteriaData.map(item => item.category))];
        menuCategoryFilter.innerHTML = '';
        uniqueCategories.forEach(category => {
            const option = document.createElement('option');
            option.value = category === 'all' ? 'all' : category;
            option.textContent = category === 'all' ? 'All Categories' : category;
            menuCategoryFilter.appendChild(option);
        });
    };

    // Make renderCafeteriaMenu global
    window.renderCafeteriaMenu = () => {
        const cafeteriaTableBody = document.getElementById('cafeteriaTableBody');
        const menuCategoryFilter = document.getElementById('menuCategoryFilter');
        const menuSearch = document.getElementById('menuSearch');

        if (!cafeteriaTableBody || !menuCategoryFilter || !menuSearch) return;

        cafeteriaTableBody.innerHTML = '';
        const selectedCategory = menuCategoryFilter.value;
        const searchTerm = menuSearch.value.toLowerCase();

        const filteredMenu = cafeteriaData.filter(item => {
            const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
            const matchesSearch = item.id.toLowerCase().includes(searchTerm) ||
                                  item.name.toLowerCase().includes(searchTerm);
            return matchesCategory && matchesSearch;
        });

        filteredMenu.forEach(item => {
            const row = cafeteriaTableBody.insertRow();
            row.insertCell().textContent = item.id;
            row.insertCell().textContent = item.name;
            row.insertCell().textContent = item.price.toFixed(2);
            row.insertCell().textContent = item.category;
        });
    };

    // Attach event listeners for cafeteria only if elements exist
    const menuCategoryFilter = document.getElementById('menuCategoryFilter');
    const menuSearch = document.getElementById('menuSearch');
    if (menuCategoryFilter && menuSearch) {
        menuCategoryFilter.addEventListener('change', window.renderCafeteriaMenu);
        menuSearch.addEventListener('keyup', window.renderCafeteriaMenu);
    }

    // --- Active Navigation Link Logic (for Home page only from script.js) ---
    const currentPath = window.location.pathname.split('/').pop();
    if (currentPath === 'index.html' || currentPath === '') { // '' for root path
        document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
        const homeLink = document.querySelector('nav a[href="index.html"]');
        if (homeLink) homeLink.classList.add('active');
    }

    // Add event listener for hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const nav = document.getElementById('mainNav');
    if (hamburger && nav) {
        hamburger.addEventListener('click', function() {
            nav.classList.toggle('open');
            hamburger.classList.toggle('active');
            // Update aria-expanded for accessibility
            hamburger.setAttribute('aria-expanded', nav.classList.contains('open'));
        });
    }
});