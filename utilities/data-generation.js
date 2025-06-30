export let systemValues = {
    generate: (title) => {

       

        switch (title) {
 

          case "File No":
            return [
              {
                "nameAr": "مدني",
                "nameEn": "Civil",
                "no": 5000
              },
              {
                "nameAr": "جنائي",
                "nameEn": "Criminal",
                "no": 5001
              },
              {
                "nameAr": "تأجير / إيجار",
                "nameEn": "Rental",
                "no": 5002
              },
              {
                "nameAr": "شيكات",
                "nameEn": "Cheques",
                "no": 5003
              },
              {
                "nameAr": "مرهون",
                "nameEn": "Mortgaged",
                "no": 5004
              },
              {
                "nameAr": "المبيعات والحجوزات",
                "nameEn": "Sales & Seizures",
                "no": 5005
              },
              {
                "nameAr": "الشؤون الشخصية",
                "nameEn": "Personal Affairs",
                "no": 5006
              },
              {
                "nameAr": "الإشعارات القانونية",
                "nameEn": "Legal Notices",
                "no": 5007
              },
              {
                "nameAr": "أمر دفع",
                "nameEn": "Order for Payment",
                "no": 5008
              },
              {
                "nameAr": "القضايا العامة",
                "nameEn": "General Cases",
                "no": 5009
              },
            ]

          case "Task Type":
            return [
              {
                "nameAr": "تقديم مستندات",
                "nameEn": "Apply Documents",
                "no": 100
              },
              {
                "nameAr": "محاسبة",
                "nameEn": "Accountant",
                "no": 101
              },
              {
                "nameAr": "عمل أجراء في ملف",
                "nameEn": "In the procedures",
                "no": 102
              },
              {
                "nameAr": "عادي",
                "nameEn": "normal",
                "no": 103
              },
              {
                "nameAr": "طباعة مذكرة",
                "nameEn": "Print memo",
                "no": 104
              },
              {
                "nameAr": "مهمة خاصة",
                "nameEn": "Special mission",
                "no": 105
              },
              {
                "nameAr": "تكليف بعمل خارجي",
                "nameEn": "Outside Work",
                "no": 106
              },
              {
                "nameAr": "قيد الدعوى جديدة",
                "nameEn": "case registration",
                "no": 107
              }
            ]

          case "Task Priority":
            return [{"nameAr":"مُستعجل","nameEn":"Urgent","no":200},{"nameAr":"عادي","nameEn":"normal","no":201}]

          case "Court Departments":
            return [
              {
                "nameAr": "الدائرة التجارية الاستئنافية",
                "nameEn": "Commercial Appeal Circuit",
                "no": 300
              },
              {
                "nameAr": "الدائرة التجارية الجزئية",
                "nameEn": "Commercial Summary Circuit",
                "no": 301
              },
              {
                "nameAr": "الدائرة التجارية الكلية",
                "nameEn": "Commercial Plenary Circuit",
                "no": 302
              },
              {
                "nameAr": "الدائرة المدنية الاستئنافبة",
                "nameEn": "Civil Appeal Circuit",
                "no": 303
              },
              {
                "nameAr": "دائرة الاحوال الشخصية",
                "nameEn": "Personal Status Circuit",
                "no": 304
              },
              {
                "nameAr": "دائرة الامور المستعجلة",
                "nameEn": "Summary Actions Circuit",
                "no": 305
              },
              {
                "nameAr": "دائرة الامور المستعجلة الاستئنافية",
                "nameEn": "Summary Actions- Appeal Circuit",
                "no": 306
              },
              {
                "nameAr": "دائرة التركات",
                "nameEn": "Legacies Circuit",
                "no": 307
              },
              {
                "nameAr": "دائرة التنفيذ العام",
                "nameEn": "General Execution Circuit",
                "no": 308
              },
              {
                "nameAr": "دائرة الجنايات الاستئنافية",
                "nameEn": "Criminal Appeals Circuit",
                "no": 309
              },
              {
                "nameAr": "دائرة الجنح",
                "nameEn": "Misdemeanors Circuit",
                "no": 310
              },
              {
                "nameAr": "دائرة الجنح الاستئنافية",
                "nameEn": "Criminal Misdemeanors Circuit",
                "no": 311
              },
              {
                "nameAr": "دائرة المدنية الجزئية",
                "nameEn": "Civil Summary Circuit",
                "no": 312
              },
              {
                "nameAr": "دائرة المدنية الكلية",
                "nameEn": "Civil Plenary Circuit",
                "no": 313
              },
              {
                "nameAr": "دائرة تنفيذ ايجارات",
                "nameEn": "Rental Execution Circuit",
                "no": 314
              },
              {
                "nameAr": "دائرة تنفيذ تجارى",
                "nameEn": "Commercial Execution Circuit",
                "no": 315
              },
              {
                "nameAr": "دائرة محكمة النقض",
                "nameEn": "Court of Cassation Circuit",
                "no": 316
              },
              {
                "nameAr": "عمالي كلي",
                "nameEn": "Labor Plenary",
                "no": 317
              },
              {
                "nameAr": "عمالى جزئى",
                "nameEn": "Labor Summary",
                "no": 318
              },
              {
                "nameAr": "تجارى جزئى",
                "nameEn": "Commercial Summary",
                "no": 319
              },
              {
                "nameAr": "التجارية الكلية",
                "nameEn": "Commercial Plenary",
                "no": 320
              },
              {
                "nameAr": "حجز تحفظى تجارى",
                "nameEn": "Commercial Prejudgment Attachment",
                "no": 321
              },
              {
                "nameAr": "تظلم تجارى",
                "nameEn": "Commercial Grievance",
                "no": 322
              },
              {
                "nameAr": "استئناف تجارى",
                "nameEn": "Commercial Appeal",
                "no": 323
              },
              {
                "nameAr": "استئناف مدنى",
                "nameEn": "Civil Appeal",
                "no": 324
              },
              {
                "nameAr": "استئناف جزاء",
                "nameEn": "Penal Appeal",
                "no": 325
              },
              {
                "nameAr": "طعن تجارى",
                "nameEn": "Commercial Appeal / Challenge",
                "no": 326
              },
              {
                "nameAr": "مدنى كلى",
                "nameEn": "Plenary Civil",
                "no": 327
              },
              {
                "nameAr": "مدنى جزئى",
                "nameEn": "Summary Civil",
                "no": 328
              },
              {
                "nameAr": "تجاري كلي",
                "nameEn": "Commercial Plenary",
                "no": 329
              },
              {
                "nameAr": "التماس اعاده نظر تجارى - استئناف",
                "nameEn": "Re-trial Commercial",
                "no": 330
              },
              {
                "nameAr": "لجنة فض المنازعات الإيجارية",
                "nameEn": "Rental Dispute Settlement Committee",
                "no": 331
              },
              {
                "nameAr": "دائره الجنح السادسة عشر",
                "nameEn": "Sixteenth Circuit Misdemeanors",
                "no": 332
              },
              {
                "nameAr": "عقارى كلى",
                "nameEn": "Plenary Real Estate",
                "no": 333
              },
              {
                "nameAr": "استئناف عمالى",
                "nameEn": "Labor Appeal",
                "no": 334
              },
              {
                "nameAr": "جنايات",
                "nameEn": "Felonies",
                "no": 335
              },
              {
                "nameAr": "اشكالات عقارية",
                "nameEn": "Real Estate Oppositions",
                "no": 336
              },
              {
                "nameAr": "تظلم مدني",
                "nameEn": "Civil Grievance",
                "no": 337
              },
              {
                "nameAr": "تظلم تجاري",
                "nameEn": "Commercial Grievance",
                "no": 338
              },
              {
                "nameAr": "لجنة التوفيق والمصالحة",
                "nameEn": "Conciliation and Reconciliation Committee",
                "no": 339
              },
              {
                "nameAr": "الدائرة المدنية الثلاثية",
                "nameEn": "Tri-Civil District",
                "no": 340
              },
              {
                "nameAr": "شرعي",
                "nameEn": "Lawful",
                "no": 341
              },
              {
                "nameAr": "القضاء الاداري",
                "nameEn": "Administrative judiciary",
                "no": 342
              },
              {
                "nameAr": "الدائرة الجزائية",
                "nameEn": "Penal Department",
                "no": 343
              },
              {
                "nameAr": "فردي أيجارات",
                "nameEn": "Individual rentals",
                "no": 344
              },
              {
                "nameAr": "دائرة هيئة مغايرة",
                "nameEn": "Different body circle",
                "no": 345
              },
              {
                "nameAr": "غير ذلك",
                "nameEn": "Others",
                "no": 346
              },
              {
                "nameAr": "المدنية فردي",
                "nameEn": "simple civic",
                "no": 347
              },
              {
                "nameAr": "لجنة التوفيق و المصالحة",
                "nameEn": "Rental",
                "no": 348
              }
            ]

          case "Adjectives":
            return [
              {
                "nameAr": "مدعي",
                "nameEn": "Plaintiff",
                "no": 400
              },
              {
                "nameAr": "مدعي عليه",
                "nameEn": "Defendant",
                "no": 401
              },
              {
                "nameAr": "مُنذر",
                "nameEn": "Forewarn",
                "no": 402
              },
              {
                "nameAr": "مشتكي",
                "nameEn": "Complainant",
                "no": 403
              },
              {
                "nameAr": "مشتكي عليه",
                "nameEn": "Respondent",
                "no": 404
              },
              {
                "nameAr": "الشاكي",
                "nameEn": "Plaintiff",
                "no": 405
              },
              {
                "nameAr": "سلطة اتهام",
                "nameEn": "Accusation authority",
                "no": 406
              },
              {
                "nameAr": "محكوم له",
                "nameEn": "The judgement creditor",
                "no": 407
              },
              {
                "nameAr": "طاعن",
                "nameEn": "Challenger",
                "no": 408
              },
              {
                "nameAr": "متهم",
                "nameEn": "Defendant",
                "no": 409
              },
              {
                "nameAr": "متهم",
                "nameEn": "Accused",
                "no": 410
              },
              {
                "nameAr": "مجني عليه",
                "nameEn": "Victim",
                "no": 411
              },
              {
                "nameAr": "مستأنف",
                "nameEn": "Appellant",
                "no": 412
              },
              {
                "nameAr": "مستأنف ضده",
                "nameEn": "Respondent",
                "no": 413
              },
              {
                "nameAr": "مستشكل",
                "nameEn": "Objector",
                "no": 414
              },
              {
                "nameAr": "مستشكل ضده",
                "nameEn": "Respondent",
                "no": 415
              },
              {
                "nameAr": "مطعون ضده",
                "nameEn": "Respondent",
                "no": 416
              },
              {
                "nameAr": "منفذ",
                "nameEn": "Executor creditor",
                "no": 417
              },
              {
                "nameAr": "منفذ ضده",
                "nameEn": "Judgment debtor",
                "no": 418
              },
              {
                "nameAr": "الادعاء العام",
                "nameEn": "Prosecution",
                "no": 419
              },
              {
                "nameAr": "المطلوب ضدها",
                "nameEn": "Respondent / Defendant",
                "no": 420
              },
              {
                "nameAr": "خصم مدخل",
                "nameEn": "Implicated Litigant",
                "no": 421
              },
              {
                "nameAr": "طالب الاذن",
                "nameEn": "Permission applicant",
                "no": 422
              },
              {
                "nameAr": "طالب الحصر",
                "nameEn": "Heirship applicant",
                "no": 423
              },
              {
                "nameAr": "طالب التنفيذ",
                "nameEn": "Writ of execution",
                "no": 424
              },
              {
                "nameAr": "متهم معارض",
                "nameEn": "Accused objector",
                "no": 425
              },
              {
                "nameAr": "متوفي",
                "nameEn": "Deceased",
                "no": 426
              },
              {
                "nameAr": "ملتمس",
                "nameEn": "Petitioner",
                "no": 427
              },
              {
                "nameAr": "ملتمس ضده",
                "nameEn": "Respondent",
                "no": 428
              },
              {
                "nameAr": "منفذ له",
                "nameEn": "Executor creditor",
                "no": 429
              },
              {
                "nameAr": "متظلم",
                "nameEn": "Objector",
                "no": 430
              },
              {
                "nameAr": "متظلم ضده",
                "nameEn": "Respondent",
                "no": 431
              },
              {
                "nameAr": "متنازع",
                "nameEn": "Petitioner",
                "no": 432
              },
              {
                "nameAr": "متنازع ضده",
                "nameEn": "Respondent",
                "no": 433
              },
              {
                "nameAr": "معارض ضدة أول",
                "nameEn": "Opposed against the first",
                "no": 434
              },
              {
                "nameAr": "معارض ضدة ثاني",
                "nameEn": "Opposed against the second",
                "no": 435
              },
              {
                "nameAr": "معارض ضدة ثالث",
                "nameEn": "Opposed against a third",
                "no": 436
              },
              {
                "nameAr": "مدعي علية ثان",
                "nameEn": "Second plaintiff",
                "no": 437
              },
              {
                "nameAr": "مدعي علية ثالث",
                "nameEn": "Third plaintiff",
                "no": 438
              },
              {
                "nameAr": "مدعي علية رابع",
                "nameEn": "Fourth plaintiff",
                "no": 439
              }
            ]

          case "Procedures Type":
            return [
              {
                "nameAr": "وقف اجراء مؤقت",
                "nameEn": "Temporary Suspension",
                "no": 500
              },
              {
                "nameAr": "محضر جلسة",
                "nameEn": "Application for a hearing record",
                "no": 501
              },
              {
                "nameAr": "تقرير حسابي",
                "nameEn": "Accounts Report",
                "no": 502
              },
              {
                "nameAr": "انتظار الموافقة طلب ايجاري",
                "nameEn": "Waiting for approval of a rental application",
                "no": 503
              },
              {
                "nameAr": "تم الموافقة قيد طلب ايجاري",
                "nameEn": "Rental application is approved",
                "no": 504
              },
              {
                "nameAr": "مخاطبة عدم وجود ايداعات",
                "nameEn": "No deposits",
                "no": 505
              },
              {
                "nameAr": "تم قيد التنفيذ",
                "nameEn": "Execution has been filed",
                "no": 506
              },
              {
                "nameAr": "تصوير محضر جلسة",
                "nameEn": "Application for a hearing record",
                "no": 507
              },
              {
                "nameAr": "تأسيس شركة",
                "nameEn": "Company formation",
                "no": 508
              },
              {
                "nameAr": "متابعة قضية تنفيذ",
                "nameEn": "Follow up case execution",
                "no": 509
              },
              {
                "nameAr": "قيد التنفيذ (تحت الإجراء)",
                "nameEn": "In progress",
                "no": 510
              },
              {
                "nameAr": "تم اعلان المنفذ ضدة بالسند التنفيذى",
                "nameEn": "Notice served to the judgment debtor",
                "no": 511
              },
              {
                "nameAr": "إعلان بالسند التنفيذي",
                "nameEn": "Notice of execution",
                "no": 512
              },
              {
                "nameAr": "إفادة استعلام بنوك",
                "nameEn": "Bank inquiry statement",
                "no": 513
              },
              {
                "nameAr": "تقديم طلبات الاستعلام عن الأموال و الارضى والاملاك",
                "nameEn": "Submitting requests for money, land and property inquiries",
                "no": 514
              },
              {
                "nameAr": "تم غلق الملف",
                "nameEn": "File is closed",
                "no": 515
              },
              {
                "nameAr": "تم قيد الإشكال",
                "nameEn": "Objection / Opposistion has been filed",
                "no": 516
              },
              {
                "nameAr": "اجتماع خبرة",
                "nameEn": "Expert meeting",
                "no": 517
              },
              {
                "nameAr": "اعتماد الصيغة التنفيذية",
                "nameEn": "Adoption of the executory formula",
                "no": 518
              },
              {
                "nameAr": "تم قيد الدعوى",
                "nameEn": "Case has been filed",
                "no": 519
              },
              {
                "nameAr": "تم الاخلاء",
                "nameEn": "Evacuated",
                "no": 520
              },
              {
                "nameAr": "تقديم طلب جديد",
                "nameEn": "Submit a new application",
                "no": 521
              },
              {
                "nameAr": "إنتظار الموافقة علي قيد الشيك",
                "nameEn": "Waiting for Check Registration Approval",
                "no": 522
              },
              {
                "nameAr": "تم قيد الشيك",
                "nameEn": "Cheque has been registered",
                "no": 523
              },
              {
                "nameAr": "تمت الموافقة على قيد الشيك",
                "nameEn": "Cheque has been registered",
                "no": 524
              },
              {
                "nameAr": "بلاغ شرطة",
                "nameEn": "Police Report",
                "no": 525
              },
              {
                "nameAr": "تم الموافقة قيد طلب الشيك",
                "nameEn": "The Cheque Registration has been Approved",
                "no": 526
              },
              {
                "nameAr": "إرسال بريد الكتروني لشخص معين",
                "nameEn": "Send an Email to Someone",
                "no": 527
              }
            ]

          case "Procedures Status":
            return [
              {
                "nameAr": "وقف الإجراءات لحين التسوية مع المستاجر",
                "nameEn": "Proceedings Suspended until settlement with the Tenant",
                "no": 600
              },
              {
                "nameAr": "انتظار الموافقة المحمة قيد الشيك",
                "nameEn": "Waiting for the cheque to be approved",
                "no": 601
              },
              {
                "nameAr": "انتظار موافقة المحكمة قيد الشيك",
                "nameEn": "Waiting for Check Registration Approval",
                "no": 602
              },
              {
                "nameAr": "طلب تصوير محضر جلسة",
                "nameEn": "Application for a hearing record",
                "no": 603
              },
              {
                "nameAr": "اضافة مستندات حسابية",
                "nameEn": "Submission of Accounts Documents",
                "no": 604
              },
              {
                "nameAr": "انتظار الموافقة طلب ايجاري",
                "nameEn": "Waiting for approval of a rental application",
                "no": 605
              },
              {
                "nameAr": "تم الموافقة قيد طلب ايجاري",
                "nameEn": "Rental application is approved",
                "no": 606
              },
              {
                "nameAr": "ارفاق الصيغة التنفيذية",
                "nameEn": "Affix the Executory Formula",
                "no": 607
              },
              {
                "nameAr": "عدم وجود ايداعات",
                "nameEn": "No deposits",
                "no": 608
              },
              {
                "nameAr": "تصوير محضر جلسة",
                "nameEn": "Application for a hearing record",
                "no": 609
              },
              {
                "nameAr": "جاري التنفيذ",
                "nameEn": "In process",
                "no": 610
              },
              {
                "nameAr": "متوقف التنفيذ",
                "nameEn": "suspended",
                "no": 611
              },
              {
                "nameAr": "تم إنهاء التنفيذ",
                "nameEn": "Execution terminated",
                "no": 612
              },
              {
                "nameAr": "غلق الملف للتسوية",
                "nameEn": "Close the file for settlement",
                "no": 613
              },
              {
                "nameAr": "تم قيد الإشكال",
                "nameEn": "Opposistion has been filed",
                "no": 614
              },
              {
                "nameAr": "تم قيد الدعوى",
                "nameEn": "Case has been filed",
                "no": 615
              },
              {
                "nameAr": "فتح باب للمرافة",
                "nameEn": "Opening the door for fun",
                "no": 616
              },
              {
                "nameAr": "اصدار أمر حبس وقيد حرية",
                "nameEn": "Issuing a detention order and restricting freedom",
                "no": 617
              },
              {
                "nameAr": "حجز مال المدين لدى الغير",
                "nameEn": "Seizing the debtor’s money from others",
                "no": 618
              },
              {
                "nameAr": "تسليم شيك",
                "nameEn": "hand over cheque",
                "no": 619
              },
              {
                "nameAr": "تسليم إخلاء الطرف",
                "nameEn": "Hand over clearance",
                "no": 620
              },
              {
                "nameAr": "تقرير المحاسب",
                "nameEn": "accountant repport",
                "no": 621
              },
              {
                "nameAr": "اخلاء الطرف",
                "nameEn": "clearance letter",
                "no": 622
              },
              {
                "nameAr": "تأجيل جلسة",
                "nameEn": "Postpone of hearing",
                "no": 623
              },
              {
                "nameAr": "قيد الإعلان",
                "nameEn": "Notification process",
                "no": 624
              },
              {
                "nameAr": "إصدار الضبط والإحضار",
                "nameEn": "Arrest warrant issued",
                "no": 625
              },
              {
                "nameAr": "تم قيد طلب الشيك",
                "nameEn": "Cheque has been registered",
                "no": 626
              },
              {
                "nameAr": "نقص مستندات قيد الدعوى",
                "nameEn": "Incomplete Documents to File the Case",
                "no": 627
              }
            ]

          case "POA Type":
            return [
              {
                "nameAr": "وكالة تجارية",
                "nameEn": "Commercial Agency",
                "no": 700
              },
              {
                "nameAr": "وكالة عقد شركة",
                "nameEn": "Company Contract Agency",
                "no": 701
              },
              {
                "nameAr": "الغاء عقد",
                "nameEn": "Cancel a Contract",
                "no": 702
              },
              {
                "nameAr": "وكالة خاصة",
                "nameEn": "Special Power of Attorney",
                "no": 703
              },
              {
                "nameAr": "وكالة عامة",
                "nameEn": "General Power of Attorney",
                "no": 704
              },
              {
                "nameAr": "وكالة خارجية",
                "nameEn": "Foreign Power of Attorney",
                "no": 705
              }
            ]

          case "Payment Type":
            return [
              {
                "nameAr": "شيك",
                "nameEn": "Cheque",
                "no": 800
              },
              {
                "nameAr": "تحويل بنكي",
                "nameEn": "Bank Transfer",
                "no": 801
              },
              {
                "nameAr": "نقدا",
                "nameEn": "Cash",
                "no": 802
              }
            ]

          case "Legal Status":
            return [
              {
                "nameAr": "بنك دولي",
                "nameEn": "International Bank",
                "no": 900
              },
              {
                "nameAr": "شبه-حكومي",
                "nameEn": "Semi-Government",
                "no": 901
              },
              {
                "nameAr": "شركة",
                "nameEn": "Company",
                "no": 902
              },
              {
                "nameAr": "فرد",
                "nameEn": "Individual",
                "no": 903
              },
              {
                "nameAr": "بنك محلي",
                "nameEn": "Local bank",
                "no": 904
              },
              {
                "nameAr": "حكومة",
                "nameEn": "Government",
                "no": 905
              }
            ]



          case "Judges List":
            return [{"nameAr":"لا يوجد قاضي","nameEn":"there_is_no_judge","no":10}];

            case "Execution Procedures types":
                return [
                  {
                    "nameAr": "تم الإجراء",
                    "nameEn": "Done",
                    "no": 20
                  },
                  {
                    "nameAr": "غلق الملف/ التسوية",
                    "nameEn": "Close the File/ Settlement",
                    "no": 21
                  },
                  {
                    "nameAr": "قدمنا طلبًا عبر الخدمات الإلكترونية",
                    "nameEn": "We submitted a request via E-Services",
                    "no": 22
                  },
                  {
                    "nameAr": "اعادة ضبط وإحضار",
                    "nameEn": "Writ of Arrest",
                    "no": 23
                  },
                  {
                    "nameAr": "شهادة الرسوم المستحقة",
                    "nameEn": "Certificate of Payable Fees",
                    "no": 24
                  },
                  {
                    "nameAr": "مرفق قرارات الحجز على الحسابات والسيارات العائدة للمنفذ ضده.",
                    "nameEn": "Attached herewith the resolutions for seizure of the debtor's accounts & vehicles",
                    "no": 25
                  },
                  {
                    "nameAr": "طلب منع سفر",
                    "nameEn": "Travel Ban Request",
                    "no": 26
                  },
                  {
                    "nameAr": "الغاء اجراءات التنفيذية",
                    "nameEn": "Cancellation of executive procedures",
                    "no": 27
                  },
                  {
                    "nameAr": "إعلان بالسند التنفيذي",
                    "nameEn": "Notice of the executive document",
                    "no": 28
                  },
                  {
                    "nameAr": "مرفوض",
                    "nameEn": "Rejected",
                    "no": 29
                  },
                  {
                    "nameAr": "طلب إعلان بالنشر",
                    "nameEn": "Request Notified by newspaper",
                    "no": 30
                  },
                  {
                    "nameAr": "طلب حجز",
                    "nameEn": "Reservation request",
                    "no": 31
                  },
                  {
                    "nameAr": "إعلان بالنشر",
                    "nameEn": "Public Notice",
                    "no": 32
                  },
                  {
                    "nameAr": "تم قيد التنفيذ",
                    "nameEn": "Execution File registered",
                    "no": 33
                  },
                  {
                    "nameAr": "التحري",
                    "nameEn": "Investigation",
                    "no": 34
                  },
                  {
                    "nameAr": "اخلاء العين المؤجرة",
                    "nameEn": "Evacuation of the leased property",
                    "no": 35
                  },
                  {
                    "nameAr": "ضبط وإحضار",
                    "nameEn": "Writ of Arrest",
                    "no": 36
                  },
                  {
                    "nameAr": "قيد الإجراء",
                    "nameEn": "In process",
                    "no": 37
                  },
                  {
                    "nameAr": "تسليم شهادة اخلاء الطرف",
                    "nameEn": "hand over clearance lettar",
                    "no": 38
                  },
                  {
                    "nameAr": "تسليم شيك",
                    "nameEn": "hand over cheque",
                    "no": 39
                  },
                  {
                    "nameAr": "صدور تقرير المحاسب",
                    "nameEn": "issue of accoutant report",
                    "no": 40
                  },
                  {
                    "nameAr": "تسليم شهادة اخلاء الطرف",
                    "nameEn": "hand over claerance",
                    "no": 41
                  },
                  {
                    "nameAr": "ارفاق الصيغة التنفيذية",
                    "nameEn": "Affix the Executory Formula",
                    "no": 42
                  },
                  {
                    "nameAr": "حفظ الملف بسبب التسوية",
                    "nameEn": "Close the file due to settlement",
                    "no": 43
                  },
                  {
                    "nameAr": "تم تسديد رسوم اعلان",
                    "nameEn": "Notice Fees Paid",
                    "no": 44
                  },
                  {
                    "nameAr": "تم قيد الشيك",
                    "nameEn": "Cheque has been registered",
                    "no": 45
                  },
                  {
                    "nameAr": "تم سداد رسوم التنفيذ",
                    "nameEn": "Execution Fees Paid",
                    "no": 46
                  }
                ]

            case "Execution Procedures Status":
                return [
                  {
                    "nameAr": "بريد ، المدعي/ة",
                    "nameEn": "Email from the plaintiff",
                    "no": 50
                  },
                  {
                    "nameAr": "حفظ الملف",
                    "nameEn": "Close / Hold the File",
                    "no": 51
                  },
                  {
                    "nameAr": "اعتراض على تقرير المحاسب",
                    "nameEn": "Objection to the accountant's report",
                    "no": 52
                  },
                  {
                    "nameAr": "اعادة ضبط وإحضار",
                    "nameEn": "Writ of Arrest",
                    "no": 53
                  },
                  {
                    "nameAr": "شهادة رسوم مستحقة",
                    "nameEn": "Certificate of Payable Fees",
                    "no": 54
                  },
                  {
                    "nameAr": "مرفق قرارات الحجز على الحسابات والسيارات العائدة للمنفذ ضده.",
                    "nameEn": "Attached herewith the resolutions for seizure of the debtor's accounts & vehicles",
                    "no": 55
                  },
                  {
                    "nameAr": "مرفق لكم مخاطبة المنع من السفر.",
                    "nameEn": "Attached herewith the travel ban resolution",
                    "no": 56
                  },
                  {
                    "nameAr": "الغاء اجراءات التنفيذية",
                    "nameEn": "Cancellation of executive procedures",
                    "no": 57
                  },
                  {
                    "nameAr": "تعذر الإعلان",
                    "nameEn": "Unable reach Notice",
                    "no": 58
                  },
                  {
                    "nameAr": "مرفوض",
                    "nameEn": "Rejected",
                    "no": 59
                  },
                  {
                    "nameAr": "مُفعل",
                    "nameEn": "Active",
                    "no": 60
                  },
                  {
                    "nameAr": "قيد العمل",
                    "nameEn": "Pending",
                    "no": 61
                  },
                  {
                    "nameAr": "تم الموافقة على الطلب",
                    "nameEn": "Request Approved",
                    "no": 62
                  },
                  {
                    "nameAr": "تم تقديم الطلب",
                    "nameEn": "The request has been submitted",
                    "no": 63
                  },
                  {
                    "nameAr": "تم الإعلان بالنشر",
                    "nameEn": "Notified by newspaper",
                    "no": 64
                  },
                  {
                    "nameAr": "تم الاخلاء",
                    "nameEn": "Evacuated",
                    "no": 65
                  },
                  {
                    "nameAr": "تسليم شيك",
                    "nameEn": "hand over cheque",
                    "no": 66
                  },
                  {
                    "nameAr": "ارفاق الصيغة التنفيذية",
                    "nameEn": "Affix the Executory Formula",
                    "no": 67
                  },
                  {
                    "nameAr": "حفظ الملف بسبب التسوية",
                    "nameEn": "Close the file due to settlement",
                    "no": 68
                  },
                  {
                    "nameAr": "تمت الموافقة على قيد الشيك",
                    "nameEn": "Check Registration Approved",
                    "no": 69
                  },
                  {
                    "nameAr": "رسوم الإعلان",
                    "nameEn": "Notice Fees",
                    "no": 70
                  },
                  {
                    "nameAr": "تم قيد التنفيذ",
                    "nameEn": "Execution has been filed",
                    "no": 71
                  },
                  {
                    "nameAr": "مرفق اللائحة التنفيذية",
                    "nameEn": "Detailed Accounts Report Attached",
                    "no": 72
                  },
                  {
                    "nameAr": "ارفاق الصيغة التنفيذية",
                    "nameEn": "Affix the Executory Formula",
                    "no": 73
                  }
                ];

            case "Governorate":
              return  [
                {
                  "nameEn": "Muscat Governorate",
                  "no": 6000,
                  "nameAr": "محافظة مسقط"
                },
                {
                  "nameEn": "Dhofar Governorate",
                  "no": 6001,
                  "nameAr": "محافظة ظفار"
                },
                {
                  "nameEn": "Musandam Governorate",
                  "no": 6002,
                  "nameAr": "محافظة مسندم"
                },
                {
                  "nameEn": "Al Batinah North Governorate",
                  "no": 6003,
                  "nameAr": "محافظة شمال الباطنة"
                },
                {
                  "nameEn": "Al Batinah South Governorate",
                  "no": 6004,
                  "nameAr": "محافظة جنوب الباطنة"
                },
                {
                  "nameEn": "Ad Dakhiliyah Governorate",
                  "no": 6005,
                  "nameAr": "محافظة الداخلية"
                },
                {
                  "nameEn": "Ad Dhahirah Governorate",
                  "no": 6006,
                  "nameAr": "محافظة الظاهرة"
                },
                {
                  "nameEn": "Al Buraymi Governorate",
                  "no": 6007,
                  "nameAr": "محافظة البريمي"
                },
                {
                  "nameEn": "Ash Sharqiyah North Governorate",
                  "no": 6008,
                  "nameAr": "محافظة شمال الشرقية"
                },
                {
                  "nameEn": "Ash Sharqiyah South Governorate",
                  "no": 6009,
                  "nameAr": "محافظة جنوب الشرقية"
                },
                {
                  "nameEn": "Al Wusta Governorate",
                  "no": 6010,
                  "nameAr": "محافظة الوسطى"
                }
              ];

            case "Court":
                return [
                  {
                    "nameAr": "محكمة العليا",
                    "nameEn": "supreme court",
                    "no": 1000
                  },
                  {
                    "nameAr": "المحمكمة الإبتدائية بضنك",
                    "nameEn": "The Court of First Instance in Dhank",
                    "no": 1001
                  },
                  {
                    "nameAr": "المحكمة الإبتدائية بالمصنعة",
                    "nameEn": "The Court of First Instance in Al Musanna",
                    "no": 1002
                  },
                  {
                    "nameAr": "المحكمة الإبتدائية بالعامرات",
                    "nameEn": "The Court of First Instance in Al-Amerat",
                    "no": 1003
                  },
                  {
                    "nameAr": "المحكمة الإبتدائية بإبراء",
                    "nameEn": "Court of First Instance in Ibra",
                    "no": 1004
                  },
                  {
                    "nameAr": "المحكمة الإبتدائية بالمضيبي",
                    "nameEn": "Court of First Instance in Al-Mudaybi",
                    "no": 1005
                  },
                  {
                    "nameAr": "محكمة الاستئناف بمسقط",
                    "nameEn": "Muscat Appeal Court",
                    "no": 1006
                  },
                  {
                    "nameAr": "محكمة الاستئناف بالسيب",
                    "nameEn": "Seeb Appeal Court",
                    "no": 1007
                  },
                  {
                    "nameAr": "محكمة الاستئناف بظفار",
                    "nameEn": "Dhofar Appeal Court",
                    "no": 1008
                  },
                  {
                    "nameAr": "محكمة الاستئناف بمسندم",
                    "nameEn": "Musandam Appeal Court",
                    "no": 1009
                  },
                  {
                    "nameAr": "محكمة الاستئناف بنزوى",
                    "nameEn": "Nizwa Appeal Court",
                    "no": 1010
                  },
                  {
                    "nameAr": "محكمة الاستئناف بالبريمي",
                    "nameEn": "Buraimi Appeal Court",
                    "no": 1011
                  },
                  {
                    "nameAr": "محكمة الاستنئاف بصحار",
                    "nameEn": "Sohar Appeal Court",
                    "no": 1012
                  },
                  {
                    "nameAr": "محكمة الاستئناف بالرستاق",
                    "nameEn": "Rustaq Appeal Court",
                    "no": 1013
                  },
                  {
                    "nameAr": "محكمة الاستئناف بعبري",
                    "nameEn": "Ibri Appeal Court",
                    "no": 1014
                  },
                  {
                    "nameAr": "محكمة الاسئتناف بإبراء",
                    "nameEn": "Ibra Appeal Court",
                    "no": 1015
                  },
                  {
                    "nameAr": "محكمة الاستئناف بالمضيبي",
                    "nameEn": "Mudhaibi Appeal Court",
                    "no": 1016
                  },
                  {
                    "nameAr": "محكمة الاستئناف بصور",
                    "nameEn": "Sur Appeal Court",
                    "no": 1017
                  },
                  {
                    "nameAr": "محكمة الاستئناف بالدقم",
                    "nameEn": "Duqm Appeal Court",
                    "no": 1018
                  },
                  {
                    "nameAr": "المحكمة الابتدائية بمسقط",
                    "nameEn": "Muscat Court of First Instance",
                    "no": 1019
                  },
                  {
                    "nameAr": "المحكمة الابتدائية بالسيب",
                    "nameEn": "Seeb Court of First Instance",
                    "no": 1020
                  },
                  {
                    "nameAr": "المحكمة الابتدائية بقريات",
                    "nameEn": "Qurayyat Court of First Instance",
                    "no": 1021
                  },
                  {
                    "nameAr": "المحكمة الابتدائية بنزوى",
                    "nameEn": "Nizwa Court of First Instance",
                    "no": 1022
                  },
                  {
                    "nameAr": "المحكمة الابتدائية ببهلى",
                    "nameEn": "Bahli Court of First Instance",
                    "no": 1023
                  },
                  {
                    "nameAr": "المحكمة الابتدائية بأدم",
                    "nameEn": "Adam Court of First Instance",
                    "no": 1024
                  },
                  {
                    "nameAr": "المحكمة الابتدائية بأزكي",
                    "nameEn": "Azki Court of First Instance",
                    "no": 1025
                  },
                  {
                    "nameAr": "المحكمة الابتدائية بسمائل",
                    "nameEn": "Samail Court of First Instance",
                    "no": 1026
                  },
                  {
                    "nameAr": "المحكمة الابتدائية ببدبد",
                    "nameEn": "Bidbid Court of First Instance",
                    "no": 1027
                  },
                  {
                    "nameAr": "المحكمة الابتدائية ببركاء",
                    "nameEn": "Barka Court of First Instance",
                    "no": 1028
                  },
                  {
                    "nameAr": "المحكمة الابتدائية بوادي المعاول",
                    "nameEn": "Wadi Al-Maawal Court of First Instance",
                    "no": 1029
                  },
                  {
                    "nameAr": "المحكمة الابتدائية بنخل",
                    "nameEn": "Nakhal The Court of First Instance",
                    "no": 1030
                  },
                  {
                    "nameAr": "المحكمة الابتدائية بالرستاق",
                    "nameEn": "Rustaq Court of First Instance",
                    "no": 1031
                  },
                  {
                    "nameAr": "محكمة صور الإبتدائية",
                    "nameEn": "Sur Court of First Instance",
                    "no": 1032
                  }
                ]

            case "Counselling Type":
                return [
                  {
                    "nameAr": "استشارة تجارية",
                    "nameEn": "Commercial Consultation",
                    "no": 1100
                  },
                  {
                    "nameAr": "استشارة قانونية",
                    "nameEn": "Legal Consultation",
                    "no": 1101
                  },
                  {
                    "nameAr": "استشارة قانونية",
                    "nameEn": "Legal Consultation",
                    "no": 1102
                  }
                ]

            case "Counselling Method":
                return[
                  {
                    "nameAr": "إستشارة عبر الهاتف",
                    "nameEn": "Counselling through the Phone",
                    "no": 1200
                  },
                  {
                    "nameAr": "إستشارة عبر الإنترنت",
                    "nameEn": "Counselling through the Internet",
                    "no": 1201
                  },
                  {
                    "nameAr": "إستشارة في المكتب",
                    "nameEn": "Counselling in the office",
                    "no": 1202
                  }
                ]

            case "Contract Type":
                return [
                    {
                      "no": 1300,
                      "nameAr": "عقد إدارة",
                      "nameEn": "Management Contract"
                    }
                  ];

            case "Contact Type":
                return [
                  {
                    "nameAr": "مُستشار خارجي",
                    "nameEn": "Outsource Consultant",
                    "no": 1400
                  },
                  {
                    "nameAr": "محامٍ خارجي",
                    "nameEn": "Outsource Lawyer",
                    "no": 1401
                  },
                  {
                    "nameAr": "مكتب محاماة خارجي",
                    "nameEn": "Outsource Law Firm",
                    "no": 1402
                  },
                  {
                    "nameAr": "فروع المكتب",
                    "nameEn": "Office Branches",
                    "no": 1403
                  },
                  {
                    "nameAr": "شخص طبيعي (عمولة)",
                    "nameEn": "Normal Person (Commission)",
                    "no": 1404
                  }
                ]

            case "Execution Case Type":
                return [
                  {
                    "nameAr": "استئناف تنفيذ عقاري",
                    "nameEn": "Appeal Real Estate- Execution",
                    "no": 1500
                  },
                  {
                    "nameAr": "منازعة موضوعيه تنفيذ شيكات",
                    "nameEn": "Substantive Dispute - Checks Execution",
                    "no": 1501
                  },
                  {
                    "nameAr": "تنفيد",
                    "nameEn": "Execution",
                    "no": 1502
                  },
                  {
                    "nameAr": "تنفيذ- اشكال",
                    "nameEn": "Execution- Grievance",
                    "no": 1503
                  },
                  {
                    "nameAr": "تنفيذ أحوال",
                    "nameEn": "Execution- Status",
                    "no": 1504
                  },
                  {
                    "nameAr": "تنفيذ تجاري",
                    "nameEn": "Execution- Commercial",
                    "no": 1505
                  },
                  {
                    "nameAr": "تنفيذ ايجارات",
                    "nameEn": "Execution- Leasing",
                    "no": 1506
                  },
                  {
                    "nameAr": "تنفيذ داخلي",
                    "nameEn": "Execution- Internal",
                    "no": 1507
                  },
                  {
                    "nameAr": "تنفيذ عام",
                    "nameEn": "Execution- General",
                    "no": 1508
                  },
                  {
                    "nameAr": "تنفيذ عمالي",
                    "nameEn": "Labor Execution",
                    "no": 1509
                  },
                  {
                    "nameAr": "تنفيذ شيك",
                    "nameEn": "Cheque Execution",
                    "no": 1510
                  },
                  {
                    "nameAr": "تنفيذ عقاري",
                    "nameEn": "Real Estate- Execution",
                    "no": 1511
                  },
                  {
                    "nameAr": "تنفيذ تجاري جزئي",
                    "nameEn": "Summary Commercial Execution",
                    "no": 1512
                  },
                  {
                    "nameAr": "تنفيذ مدني",
                    "nameEn": "Civil Execution",
                    "no": 1513
                  }
                ]

            case "Case Type":
                return [
                  {
                    "nameAr": "تجارى كلى",
                    "nameEn": "Plenary Commercial Execution",
                    "no": 1600
                  },
                  {
                    "nameAr": "التماس اعادة نظر مدني",
                    "nameEn": "Petition for review, civil",
                    "no": 1601
                  },
                  {
                    "nameAr": "استئناف عقاري",
                    "nameEn": "Real Estate Appeal",
                    "no": 1602
                  },
                  {
                    "nameAr": "الغرامات",
                    "nameEn": "Fines",
                    "no": 1603
                  },
                  {
                    "nameAr": "تجاري مصارف",
                    "nameEn": "Commercial Banking",
                    "no": 1604
                  },
                  {
                    "nameAr": "الهيئة العامة لمحكمة التمييز",
                    "nameEn": "The General Authority of the Cassation Court",
                    "no": 1605
                  },
                  {
                    "nameAr": "استئناف تجاري",
                    "nameEn": "Commercial Appeal",
                    "no": 1606
                  },
                  {
                    "nameAr": "امر أحوال مال",
                    "nameEn": "Order on Money Conditions",
                    "no": 1607
                  },
                  {
                    "nameAr": "نزاع تعيين خبرة تجاري",
                    "nameEn": "Expert Appontment Dispute - Commercial",
                    "no": 1608
                  },
                  {
                    "nameAr": "امر أداء",
                    "nameEn": "Performance order",
                    "no": 1609
                  },
                  {
                    "nameAr": "استئناف أمر اداء",
                    "nameEn": "Appeal - Pay order",
                    "no": 1610
                  },
                  {
                    "nameAr": "امر على عريضة",
                    "nameEn": "Order on petition",
                    "no": 1611
                  },
                  {
                    "nameAr": "امر على عريضة - شرعي",
                    "nameEn": "Order on petition, Sharia",
                    "no": 1612
                  },
                  {
                    "nameAr": "تظلم من امر اداء",
                    "nameEn": "Opposistion - Pay order",
                    "no": 1613
                  },
                  {
                    "nameAr": "امر على عريضة تجاري",
                    "nameEn": "Order on petition, commercial",
                    "no": 1614
                  },
                  {
                    "nameAr": "عقاري جزئي",
                    "nameEn": "Summary Real Estate",
                    "no": 1615
                  },
                  {
                    "nameAr": "امر على عريضة عقاري",
                    "nameEn": "Order on petition, real estate",
                    "no": 1616
                  },
                  {
                    "nameAr": "طلب الرجوع في قرار / حكم تمييز",
                    "nameEn": "Cassation",
                    "no": 1617
                  },
                  {
                    "nameAr": "امر على عريضة عمالي",
                    "nameEn": "Order on petition, labor",
                    "no": 1618
                  },
                  {
                    "nameAr": "نزاع تجارى",
                    "nameEn": "Trade Dispute",
                    "no": 1619
                  },
                  {
                    "nameAr": "امر على عريضة مدني",
                    "nameEn": "Order on petition, civil",
                    "no": 1620
                  },
                  {
                    "nameAr": "تظلم حجز تحفظى",
                    "nameEn": "Prejudgment Attachment Grievance",
                    "no": 1621
                  },
                  {
                    "nameAr": "امر على عريضة-استئناف",
                    "nameEn": "Order on petition, appeal",
                    "no": 1622
                  },
                  {
                    "nameAr": "نزاع عقاري",
                    "nameEn": "Real Estate Dispute",
                    "no": 1623
                  },
                  {
                    "nameAr": "امر على عريضة-تمييز",
                    "nameEn": "Order on petition, cassation",
                    "no": 1624
                  },
                  {
                    "nameAr": "استئناف قرار نزاع",
                    "nameEn": "Appeal- Dispute Verdict",
                    "no": 1625
                  },
                  {
                    "nameAr": "انابات",
                    "nameEn": "Delegations",
                    "no": 1626
                  },
                  {
                    "nameAr": "عقاري كلي",
                    "nameEn": "Plenary Real Estate",
                    "no": 1627
                  },
                  {
                    "nameAr": "انابات اجرائية",
                    "nameEn": "Procedural delegations",
                    "no": 1628
                  },
                  {
                    "nameAr": "انابات تجارية",
                    "nameEn": "Delegations, commercial",
                    "no": 1629
                  },
                  {
                    "nameAr": "نزاع محدد القيمة",
                    "nameEn": "DefiniteValue Dispute",
                    "no": 1630
                  },
                  {
                    "nameAr": "انابات شرعية",
                    "nameEn": "Delegations, Sharia",
                    "no": 1631
                  },
                  {
                    "nameAr": "انابات عقارية",
                    "nameEn": "Delegations, real estate",
                    "no": 1632
                  },
                  {
                    "nameAr": "انابات عمالية",
                    "nameEn": "Delegations, labor",
                    "no": 1633
                  },
                  {
                    "nameAr": "انابات مدنية",
                    "nameEn": "Delegations, civil",
                    "no": 1634
                  },
                  {
                    "nameAr": "اوامر ادارية",
                    "nameEn": "Administrative orders",
                    "no": 1635
                  },
                  {
                    "nameAr": "اوامر ادارية عقارية",
                    "nameEn": "Administrative orders, real estate",
                    "no": 1636
                  },
                  {
                    "nameAr": "اوامر ادارية مدنية",
                    "nameEn": "Administrative orders, civil",
                    "no": 1637
                  },
                  {
                    "nameAr": "بطلان حكم تحكيم",
                    "nameEn": "The invalidity of arbitration",
                    "no": 1638
                  },
                  {
                    "nameAr": "تجاري جزئي قديم",
                    "nameEn": "Commercial, Partial, old",
                    "no": 1639
                  },
                  {
                    "nameAr": "تجاري كلي",
                    "nameEn": "Commercial, full jurisdiction",
                    "no": 1640
                  },
                  {
                    "nameAr": "تجاري مصارف جزئي",
                    "nameEn": "Commercial Banks, Partial",
                    "no": 1641
                  },
                  {
                    "nameAr": "تجاري مصارف كلي",
                    "nameEn": "Commercial Banks, full jurisdiction",
                    "no": 1642
                  },
                  {
                    "nameAr": "تركات غير مسلمين",
                    "nameEn": "Estates, Non-Muslims",
                    "no": 1643
                  },
                  {
                    "nameAr": "تركات غير مسلمين-بسيطة",
                    "nameEn": "Estates, Non-Muslims- Simple",
                    "no": 1644
                  },
                  {
                    "nameAr": "تركات مسلمين",
                    "nameEn": "Estates, Muslims",
                    "no": 1645
                  },
                  {
                    "nameAr": "تركات مسلمين - بسيطة",
                    "nameEn": "Estates, Muslims - Simple",
                    "no": 1646
                  },
                  {
                    "nameAr": "تركة خاصة أحوال شخصية",
                    "nameEn": "Personal Status Special Inheritance Case",
                    "no": 1647
                  },
                  {
                    "nameAr": "تركة خاصة تجاري",
                    "nameEn": "Commercial Special Inheritance Case",
                    "no": 1648
                  },
                  {
                    "nameAr": "تركة خاصة عقاري",
                    "nameEn": "Real Estate Special Inheritance Case",
                    "no": 1649
                  },
                  {
                    "nameAr": "تركة خاصة مدني",
                    "nameEn": "Civil Special Inheritance Case",
                    "no": 1650
                  },
                  {
                    "nameAr": "تسوية احوال شخصية- محاكم الخير",
                    "nameEn": "Personal affairs settlement-charity courts",
                    "no": 1651
                  },
                  {
                    "nameAr": "تسوية الالتزامات المالية",
                    "nameEn": "Financial Commitment Settlement",
                    "no": 1652
                  },
                  {
                    "nameAr": "تسوية تركات خاصة",
                    "nameEn": "Special Inheritance Settlement",
                    "no": 1653
                  },
                  {
                    "nameAr": "تسوية تركات غير مسلمين",
                    "nameEn": "Estates Settlements, Non Muslims",
                    "no": 1654
                  },
                  {
                    "nameAr": "تسوية تركات مسلمين",
                    "nameEn": "Estates Settlements, Muslims",
                    "no": 1655
                  },
                  {
                    "nameAr": "تسوية تنفيذ أحوال شخصية",
                    "nameEn": "Personal affairs execution settlement",
                    "no": 1656
                  },
                  {
                    "nameAr": "تسوية تنفيذ تجاري",
                    "nameEn": "Commercial Execution Settlement",
                    "no": 1657
                  },
                  {
                    "nameAr": "تسوية تنفيذ عقاري",
                    "nameEn": "Real Estate Execution Settlement",
                    "no": 1658
                  },
                  {
                    "nameAr": "تسوية تنفيذ عمالي",
                    "nameEn": "Labor Execution Settlement",
                    "no": 1659
                  },
                  {
                    "nameAr": "تسوية تنفيذ مدني",
                    "nameEn": "Civil Execution Settlement",
                    "no": 1660
                  },
                  {
                    "nameAr": "تسوية محكمة التركات الخاصة",
                    "nameEn": "Estates Settlements, Special",
                    "no": 1661
                  },
                  {
                    "nameAr": "تصديقات",
                    "nameEn": "Attestations",
                    "no": 1662
                  },
                  {
                    "nameAr": "تظلم أحوال مال",
                    "nameEn": "Money Conditions Grievance",
                    "no": 1663
                  },
                  {
                    "nameAr": "تظلم أمرعلى عريضةتجارى-استئناف",
                    "nameEn": "Grievance against order on Commercial petition",
                    "no": 1664
                  },
                  {
                    "nameAr": "تظلم أمرعلى عريضةشرعى-استئناف",
                    "nameEn": "Grievance against order on personal status petition",
                    "no": 1665
                  },
                  {
                    "nameAr": "تظلم أمرعلى عريضةعقارى-استئناف",
                    "nameEn": "Grievance against order on real state petition",
                    "no": 1666
                  },
                  {
                    "nameAr": "تظلم أمرعلى عريضةعمالي-استئناف",
                    "nameEn": "Grievance against order on labour petition",
                    "no": 1667
                  },
                  {
                    "nameAr": "تظلم أمرعلى عريضه مدني-استئناف",
                    "nameEn": "Grievance against order on civil petition",
                    "no": 1668
                  },
                  {
                    "nameAr": "مخالفات",
                    "nameEn": "Contraventions",
                    "no": 1669
                  },
                  {
                    "nameAr": "تظلم اشكال تجاري",
                    "nameEn": "Grievance against order on Commercial petition",
                    "no": 1670
                  },
                  {
                    "nameAr": "امر على عريضة ندب خبير",
                    "nameEn": "Act of petition - Leases",
                    "no": 1671
                  },
                  {
                    "nameAr": "تظلم اشكال شرعي",
                    "nameEn": "Grievance Shariaa (Personal against Matter) Injunction",
                    "no": 1672
                  },
                  {
                    "nameAr": "تظلم اشكال عقاري",
                    "nameEn": "Grievance against order on real estate petition",
                    "no": 1673
                  },
                  {
                    "nameAr": "some",
                    "nameEn": "some",
                    "no": 1674
                  },
                  {
                    "nameAr": "تظلم اشكال عمالي",
                    "nameEn": "Grievance against order on labour petition",
                    "no": 1675
                  },
                  {
                    "nameAr": "تظلم اشكال مدني",
                    "nameEn": "Grievance against order on civil petition",
                    "no": 1676
                  },
                  {
                    "nameAr": "تظلم اشكالات محررات كاتب عدل",
                    "nameEn": "Grievance Problems, Notary Public Documents",
                    "no": 1677
                  },
                  {
                    "nameAr": "تظلم تجاري",
                    "nameEn": "Grievance, commercial",
                    "no": 1678
                  },
                  {
                    "nameAr": "تظلم تركات",
                    "nameEn": "Inheritance Grievance",
                    "no": 1679
                  },
                  {
                    "nameAr": "تظلم تنفيذ أو رفض حكم تحكيم",
                    "nameEn": "complain the decision execution or reject of arbitration",
                    "no": 1680
                  },
                  {
                    "nameAr": "تظلم تنفيذ تجاري",
                    "nameEn": "Grievance on commercial execution",
                    "no": 1681
                  },
                  {
                    "nameAr": "تظلم تنفيذ شرعي",
                    "nameEn": "Grievance Shariaa (Personal against Matter) Execution",
                    "no": 1682
                  },
                  {
                    "nameAr": "تظلم تنفيذ شيكات",
                    "nameEn": "Grievance on civil execution",
                    "no": 1683
                  },
                  {
                    "nameAr": "تظلم تنفيذ عقاري",
                    "nameEn": "Grievance on real estate execution",
                    "no": 1684
                  },
                  {
                    "nameAr": "تظلم تنفيذ عمالي",
                    "nameEn": "Grievance on labour execution",
                    "no": 1685
                  },
                  {
                    "nameAr": "تظلم تنفيذ محرر كاتب عدل",
                    "nameEn": "Grienvance on Notary Public Document Execution",
                    "no": 1686
                  },
                  {
                    "nameAr": "تظلم تنفيذ مدني",
                    "nameEn": "Grievance on civil execution",
                    "no": 1687
                  },
                  {
                    "nameAr": "تظلم شرعي",
                    "nameEn": "Sharia grievance",
                    "no": 1688
                  },
                  {
                    "nameAr": "تظلم عقاري",
                    "nameEn": "Grievance, real estate",
                    "no": 1689
                  },
                  {
                    "nameAr": "تظلم عمالي",
                    "nameEn": "Grievance, labor",
                    "no": 1690
                  },
                  {
                    "nameAr": "تظلم مدني",
                    "nameEn": "Grievance, civil",
                    "no": 1691
                  },
                  {
                    "nameAr": "تظلم من أمر على عريضة-استئناف",
                    "nameEn": "Grievance against order on petition",
                    "no": 1692
                  },
                  {
                    "nameAr": "تظلم من إشكال تنفيذ ايجارات",
                    "nameEn": "Grievance problems, rent execution",
                    "no": 1693
                  },
                  {
                    "nameAr": "تظلم من امر تسليم جواز سفر",
                    "nameEn": "Grievance, Order on submit passport",
                    "no": 1694
                  },
                  {
                    "nameAr": "تظلم من امر منع من السفر",
                    "nameEn": "Travel Ban Order Grievance",
                    "no": 1695
                  },
                  {
                    "nameAr": "تظلم من تنفيذ ايجارات",
                    "nameEn": "Grievance of rent execution",
                    "no": 1696
                  },
                  {
                    "nameAr": "تظلم من قرار نزاع",
                    "nameEn": "Grievance of a Dispute Decision",
                    "no": 1697
                  },
                  {
                    "nameAr": "تعيين خبرة",
                    "nameEn": "Expert Appointment",
                    "no": 1698
                  },
                  {
                    "nameAr": "تعيين وصي تركة",
                    "nameEn": "Assignment of an estate guardian",
                    "no": 1699
                  },
                  {
                    "nameAr": "تنازع إختصاص",
                    "nameEn": "Conflict of jurisdiction",
                    "no": 1700
                  },
                  {
                    "nameAr": "تنفيذ أحكام المشاريع الملغاة",
                    "nameEn": "Execution of Cancelled Projects Committee",
                    "no": 1701
                  },
                  {
                    "nameAr": "تنفيذ أحكام جزائية",
                    "nameEn": "Penal judgments execution",
                    "no": 1702
                  },
                  {
                    "nameAr": "تنفيذ أمور مستعجلة",
                    "nameEn": "Execution, summary matters",
                    "no": 1703
                  },
                  {
                    "nameAr": "تنفيذ أمور مستعجلة تجاري",
                    "nameEn": "Execution of summary matters, commercial",
                    "no": 1704
                  },
                  {
                    "nameAr": "تنفيذ أمور مستعجلة شرعي قديم",
                    "nameEn": "Execution, summary matters, Sharia, old",
                    "no": 1705
                  },
                  {
                    "nameAr": "تنفيذ أمور مستعجلة شرعية",
                    "nameEn": "Execution, summary matters, Sharia",
                    "no": 1706
                  },
                  {
                    "nameAr": "تنفيذ أمور مستعجلة عقاري",
                    "nameEn": "Execution of summary matters, real estate",
                    "no": 1707
                  },
                  {
                    "nameAr": "تنفيذ أمور مستعجلة عمالي",
                    "nameEn": "Execution of summary matters, labor",
                    "no": 1708
                  },
                  {
                    "nameAr": "تنفيذ أمور مستعجلة مدني",
                    "nameEn": "Execution of summary matters, civil",
                    "no": 1709
                  },
                  {
                    "nameAr": "تنفيذ إداري",
                    "nameEn": "Administrative Execution",
                    "no": 1710
                  },
                  {
                    "nameAr": "تنفيذ احكام المركز المالي",
                    "nameEn": "Execution, DIFC courts judgments",
                    "no": 1711
                  },
                  {
                    "nameAr": "تنفيذ استرداد",
                    "nameEn": "Refund Execution",
                    "no": 1712
                  },
                  {
                    "nameAr": "تنفيذ الاحكام",
                    "nameEn": "Execution of judgments",
                    "no": 1713
                  },
                  {
                    "nameAr": "تنفيذ ايجارات",
                    "nameEn": "Enforcement, leases",
                    "no": 1714
                  },
                  {
                    "nameAr": "تنفيذ بالرسوم",
                    "nameEn": "Execution by fees",
                    "no": 1715
                  },
                  {
                    "nameAr": "تنفيذ بالرسوم أحوال شخصية",
                    "nameEn": "Execution by fees, personal status",
                    "no": 1716
                  },
                  {
                    "nameAr": "تنفيذ بالرسوم تجاري",
                    "nameEn": "Execution by fees, commercial",
                    "no": 1717
                  },
                  {
                    "nameAr": "تنفيذ بالرسوم عقاري",
                    "nameEn": "Execution by fees, real estate",
                    "no": 1718
                  },
                  {
                    "nameAr": "تنفيذ بالرسوم عمالي",
                    "nameEn": "Execution by fees, labor",
                    "no": 1719
                  },
                  {
                    "nameAr": "تنفيذ بالرسوم مدني",
                    "nameEn": "Execution by fees, civil",
                    "no": 1720
                  },
                  {
                    "nameAr": "تنفيذ تجاري",
                    "nameEn": "Execution, commercial",
                    "no": 1721
                  },
                  {
                    "nameAr": "تنفيذ شرعى مؤقت",
                    "nameEn": "Execution, Sharia, Temporary",
                    "no": 1722
                  },
                  {
                    "nameAr": "تنفيذ شرعي",
                    "nameEn": "Execution, Sharia",
                    "no": 1723
                  },
                  {
                    "nameAr": "تنفيذ شرعي قديم",
                    "nameEn": "Execution, Sharia, old",
                    "no": 1724
                  },
                  {
                    "nameAr": "تنفيذ شيكات",
                    "nameEn": "Cheques Execution",
                    "no": 1725
                  },
                  {
                    "nameAr": "تنفيذ عقاري",
                    "nameEn": "Execution, real estate",
                    "no": 1726
                  },
                  {
                    "nameAr": "تنفيذ عمالي",
                    "nameEn": "Execution, labor",
                    "no": 1727
                  },
                  {
                    "nameAr": "تنفيذ عمالي جماعي",
                    "nameEn": "Execution, group labor",
                    "no": 1728
                  },
                  {
                    "nameAr": "تنفيذ قرارات هيئة التأمين",
                    "nameEn": "Insurance Authority Decisions Execution",
                    "no": 1729
                  },
                  {
                    "nameAr": "تنفيذ لجان",
                    "nameEn": "Execution, committees",
                    "no": 1730
                  },
                  {
                    "nameAr": "تنفيذ محرر كاتب عدل",
                    "nameEn": "Notary Public Document Execution",
                    "no": 1731
                  },
                  {
                    "nameAr": "تنفيذ مدني",
                    "nameEn": "Execution, civil",
                    "no": 1732
                  },
                  {
                    "nameAr": "حالات زوجية",
                    "nameEn": "Marital matters",
                    "no": 1733
                  },
                  {
                    "nameAr": "حالات زوجية غير مسلمين",
                    "nameEn": "Marital matters for non-Muslims",
                    "no": 1734
                  },
                  {
                    "nameAr": "حجز تحفظي - سيارات",
                    "nameEn": "Reservation - cars",
                    "no": 1735
                  },
                  {
                    "nameAr": "حالات عائلية",
                    "nameEn": "Family matters",
                    "no": 1736
                  },
                  {
                    "nameAr": "حالات عائلية غير مسلمين",
                    "nameEn": "Family matters for non-Muslims",
                    "no": 1737
                  },
                  {
                    "nameAr": "حجز تحفظي",
                    "nameEn": "Provisional attachment",
                    "no": 1738
                  },
                  {
                    "nameAr": "ايجارات",
                    "nameEn": "Leases",
                    "no": 1739
                  },
                  {
                    "nameAr": "حجز تحفظي تجاري",
                    "nameEn": "Provisional attachment, commercial",
                    "no": 1740
                  },
                  {
                    "nameAr": "حجز تحفظي شرعي",
                    "nameEn": "Provisional attachment, Sharia",
                    "no": 1741
                  },
                  {
                    "nameAr": "حجز تحفظي عقاري",
                    "nameEn": "Provisional attachment, real estate",
                    "no": 1742
                  },
                  {
                    "nameAr": "حجز تحفظي عمالي",
                    "nameEn": "Provisional attachment, labor",
                    "no": 1743
                  },
                  {
                    "nameAr": "حجز تحفظي محاكم المركز المالي",
                    "nameEn": "Provisional attachment, DIFC courts",
                    "no": 1744
                  },
                  {
                    "nameAr": "حجز تحفظي مدني",
                    "nameEn": "Provisional attachment, civil",
                    "no": 1745
                  },
                  {
                    "nameAr": "حجز تحفظي مركبات",
                    "nameEn": "Impoundment of vehicles",
                    "no": 1746
                  },
                  {
                    "nameAr": "حقوق شرعي",
                    "nameEn": "Rights, Sharia",
                    "no": 1747
                  },
                  {
                    "nameAr": "حقوق مدني",
                    "nameEn": "Rights, civil",
                    "no": 1748
                  },
                  {
                    "nameAr": "حل وتصفية الشركة",
                    "nameEn": "Winding up and liquidation of a company",
                    "no": 1749
                  },
                  {
                    "nameAr": "مدني",
                    "nameEn": "Civil",
                    "no": 1750
                  },
                  {
                    "nameAr": "دراسة حالة اجتماعية",
                    "nameEn": "Social Case Study",
                    "no": 1751
                  },
                  {
                    "nameAr": "بيع عقار مرهون",
                    "nameEn": "Selling a mortgaged property",
                    "no": 1752
                  },
                  {
                    "nameAr": "دعاوى مستعجلة",
                    "nameEn": "Summary actions",
                    "no": 1753
                  },
                  {
                    "nameAr": "تجاري",
                    "nameEn": "commercial",
                    "no": 1754
                  },
                  {
                    "nameAr": "دعاوى مستعجلة تجارية",
                    "nameEn": "Summary actions, commercial",
                    "no": 1755
                  },
                  {
                    "nameAr": "إفلاس تجارى",
                    "nameEn": "Commercial bankruptcy",
                    "no": 1756
                  },
                  {
                    "nameAr": "دعاوى مستعجلة شرعية",
                    "nameEn": "Sharia summary actions",
                    "no": 1757
                  },
                  {
                    "nameAr": "شرعي",
                    "nameEn": "Statutable",
                    "no": 1758
                  },
                  {
                    "nameAr": "دعاوى مستعجلة عمالية",
                    "nameEn": "Summary actions, labor",
                    "no": 1759
                  },
                  {
                    "nameAr": "تظلم من امر على عريضة",
                    "nameEn": "Order on application",
                    "no": 1760
                  },
                  {
                    "nameAr": "دعاوى مستعجلة مدنية",
                    "nameEn": "Summary actions, civil",
                    "no": 1761
                  },
                  {
                    "nameAr": "اجراءات افلاس",
                    "nameEn": "Bankruptcy procedures",
                    "no": 1762
                  },
                  {
                    "nameAr": "دعاوى موضوعية-تمييز",
                    "nameEn": "Substantive actions, cassation",
                    "no": 1763
                  },
                  {
                    "nameAr": "انذار عدلي",
                    "nameEn": "Judicial notification",
                    "no": 1764
                  },
                  {
                    "nameAr": "دعاوي مستعجلة عقاري",
                    "nameEn": "Summary actions, real estate",
                    "no": 1765
                  },
                  {
                    "nameAr": "أمر على عريضه",
                    "nameEn": "Act of petition",
                    "no": 1766
                  },
                  {
                    "nameAr": "رد الخبير أو المحكم",
                    "nameEn": "Rejection of Expert or Arbitrator",
                    "no": 1767
                  },
                  {
                    "nameAr": "إجراءات اعسار",
                    "nameEn": "Insolvency Proceedings",
                    "no": 1768
                  },
                  {
                    "nameAr": "ردالقضاةأوالخبراءأوالمحكمين",
                    "nameEn": "Rejection of judges, experts or arbitrators",
                    "no": 1769
                  },
                  {
                    "nameAr": "طعن أحوال شخصية",
                    "nameEn": "Objection, personal status",
                    "no": 1770
                  },
                  {
                    "nameAr": "طعن حقـوق",
                    "nameEn": "Objection, rights",
                    "no": 1771
                  },
                  {
                    "nameAr": "منازعات ايجارية",
                    "nameEn": "Rental disputes",
                    "no": 1772
                  },
                  {
                    "nameAr": "طعن عقاري",
                    "nameEn": "Objection, real estate",
                    "no": 1773
                  },
                  {
                    "nameAr": "طلب بيع مال مرهون (تنفيذ)",
                    "nameEn": "Application to sell pledged property (execution)",
                    "no": 1774
                  },
                  {
                    "nameAr": "عرض وإيداع",
                    "nameEn": "Offer and deposit",
                    "no": 1775
                  },
                  {
                    "nameAr": "عرض وإيداع أحوال شخصية",
                    "nameEn": "Personal Affairs Offer and deposit",
                    "no": 1776
                  },
                  {
                    "nameAr": "عرض وإيداع تجاري",
                    "nameEn": "Commercial Offer and deposit",
                    "no": 1777
                  },
                  {
                    "nameAr": "عرض وإيداع عقاري",
                    "nameEn": "Real Estate Offer and deposit",
                    "no": 1778
                  },
                  {
                    "nameAr": "عرض وإيداع عمالي",
                    "nameEn": "Labour Offer and deposit",
                    "no": 1779
                  },
                  {
                    "nameAr": "عرض وإيداع مدني",
                    "nameEn": "Civil Offer and deposit",
                    "no": 1780
                  },
                  {
                    "nameAr": "أمر تسليم جواز السفر",
                    "nameEn": "Order on submit passport",
                    "no": 1781
                  },
                  {
                    "nameAr": "عرض وايداع محرر كاتب عدل",
                    "nameEn": "Notary Public Document Offer and deposite",
                    "no": 1782
                  },
                  {
                    "nameAr": "مطالبات تعويض",
                    "nameEn": "Compensation claims",
                    "no": 1783
                  },
                  {
                    "nameAr": "أمر تقدير أتعاب خبرة أحوال",
                    "nameEn": "Order on Estimate Personal Status Experience Fee",
                    "no": 1784
                  },
                  {
                    "nameAr": "عقاري",
                    "nameEn": "Real Estates",
                    "no": 1785
                  },
                  {
                    "nameAr": "أمر تقدير أتعاب خبرة تجاري",
                    "nameEn": "Order on Estimate Commercial Experience Fee",
                    "no": 1786
                  },
                  {
                    "nameAr": "عمالي",
                    "nameEn": "Labor",
                    "no": 1787
                  },
                  {
                    "nameAr": "قضية مدنية جزئية",
                    "nameEn": "Civil Summary Case",
                    "no": 1788
                  },
                  {
                    "nameAr": "أمر تقدير أتعاب خبرة عقاري",
                    "nameEn": "Order on Estimate Real Estate Experience Fee",
                    "no": 1789
                  },
                  {
                    "nameAr": "عمالي - جافزا",
                    "nameEn": "Labor, JAVZA",
                    "no": 1790
                  },
                  {
                    "nameAr": "قضية مدنية كلية",
                    "nameEn": "Civil Plenary Case",
                    "no": 1791
                  },
                  {
                    "nameAr": "أمر تقدير أتعاب خبرة عمالي",
                    "nameEn": "Order on Estimate Labour Experience Fee",
                    "no": 1792
                  },
                  {
                    "nameAr": "عمالي جزئي- جافزا",
                    "nameEn": "Labor, Partial-JAVZA",
                    "no": 1793
                  },
                  {
                    "nameAr": "قضية تجارية جزئية",
                    "nameEn": "Commercial Summary Case",
                    "no": 1794
                  },
                  {
                    "nameAr": "أمر تقدير أتعاب خبرة مدني",
                    "nameEn": "Order on Estimate Civil Experience Fee",
                    "no": 1795
                  },
                  {
                    "nameAr": "عمالي خدمة مساعدة",
                    "nameEn": "Domestic Labour",
                    "no": 1796
                  },
                  {
                    "nameAr": "قضية تجارية كلية",
                    "nameEn": "Commercial Plenary Case",
                    "no": 1797
                  },
                  {
                    "nameAr": "أمر تقدير أتعاب محاماة أحوال",
                    "nameEn": "Order on Personal Status Estimate Lawyer Fee",
                    "no": 1798
                  },
                  {
                    "nameAr": "عمالي خدمة مساعدة جزئي",
                    "nameEn": "Minor Domestic Labour",
                    "no": 1799
                  },
                  {
                    "nameAr": "قضية عمالية جزئية",
                    "nameEn": "Labor Summary Case",
                    "no": 1800
                  },
                  {
                    "nameAr": "أمر تقدير أتعاب محاماة تجاري",
                    "nameEn": "Order on Commercial Estimate Lawyer Fee",
                    "no": 1801
                  },
                  {
                    "nameAr": "عمالي خدمة مساعدة كلي",
                    "nameEn": "Major Domestic Labour",
                    "no": 1802
                  },
                  {
                    "nameAr": "قضية عمالية كلية",
                    "nameEn": "Labor Plenary Case",
                    "no": 1803
                  },
                  {
                    "nameAr": "أمر تقدير أتعاب محاماة تنفيذ",
                    "nameEn": "Order on Execution Estimate Lawyer Fee",
                    "no": 1804
                  },
                  {
                    "nameAr": "عمومي شرعي",
                    "nameEn": "General, Sharia",
                    "no": 1805
                  },
                  {
                    "nameAr": "دعوى مطالبة اتعاب محاماة",
                    "nameEn": "Lawsuit claiming attorney's fees",
                    "no": 1806
                  },
                  {
                    "nameAr": "قضية جنائية جنح",
                    "nameEn": "Criminal case - Misdemeanors",
                    "no": 1807
                  },
                  {
                    "nameAr": "أمر تقدير أتعاب محاماة عقاري",
                    "nameEn": "Order on Real Estate Estimate Lawyer Fee",
                    "no": 1808
                  },
                  {
                    "nameAr": "غرامات تجارية",
                    "nameEn": "Fines, commercial",
                    "no": 1809
                  },
                  {
                    "nameAr": "قضية جنائية جنايات",
                    "nameEn": "Criminal case -Felonies",
                    "no": 1810
                  },
                  {
                    "nameAr": "أمر تقدير أتعاب محاماة عمالي",
                    "nameEn": "Order on Labour Estimate Lawyer Fee",
                    "no": 1811
                  },
                  {
                    "nameAr": "غرامات تنفيذ شيكات",
                    "nameEn": "Fines, Cheques Execution",
                    "no": 1812
                  },
                  {
                    "nameAr": "قضية مرورية",
                    "nameEn": "Traffic Case",
                    "no": 1813
                  },
                  {
                    "nameAr": "أمر تقدير أتعاب محاماة مدني",
                    "nameEn": "Order on Civil Estimate Lawyer Fee",
                    "no": 1814
                  },
                  {
                    "nameAr": "غرامات شرعية",
                    "nameEn": "Fines, Sharia",
                    "no": 1815
                  },
                  {
                    "nameAr": "قضية أمن دولة",
                    "nameEn": "State Security Case",
                    "no": 1816
                  },
                  {
                    "nameAr": "أمر على عريضة - أدلة اثبات",
                    "nameEn": "Order on petition, Evidence",
                    "no": 1817
                  },
                  {
                    "nameAr": "غرامات عقارية",
                    "nameEn": "Fines, real estate",
                    "no": 1818
                  },
                  {
                    "nameAr": "أمر على عريضة - تدابير وقائية",
                    "nameEn": "Order on petition, Preventive measures",
                    "no": 1819
                  },
                  {
                    "nameAr": "غرامات عمالية",
                    "nameEn": "Fines, labor",
                    "no": 1820
                  },
                  {
                    "nameAr": "قضية أحوال شخصية",
                    "nameEn": "Personal Status Case",
                    "no": 1821
                  },
                  {
                    "nameAr": "أمر على عريضة المال المرهون",
                    "nameEn": "Order on petition - mortgaged properties",
                    "no": 1822
                  },
                  {
                    "nameAr": "غرامات مدنية",
                    "nameEn": "Fines, civil",
                    "no": 1823
                  },
                  {
                    "nameAr": "أمر على عريضة تحكيم",
                    "nameEn": "Order on petition, arbitration",
                    "no": 1824
                  },
                  {
                    "nameAr": "قرارات الهيئة العامة - التمييز",
                    "nameEn": "Decisions Of General Authority of the Cassation Court",
                    "no": 1825
                  },
                  {
                    "nameAr": "أمر على عريضة صيغة تنفيذية",
                    "nameEn": "Order on petition with stamping enforcement writ",
                    "no": 1826
                  },
                  {
                    "nameAr": "لجان أحوال شخصية",
                    "nameEn": "Personal Status Committees",
                    "no": 1827
                  },
                  {
                    "nameAr": "أمر على عريضة مدنى - استئناف",
                    "nameEn": "Order on civil petition, appeal",
                    "no": 1828
                  },
                  {
                    "nameAr": "لجان تجارية",
                    "nameEn": "Commercial committees",
                    "no": 1829
                  },
                  {
                    "nameAr": "حجز تحفظى تجارى",
                    "nameEn": "Commercial Prejudgment Attachment",
                    "no": 1830
                  },
                  {
                    "nameAr": "أمر على عريضه تجارى - استئناف",
                    "nameEn": "Order on Commercial petition, appeal",
                    "no": 1831
                  },
                  {
                    "nameAr": "لجان عقارية بشركة ميدان",
                    "nameEn": "Real estate committees - Maydan company",
                    "no": 1832
                  },
                  {
                    "nameAr": "إلتماس",
                    "nameEn": "Petition",
                    "no": 1833
                  },
                  {
                    "nameAr": "أمر على عريضه شرعى - استئناف",
                    "nameEn": "Order on Personal Status petition, appeal",
                    "no": 1834
                  },
                  {
                    "nameAr": "لجان عقارية شركة نخيل",
                    "nameEn": "Real estate committees - Nakheel company",
                    "no": 1835
                  },
                  {
                    "nameAr": "مدني أجارات و أخلاء",
                    "nameEn": "Civil rents and evictions",
                    "no": 1836
                  },
                  {
                    "nameAr": "ألتماس أحوال",
                    "nameEn": "Petition - Status",
                    "no": 1837
                  },
                  {
                    "nameAr": "أمر على عريضه عقارى - استئناف",
                    "nameEn": "Order on Real State petition, appeal",
                    "no": 1838
                  },
                  {
                    "nameAr": "لجان عمالية",
                    "nameEn": "Labor committees",
                    "no": 1839
                  },
                  {
                    "nameAr": "ألتماس تجاري",
                    "nameEn": "Petition - Commercial",
                    "no": 1840
                  },
                  {
                    "nameAr": "أمر على عريضه عمالي - استئناف",
                    "nameEn": "Order on labour petition, appeal",
                    "no": 1841
                  },
                  {
                    "nameAr": "لجان مدنية",
                    "nameEn": "Civil committees",
                    "no": 1842
                  },
                  {
                    "nameAr": "ألتماس مدني",
                    "nameEn": "Petition - Civil",
                    "no": 1843
                  },
                  {
                    "nameAr": "أمر منع من السفر",
                    "nameEn": "Order on Travel Ban",
                    "no": 1844
                  },
                  {
                    "nameAr": "لجنة تركة جمعة سيف الفلاسي",
                    "nameEn": "Inheritance Committee Of Juma Saif AlFlalasi",
                    "no": 1845
                  },
                  {
                    "nameAr": "أمن دولة",
                    "nameEn": "state security",
                    "no": 1846
                  },
                  {
                    "nameAr": "أمر نفقة مؤقتة",
                    "nameEn": "Order on temporary expense",
                    "no": 1847
                  },
                  {
                    "nameAr": "لجنة دبي القابضة",
                    "nameEn": "Dubai Holding Committee",
                    "no": 1848
                  },
                  {
                    "nameAr": "اداري اتحادي",
                    "nameEn": "Federal administrative",
                    "no": 1849
                  },
                  {
                    "nameAr": "إجراءات الإعسار",
                    "nameEn": "Insolvency Proceeding",
                    "no": 1850
                  },
                  {
                    "nameAr": "لجنة دعوى 362/2018 عقاري كلي",
                    "nameEn": "Committee of case 362/2018 real estate full jurisdiction",
                    "no": 1851
                  },
                  {
                    "nameAr": "دعوى الاستثمار",
                    "nameEn": "Investment suit",
                    "no": 1852
                  },
                  {
                    "nameAr": "اداري كلي",
                    "nameEn": "Administrativa Plenary Case",
                    "no": 1853
                  },
                  {
                    "nameAr": "إدارة تركات غير مسلمين",
                    "nameEn": "Management of Estates of Non-Muslims",
                    "no": 1854
                  },
                  {
                    "nameAr": "لجنة دعوى 77/2017 تجاري كلي",
                    "nameEn": "Committee of case 77/2017 commercial full jurisdiction",
                    "no": 1855
                  },
                  {
                    "nameAr": "اشكال",
                    "nameEn": "Grievance or Opposition",
                    "no": 1856
                  },
                  {
                    "nameAr": "إداري",
                    "nameEn": "Administrative",
                    "no": 1857
                  },
                  {
                    "nameAr": "لجنة شركة أملاك للتمويل ش.م.ع.",
                    "nameEn": "Amlak Finance Company PJSC Committee",
                    "no": 1858
                  },
                  {
                    "nameAr": "إذن بيع منقول مرهون",
                    "nameEn": "Selling permit of movable mortgage",
                    "no": 1859
                  },
                  {
                    "nameAr": "لجنة شركة محمد حاجي خوري",
                    "nameEn": "Mohamed Hajji Khori Committee",
                    "no": 1860
                  },
                  {
                    "nameAr": "إشكال من تنفيذ ايجارات",
                    "nameEn": "Rent Execution Problems",
                    "no": 1861
                  },
                  {
                    "nameAr": "لجنة فصل الشيكات العقارية",
                    "nameEn": "Real Estate Cheques Adjudication Committee",
                    "no": 1862
                  },
                  {
                    "nameAr": "إشكالات تنفيذ شيكات",
                    "nameEn": "Cheques Execution Problems",
                    "no": 1863
                  },
                  {
                    "nameAr": "لجنة قضائية بقرار 17-2021",
                    "nameEn": "Inheritance Committee Of Saeed Ahmad Lootah",
                    "no": 1864
                  },
                  {
                    "nameAr": "تجاري جزئي",
                    "nameEn": "Summary Commercial",
                    "no": 1865
                  },
                  {
                    "nameAr": "إنابة عقارية للمشاريع الملغاة",
                    "nameEn": "Delegations, Cancelled Real Estate Projects",
                    "no": 1866
                  },
                  {
                    "nameAr": "لجنة قضائية خاصة قرار 18/2021",
                    "nameEn": "Private Judicial Committee No. 18/2021",
                    "no": 1867
                  },
                  {
                    "nameAr": "احوال مال المسلمين",
                    "nameEn": "Funds matters, Muslims",
                    "no": 1868
                  },
                  {
                    "nameAr": "لجنة قضائية خاصة قرار 5 / 2022",
                    "nameEn": "Private Judicial Committee No.5 /2022",
                    "no": 1869
                  },
                  {
                    "nameAr": "تحكيم",
                    "nameEn": "Arbitration",
                    "no": 1870
                  },
                  {
                    "nameAr": "احوال مال غير المسلمين",
                    "nameEn": "Funds matters, non-Muslims",
                    "no": 1871
                  },
                  {
                    "nameAr": "لجنة قضائية خاصة قرار 5/ 2023",
                    "nameEn": "private Judicial Committee No. 5/ 2023",
                    "no": 1872
                  },
                  {
                    "nameAr": "تركات",
                    "nameEn": "Legacies",
                    "no": 1873
                  },
                  {
                    "nameAr": "احوال نفس غير مسلمين",
                    "nameEn": "Personal Status, Non-Muslims",
                    "no": 1874
                  },
                  {
                    "nameAr": "لجنة قضائية قرار 20/2022",
                    "nameEn": "Private Judicial Committee No. 20/2022",
                    "no": 1875
                  },
                  {
                    "nameAr": "تظلم",
                    "nameEn": "Grievance",
                    "no": 1876
                  },
                  {
                    "nameAr": "احوال نفس مسلمين",
                    "nameEn": "Personal Status, Muslim",
                    "no": 1877
                  },
                  {
                    "nameAr": "لجنة ليميتلس العالمية",
                    "nameEn": "Limitless International Committee",
                    "no": 1878
                  },
                  {
                    "nameAr": "تظلم - عرائض",
                    "nameEn": "Grievance - Petitions",
                    "no": 1879
                  },
                  {
                    "nameAr": "اختصام القضاة وأعضاء النيابة",
                    "nameEn": "Suing judges and member of the public prosecution",
                    "no": 1880
                  },
                  {
                    "nameAr": "لجنة ناشيونال جلف للاستثمار",
                    "nameEn": "National Gulf Investment Committee",
                    "no": 1881
                  },
                  {
                    "nameAr": "ادخال واخراج وارث غير مسلمين",
                    "nameEn": "Insertion and omission of an heir, non Muslims",
                    "no": 1882
                  },
                  {
                    "nameAr": "لجنة هندسة المدينة وأمن الدولة",
                    "nameEn": "Committee Of City Engineering Company And National Security",
                    "no": 1883
                  },
                  {
                    "nameAr": "تظلم - أحوال",
                    "nameEn": "Grievance -Status",
                    "no": 1884
                  },
                  {
                    "nameAr": "ادخال واخراج وارث مسلمين",
                    "nameEn": "Insertion and omission of an heir, Muslims",
                    "no": 1885
                  },
                  {
                    "nameAr": "مخاصمة",
                    "nameEn": "Litigation",
                    "no": 1886
                  },
                  {
                    "nameAr": "استئناف حقوق",
                    "nameEn": "Rights appeal",
                    "no": 1887
                  },
                  {
                    "nameAr": "مدني جزئي",
                    "nameEn": "Civil, Partial",
                    "no": 1888
                  },
                  {
                    "nameAr": "استئناف أمر على عريضة تجاري",
                    "nameEn": "Appeal of an order on petition, commercial",
                    "no": 1889
                  },
                  {
                    "nameAr": "مدني جزئي قديم",
                    "nameEn": "Civil, Partial, old",
                    "no": 1890
                  },
                  {
                    "nameAr": "استئناف أمر على عريضة شرعي",
                    "nameEn": "Appeal of an order on petition, Sharia",
                    "no": 1891
                  },
                  {
                    "nameAr": "مدني كلي",
                    "nameEn": "Civil, full jurisdiction",
                    "no": 1892
                  },
                  {
                    "nameAr": "استئناف أمر على عريضة عقاري",
                    "nameEn": "Appeal of an order on petition, real estate",
                    "no": 1893
                  },
                  {
                    "nameAr": "مدني وتجاري جزئي",
                    "nameEn": "Civil and commercial, Partial",
                    "no": 1894
                  },
                  {
                    "nameAr": "استئناف أمر على عريضة عمالي",
                    "nameEn": "Appeal of an order on petition, labor",
                    "no": 1895
                  },
                  {
                    "nameAr": "مدني وتجاري كلي",
                    "nameEn": "Civil and commercial, full jurisdiction",
                    "no": 1896
                  },
                  {
                    "nameAr": "استئناف أمر على عريضة مدني",
                    "nameEn": "Appeal of an order on petition, civil",
                    "no": 1897
                  },
                  {
                    "nameAr": "مدني وعمالي كلي",
                    "nameEn": "Civil and labor, full jurisdiction",
                    "no": 1898
                  },
                  {
                    "nameAr": "استئناف أمور مستعجلة تجاري",
                    "nameEn": "Appeal of summary matters, commercial",
                    "no": 1899
                  },
                  {
                    "nameAr": "ملف تحضير تركة - شؤون القصر",
                    "nameEn": "File Preparing Inheritance Claims",
                    "no": 1900
                  },
                  {
                    "nameAr": "توجيه اسري",
                    "nameEn": "Family Guidance",
                    "no": 1901
                  },
                  {
                    "nameAr": "استئناف أمور مستعجلة شرعية",
                    "nameEn": "Appeal of summary Sharia matters",
                    "no": 1902
                  },
                  {
                    "nameAr": "ملف تحضير تركة - لجان خارجية",
                    "nameEn": "File Preparing Inheritance Claims",
                    "no": 1903
                  },
                  {
                    "nameAr": "توفيق ومصالحة",
                    "nameEn": "Conciliation and Reconciliation",
                    "no": 1904
                  },
                  {
                    "nameAr": "استئناف أمور مستعجلة عقاري",
                    "nameEn": "Appeal of summary matters, real estate",
                    "no": 1905
                  },
                  {
                    "nameAr": "ملف تحضير دعاوى التركة",
                    "nameEn": "File Preparing Inheritance Claims",
                    "no": 1906
                  },
                  {
                    "nameAr": "جزائي",
                    "nameEn": "Penal or Criminal",
                    "no": 1907
                  },
                  {
                    "nameAr": "استئناف أمور مستعجلة عمالي",
                    "nameEn": "Appeal of summary matters, labor",
                    "no": 1908
                  },
                  {
                    "nameAr": "منازعة موضوعية التنفيذ التجاري",
                    "nameEn": "Substantive dispute in commercial execution",
                    "no": 1909
                  },
                  {
                    "nameAr": "جزائي - الظفرة",
                    "nameEn": "Criminal - Al Dhafra",
                    "no": 1910
                  },
                  {
                    "nameAr": "استئناف أمور مستعجلة مدني",
                    "nameEn": "Appeal of summary matters, civil",
                    "no": 1911
                  },
                  {
                    "nameAr": "منازعة موضوعية التنفيذ الشرعي",
                    "nameEn": "Substantive dispute in Personal execution",
                    "no": 1912
                  },
                  {
                    "nameAr": "جزائي - انتادب",
                    "nameEn": "Penal - Assignment",
                    "no": 1913
                  },
                  {
                    "nameAr": "استئناف إداري",
                    "nameEn": "Administrative Appeal",
                    "no": 1914
                  },
                  {
                    "nameAr": "منازعة موضوعية التنفيذ العقاري",
                    "nameEn": "Substantive dispute in real estate execution",
                    "no": 1915
                  },
                  {
                    "nameAr": "جزائي- الرحبة",
                    "nameEn": "Criminal - Al Rahba",
                    "no": 1916
                  },
                  {
                    "nameAr": "استئناف احوال شخصية ومواريث",
                    "nameEn": "Appeal of personal status and inheritance",
                    "no": 1917
                  },
                  {
                    "nameAr": "منازعة موضوعية التنفيذ العمالي",
                    "nameEn": "Substantive dispute in labor execution",
                    "no": 1918
                  },
                  {
                    "nameAr": "جزائي- بني ياس",
                    "nameEn": "Penal - Baniyas",
                    "no": 1919
                  },
                  {
                    "nameAr": "استئناف الامور المستعجلة",
                    "nameEn": "Appeal of summary matters",
                    "no": 1920
                  },
                  {
                    "nameAr": "منازعة موضوعية بالتنفيذ المدني",
                    "nameEn": "Substantive dispute in civil execution",
                    "no": 1921
                  },
                  {
                    "nameAr": "جزائي- دبي",
                    "nameEn": "Penal - Dubai",
                    "no": 1922
                  },
                  {
                    "nameAr": "استئناف التماس إعادة نظر تجاري",
                    "nameEn": "Appeal on petition for review, commercial",
                    "no": 1923
                  },
                  {
                    "nameAr": "منازعة موضوعية تنفيذ شيكات",
                    "nameEn": "Substantive dispute in Cheques Execution",
                    "no": 1924
                  },
                  {
                    "nameAr": "جزائي-معارضة",
                    "nameEn": "Penal-Opposition",
                    "no": 1925
                  },
                  {
                    "nameAr": "استئناف التماس إعادة نظر عقاري",
                    "nameEn": "Appeal on petition for review, real estate",
                    "no": 1926
                  },
                  {
                    "nameAr": "نزاع المال الشائع",
                    "nameEn": "Common Money Dispute",
                    "no": 1927
                  },
                  {
                    "nameAr": "جنايات",
                    "nameEn": "Felonies",
                    "no": 1928
                  },
                  {
                    "nameAr": "استئناف التماس إعادة نظر عمالي",
                    "nameEn": "Appeal on petition for review, labor",
                    "no": 1929
                  },
                  {
                    "nameAr": "نزاع تجاري",
                    "nameEn": "Commercial Dispute",
                    "no": 1930
                  },
                  {
                    "nameAr": "جنح",
                    "nameEn": "Misdemeanors",
                    "no": 1931
                  },
                  {
                    "nameAr": "استئناف التماس إعادة نظر مدني",
                    "nameEn": "Appeal on Petition for review, civil",
                    "no": 1932
                  },
                  {
                    "nameAr": "نزاع تعيين خبرة عقاري",
                    "nameEn": "Real estate Expert Appointment Dispute",
                    "no": 1933
                  },
                  {
                    "nameAr": "جنحة أسرة",
                    "nameEn": "Family Misdemeanor",
                    "no": 1934
                  },
                  {
                    "nameAr": "استئناف التماس إعادة نظرأحوال",
                    "nameEn": "Appeal on petition for review, personal status",
                    "no": 1935
                  },
                  {
                    "nameAr": "نزاع تعيين خبرة عمالي",
                    "nameEn": "Labor Expert Appointment Dispute",
                    "no": 1936
                  },
                  {
                    "nameAr": "استئناف التنفيد",
                    "nameEn": "Appeal of execution",
                    "no": 1937
                  },
                  {
                    "nameAr": "نزاع تعيين خبرة مدني",
                    "nameEn": "Civil Expert Appointment Dispute",
                    "no": 1938
                  },
                  {
                    "nameAr": "استئناف انابات تجارية",
                    "nameEn": "Appeal of commercial delegations",
                    "no": 1939
                  },
                  {
                    "nameAr": "نزاع عمالي",
                    "nameEn": "Labor dispute",
                    "no": 1940
                  },
                  {
                    "nameAr": "استئناف انابات عقارية",
                    "nameEn": "Appeal of real estate delegations",
                    "no": 1941
                  },
                  {
                    "nameAr": "نزاع مدني",
                    "nameEn": "Civil dispute",
                    "no": 1942
                  },
                  {
                    "nameAr": "استئناف انابات عمالية",
                    "nameEn": "Appeal of labor delegations",
                    "no": 1943
                  },
                  {
                    "nameAr": "نوع مؤقت لتعريف أشخاص ثانويين",
                    "nameEn": "Temporary type to introduce secondary persons",
                    "no": 1944
                  },
                  {
                    "nameAr": "استئناف انابات قضائية",
                    "nameEn": "Appeal of judicial delegations",
                    "no": 1945
                  },
                  {
                    "nameAr": "وقف",
                    "nameEn": "Endowment (Waqf)",
                    "no": 1946
                  },
                  {
                    "nameAr": "استئناف انابات قضائية شرعية",
                    "nameEn": "Appeal of Sharia judicial delegations",
                    "no": 1947
                  },
                  {
                    "nameAr": "استئناف انابات مدنية",
                    "nameEn": "Appeal of civil delegations",
                    "no": 1948
                  },
                  {
                    "nameAr": "فتح خزنة",
                    "nameEn": "Open the safe",
                    "no": 1949
                  },
                  {
                    "nameAr": "استئناف تظلم شرعي",
                    "nameEn": "Appeal of a Sharia grievance",
                    "no": 1950
                  },
                  {
                    "nameAr": "استئناف تظلم عقاري",
                    "nameEn": "Appeal of a real estate grievance",
                    "no": 1951
                  },
                  {
                    "nameAr": "استئناف تظلم عمالي",
                    "nameEn": "Appeal of labor grievance",
                    "no": 1952
                  },
                  {
                    "nameAr": "استئناف تظلم مدني",
                    "nameEn": "Appeal of civil grievance",
                    "no": 1953
                  },
                  {
                    "nameAr": "استئناف تنفيذ تجاري",
                    "nameEn": "Appeal of commercial execution",
                    "no": 1954
                  },
                  {
                    "nameAr": "مدني بسيطة",
                    "nameEn": "simple civilian",
                    "no": 1955
                  },
                  {
                    "nameAr": "استئناف تنفيذ شرعي",
                    "nameEn": "Appeal of Sharia execution",
                    "no": 1956
                  },
                  {
                    "nameAr": "استئناف تنفيذ عقاري",
                    "nameEn": "Appeal of real estate execution",
                    "no": 1957
                  },
                  {
                    "nameAr": "س. منازعات",
                    "nameEn": "Appeal -Disputes",
                    "no": 1958
                  },
                  {
                    "nameAr": "استئناف تنفيذ عمالي",
                    "nameEn": "Appeal of labor execution",
                    "no": 1959
                  },
                  {
                    "nameAr": "طعن أحوال",
                    "nameEn": "Status Challenge / Appeal",
                    "no": 1960
                  },
                  {
                    "nameAr": "استئناف تنفيذ مدني",
                    "nameEn": "Appeal of civil execution",
                    "no": 1961
                  },
                  {
                    "nameAr": "طعن اتحادية عليا",
                    "nameEn": "Federal Supreme Appeal",
                    "no": 1962
                  },
                  {
                    "nameAr": "استئناف شرعي (قديم)",
                    "nameEn": "Sharia appeal (old)",
                    "no": 1963
                  },
                  {
                    "nameAr": "طعن اداري",
                    "nameEn": "Administrative Appeal",
                    "no": 1964
                  },
                  {
                    "nameAr": "استئناف عمالي",
                    "nameEn": "Labor appeal",
                    "no": 1965
                  },
                  {
                    "nameAr": "طعن ايجارات",
                    "nameEn": "Leasing Challenge",
                    "no": 1966
                  },
                  {
                    "nameAr": "طلب شيك",
                    "nameEn": "Cheque Case",
                    "no": 1967
                  },
                  {
                    "nameAr": "استئناف مدني",
                    "nameEn": "Civil appeal",
                    "no": 1968
                  },
                  {
                    "nameAr": "طعن تجاري",
                    "nameEn": "Commercial Appeal",
                    "no": 1969
                  },
                  {
                    "nameAr": "استشارات أسرية",
                    "nameEn": "Family Counseling",
                    "no": 1970
                  },
                  {
                    "nameAr": "طعن تمييز - دبي",
                    "nameEn": "Cassation appeal - Dubai",
                    "no": 1971
                  },
                  {
                    "nameAr": "اشكالات تجارية",
                    "nameEn": "Problems, commercial",
                    "no": 1972
                  },
                  {
                    "nameAr": "طعن جزائي",
                    "nameEn": "Penal Appeal",
                    "no": 1973
                  },
                  {
                    "nameAr": "اشكالات شرعية",
                    "nameEn": "Problems, Sharia",
                    "no": 1974
                  },
                  {
                    "nameAr": "طعن عمالي",
                    "nameEn": "Labor Challenge",
                    "no": 1975
                  },
                  {
                    "nameAr": "اشكالات عقارية",
                    "nameEn": "Problems, real estate",
                    "no": 1976
                  },
                  {
                    "nameAr": "طعن مدني",
                    "nameEn": "Civil Challenge",
                    "no": 1977
                  },
                  {
                    "nameAr": "اشكالات عمالية",
                    "nameEn": "Problems, labor",
                    "no": 1978
                  },
                  {
                    "nameAr": "طعن منازعات",
                    "nameEn": "Disputes Challenge",
                    "no": 1979
                  },
                  {
                    "nameAr": "اشكالات محررات كاتب عدل",
                    "nameEn": "Problems, Notary Public Documents",
                    "no": 1980
                  },
                  {
                    "nameAr": "عمالي جزئي",
                    "nameEn": "Labor Summary",
                    "no": 1981
                  },
                  {
                    "nameAr": "اشكالات مدنية",
                    "nameEn": "Problems,, civil",
                    "no": 1982
                  },
                  {
                    "nameAr": "عمالي كلي",
                    "nameEn": "Labor Plenary",
                    "no": 1983
                  },
                  {
                    "nameAr": "اشهاد حصر إرث غير مسلمين",
                    "nameEn": "Ratification of Non Muslims heirs",
                    "no": 1984
                  },
                  {
                    "nameAr": "قضية عقارية",
                    "nameEn": "Real estate case",
                    "no": 1985
                  },
                  {
                    "nameAr": "اشهاد حصر إرث مسلمين",
                    "nameEn": "Ratification of Muslims heirs",
                    "no": 1986
                  },
                  {
                    "nameAr": "مدني مستعجل",
                    "nameEn": "Urgent case - Civil",
                    "no": 1987
                  },
                  {
                    "nameAr": "اشهار إفلاس",
                    "nameEn": "Declaration of bankruptcy",
                    "no": 1988
                  },
                  {
                    "nameAr": "مستعجل",
                    "nameEn": "Summery proceedings / Action",
                    "no": 1989
                  },
                  {
                    "nameAr": "اعتراض حقوق شرعي",
                    "nameEn": "Objection, rights, Sharia",
                    "no": 1990
                  },
                  {
                    "nameAr": "مصالحة",
                    "nameEn": "Reconciliation",
                    "no": 1991
                  },
                  {
                    "nameAr": "اعتراض حقوق مدني",
                    "nameEn": "Objection, rights, civil",
                    "no": 1992
                  },
                  {
                    "nameAr": "منازعات مستعجل",
                    "nameEn": "Urgent Disputes",
                    "no": 1993
                  },
                  {
                    "nameAr": "اعتراض على بيع منقول مرهون",
                    "nameEn": "Objection on selling permit of Movable Mortgage",
                    "no": 1994
                  },
                  {
                    "nameAr": "نزاع تجاري دبي",
                    "nameEn": "Dubai trade dispute",
                    "no": 1995
                  },
                  {
                    "nameAr": "اعتماد اتفاقية الصلح",
                    "nameEn": "Approval of the Reconciliation Agreement",
                    "no": 1996
                  },
                  {
                    "nameAr": "نزاع مدني دبي",
                    "nameEn": "Dubai civil dispute",
                    "no": 1997
                  },
                  {
                    "nameAr": "اعلام شرعي غير مسلمين",
                    "nameEn": "Sharia declaration, Non-Muslims",
                    "no": 1998
                  },
                  {
                    "nameAr": "تجارى كلى",
                    "nameEn": "Plenary Commercial",
                    "no": 1999
                  },
                  {
                    "nameAr": "اعلام شرعي مسلمين",
                    "nameEn": "Sharia declaration, Muslims",
                    "no": 2000
                  },
                  {
                    "nameAr": "تظام تجارى",
                    "nameEn": "Opposistion Commercial",
                    "no": 2001
                  },
                  {
                    "nameAr": "الاشكالات",
                    "nameEn": "Problems",
                    "no": 2002
                  },
                  {
                    "nameAr": "تظلم تجارى",
                    "nameEn": "Grievance Commercial",
                    "no": 2003
                  },
                  {
                    "nameAr": "التماس إعادة نظر تجاري-استئناف",
                    "nameEn": "Petition for review, commercial, appeal",
                    "no": 2004
                  },
                  {
                    "nameAr": "مدنى كلى",
                    "nameEn": "Plenary Civil",
                    "no": 2005
                  },
                  {
                    "nameAr": "التماس إعادة نظر عقاري-استئناف",
                    "nameEn": "Petition for review, real estate, appeal",
                    "no": 2006
                  },
                  {
                    "nameAr": "لجان عقارية",
                    "nameEn": "Real Estate Commeeties",
                    "no": 2007
                  },
                  {
                    "nameAr": "التماس إعادة نظر عمالي-استئناف",
                    "nameEn": "Petition for review, labor, appeal",
                    "no": 2008
                  },
                  {
                    "nameAr": "استئناف تظلم تجاري",
                    "nameEn": "Commercial Grievance Appeal",
                    "no": 2009
                  },
                  {
                    "nameAr": "التماس إعادة نظر مدني-استئناف",
                    "nameEn": "Petition for review, civil, appeal",
                    "no": 2010
                  },
                  {
                    "nameAr": "أمر على عريضة تجارى",
                    "nameEn": "Act of petition - Commercial",
                    "no": 2011
                  },
                  {
                    "nameAr": "التماس إعادة نظر(حقوق)-استئناف",
                    "nameEn": "Petition for review (rights, appeal",
                    "no": 2012
                  },
                  {
                    "nameAr": "مدنى جزئى",
                    "nameEn": "Summery Civil",
                    "no": 2013
                  },
                  {
                    "nameAr": "التماس إعادة نظر-أحوال",
                    "nameEn": "Petition for review, personal status",
                    "no": 2014
                  },
                  {
                    "nameAr": "أحوال شخصية",
                    "nameEn": "Civil Status",
                    "no": 2015
                  },
                  {
                    "nameAr": "التماس إعادة نظر-أحوال شخصية",
                    "nameEn": "Petition for review, personal status",
                    "no": 2016
                  },
                  {
                    "nameAr": "الإستئناف",
                    "nameEn": "Appeal",
                    "no": 2017
                  },
                  {
                    "nameAr": "التماس إعادة نظر-حقوق",
                    "nameEn": "Petition for review, rights",
                    "no": 2018
                  },
                  {
                    "nameAr": "استئناف مدنى",
                    "nameEn": "Civil Appeal",
                    "no": 2019
                  },
                  {
                    "nameAr": "التماس اعادة نظر",
                    "nameEn": "Petition for review",
                    "no": 2020
                  },
                  {
                    "nameAr": "عقارى كلى",
                    "nameEn": "Real Estate- Plenary",
                    "no": 2021
                  },
                  {
                    "nameAr": "التماس اعادة نظر - شرعي",
                    "nameEn": "Petition for review, Sharia",
                    "no": 2022
                  },
                  {
                    "nameAr": "التماس اعادة نظر تجاري",
                    "nameEn": "Petition for review, commercial",
                    "no": 2023
                  },
                  {
                    "nameAr": "التماس اعادة نظر عقاري",
                    "nameEn": "Petition for review, real estate",
                    "no": 2024
                  },
                  {
                    "nameAr": "التماس اعادة نظر عمالي",
                    "nameEn": "Petition for review, labor",
                    "no": 2025
                  }
                ]

            case "Case Stage":
              return [
                {
                  "nameAr": "ابتــدائي",
                  "nameEn": "primary First Instance",
                  "no": 3000
                },
                {
                  "nameAr": "استئناف",
                  "nameEn": "resumption Appeal",
                  "no": 3001
                },
                {
                  "nameAr": "تظلم من أمر على عريضة",
                  "nameEn": "Grievance -Act of Petition",
                  "no": 3002
                },
                {
                  "nameAr": "تنفيذ",
                  "nameEn": "Execution",
                  "no": 3003
                },
                {
                  "nameAr": "مستعجل",
                  "nameEn": "Urgent",
                  "no": 3004
                },
                {
                  "nameAr": "تسوية",
                  "nameEn": "Conciliation",
                  "no": 3005
                },
                {
                  "nameAr": "نزاع",
                  "nameEn": "Dispute",
                  "no": 3006
                },
                {
                  "nameAr": "نقــــض",
                  "nameEn": "Cassation",
                  "no": 3007
                },
                {
                  "nameAr": "التماس",
                  "nameEn": "Petition",
                  "no": 3008
                },
                {
                  "nameAr": "انتداب",
                  "nameEn": "Assignment / Appointment",
                  "no": 3009
                },
                {
                  "nameAr": "معارضة",
                  "nameEn": "Opposition",
                  "no": 3010
                },
                {
                  "nameAr": "طعن",
                  "nameEn": "Challenge",
                  "no": 3011
                },
                {
                  "nameAr": "حجز تحفظى تجارى",
                  "nameEn": "Commercial Prejudgment Attachment",
                  "no": 3012
                },
                {
                  "nameAr": "امر على عريضه تجارى",
                  "nameEn": "Commercial -Act of Petition",
                  "no": 3013
                },
                {
                  "nameAr": "ادخال واخراج وارث - نفس مسلمين",
                  "nameEn": "Inheritor's in and out - Muslims Status",
                  "no": 3014
                },
                {
                  "nameAr": "تظلم من حجز تحفظى",
                  "nameEn": "Prejudgment Attachment Grievance",
                  "no": 3015
                },
                {
                  "nameAr": "تظلم تجارى",
                  "nameEn": "Commercial Grievance",
                  "no": 3016
                },
                {
                  "nameAr": "جزاء",
                  "nameEn": "Penal",
                  "no": 3017
                },
                {
                  "nameAr": "تظلم",
                  "nameEn": "Grievance",
                  "no": 3018
                },
                {
                  "nameAr": "نزاع تعيين خبرة تجاري",
                  "nameEn": "Expert Appontment Dispute - Commercial",
                  "no": 3019
                },
                {
                  "nameAr": "تعيين خبرة",
                  "nameEn": "Expert Appointment",
                  "no": 3020
                },
                {
                  "nameAr": "عقاري جزئي",
                  "nameEn": "Summary Real Estate",
                  "no": 3021
                },
                {
                  "nameAr": "تجاري جزئي",
                  "nameEn": "Summary Commercial",
                  "no": 3022
                },
                {
                  "nameAr": "تجاري مصاري جزئي",
                  "nameEn": "Summary Commercial Banking",
                  "no": 3023
                },
                {
                  "nameAr": "استئناف تجاري",
                  "nameEn": "Commercial Appeal",
                  "no": 3024
                },
                {
                  "nameAr": "نزاع تجاري",
                  "nameEn": "Commercial Dispute",
                  "no": 3025
                },
                {
                  "nameAr": "استئناف مدنى",
                  "nameEn": "Civil Appeal",
                  "no": 3026
                },
                {
                  "nameAr": "حجز تحفظي - مركبات",
                  "nameEn": "Reservation - cars",
                  "no": 3027
                },
                {
                  "nameAr": "غير مستعجل",
                  "nameEn": "Not in a hurry",
                  "no": 3028
                },
                {
                  "nameAr": "انذار فقط",
                  "nameEn": "Legal Notice Only",
                  "no": 3029
                },
                {
                  "nameAr": "أمر على عريضة - معاينة مأجور",
                  "nameEn": "Petition order - premises inspection",
                  "no": 3030
                },
                {
                  "nameAr": "إخطار عدلي",
                  "nameEn": "Notary public notice",
                  "no": 3031
                }
              ]

            case "Fees Item":
                return [
                  {
                    "nameAr": "اعتراض على تقرير المحاسب",
                    "nameEn": "Objection to the accountant's report",
                    "no": 4000
                  },
                  {
                    "nameAr": "تقديم طلب صرف المبلغ المودع بالتنفيذ",
                    "nameEn": "Submit a request for disbursement of the deposited amount",
                    "no": 4001
                  },
                  {
                    "nameAr": "اعادة اجراءات",
                    "nameEn": "Reprocedures",
                    "no": 4002
                  },
                  {
                    "nameAr": "اعادة ضبط وإحضار",
                    "nameEn": "Writ of Arrest",
                    "no": 4003
                  },
                  {
                    "nameAr": "طلب شهادة الرسوم المستحقة",
                    "nameEn": "Certificate of Payable Fees",
                    "no": 4004
                  },
                  {
                    "nameAr": "محضر جلسة المحكمة",
                    "nameEn": "Court hearing record",
                    "no": 4005
                  },
                  {
                    "nameAr": "الغاء اجراءات التنفيذية",
                    "nameEn": "Cancellation of executive procedures",
                    "no": 4006
                  },
                  {
                    "nameAr": "طلب تصوير محضر جلسة",
                    "nameEn": "Application for a hearing record",
                    "no": 4007
                  },
                  {
                    "nameAr": "اضافة مستندات حسابية",
                    "nameEn": "Submission of Accounts Documents",
                    "no": 4008
                  },
                  {
                    "nameAr": "طلب ايجاري",
                    "nameEn": "Rent Application",
                    "no": 4009
                  },
                  {
                    "nameAr": "طلب شهادة عدم وجود ايداعات",
                    "nameEn": "No Deposit Certificate Application",
                    "no": 4010
                  },
                  {
                    "nameAr": "طلب حجز على الحسابات",
                    "nameEn": "Reservation request on accounts",
                    "no": 4011
                  },
                  {
                    "nameAr": "طلب حجز السيارات",
                    "nameEn": "Car reservation request",
                    "no": 4012
                  },
                  {
                    "nameAr": "طلب حجز على الرخصة التجارية",
                    "nameEn": "Commercial license reservation request",
                    "no": 4013
                  },
                  {
                    "nameAr": "الدفعة الأولى 50٪ من إجمالي الرسوم القانونية",
                    "nameEn": "First payment 50% from total legal charges",
                    "no": 4014
                  },
                  {
                    "nameAr": "طلب تصحيح خطأ مادي الحكم",
                    "nameEn": "A request to correct a material error in the judgment",
                    "no": 4015
                  },
                  {
                    "nameAr": "المنع من السفر",
                    "nameEn": "travel ban resolution Fees",
                    "no": 4016
                  },
                  {
                    "nameAr": "رسوم طلب إيجاري",
                    "nameEn": "Rent Application Fees",
                    "no": 4017
                  },
                  {
                    "nameAr": "رسوم إنذار عدلي",
                    "nameEn": "Legal notice fees",
                    "no": 4018
                  },
                  {
                    "nameAr": "رسوم إعلان بالنشر",
                    "nameEn": "Public Notice Fees",
                    "no": 4019
                  },
                  {
                    "nameAr": "رسوم قيد دعوى",
                    "nameEn": "Case filing fees",
                    "no": 4020
                  },
                  {
                    "nameAr": "رسوم اخرى",
                    "nameEn": "Other Fees",
                    "no": 4021
                  },
                  {
                    "nameAr": "رسوم المحكمة",
                    "nameEn": "Courts Fees",
                    "no": 4022
                  },
                  {
                    "nameAr": "رسوم فتح الملف",
                    "nameEn": "File Opening Fees",
                    "no": 4023
                  },
                  {
                    "nameAr": "أتعاب المحاماة",
                    "nameEn": "Professional Fees",
                    "no": 4024
                  },
                  {
                    "nameAr": "رسوم تقييد الشيك",
                    "nameEn": "Cheque Registration Fees",
                    "no": 4025
                  },
                  {
                    "nameAr": "رسوم ترجمة",
                    "nameEn": "Translation Fees",
                    "no": 4026
                  },
                  {
                    "nameAr": "رسوم قيد شيك",
                    "nameEn": "Cheque Registration No",
                    "no": 4027
                  },
                  {
                    "nameAr": "رسوم قيد تنفيذ",
                    "nameEn": "Execution Fees",
                    "no": 4028
                  },
                  {
                    "nameAr": "رسوم اعلان",
                    "nameEn": "Notice Fees",
                    "no": 4029
                  }
                ]


        }

    }
};