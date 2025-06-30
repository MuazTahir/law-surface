'use client';
import React, { useEffect, useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { Controller, useForm } from 'react-hook-form';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import Link from 'next/link';

export default function CombinedForm() {
  let router = useRouter();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    trigger
  } = useForm();
  const [phoneNumber, setPhoneNumber] = useState('');

  let [legalForms, setLegalForms] = useState([]);

  let [nationality, setNationality] = useState([
    { no: 8000, nameEn: 'Afghanistan', nameAr: 'أفغانستان' },
    { no: 8001, nameEn: 'Aland Islands', nameAr: 'جزر آلاند' },
    { no: 8002, nameEn: 'Albania', nameAr: 'ألبانيا' },
    { no: 8003, nameEn: 'Algeria', nameAr: 'الجزائر' },
    { no: 8004, nameEn: 'American Samoa', nameAr: 'ساموا الأمريكية' },
    { no: 8005, nameEn: 'Andorra', nameAr: 'أندورا' },
    { no: 8006, nameEn: 'Angola', nameAr: 'أنغولا' },
    { no: 8007, nameEn: 'Anguilla', nameAr: 'أنغويلا' },
    { no: 8008, nameEn: 'Antarctica', nameAr: 'أنتاركتيكا' },
    { no: 8009, nameEn: 'Antigua And Barbuda', nameAr: 'أنتيغوا وبربودا' },
    { no: 8010, nameEn: 'Argentina', nameAr: 'الأرجنتين' },
    { no: 8011, nameEn: 'Armenia', nameAr: 'أرمينيا' },
    { no: 8012, nameEn: 'Aruba', nameAr: 'أروبا' },
    { no: 8013, nameEn: 'Australia', nameAr: 'أستراليا' },
    { no: 8014, nameEn: 'Austria', nameAr: 'النمسا' },
    { no: 8015, nameEn: 'Azerbaijan', nameAr: 'أذربيجان' },
    { no: 8016, nameEn: 'Bahamas', nameAr: 'الباهاماس' },
    { no: 8017, nameEn: 'Bahrain', nameAr: 'البحرين' },
    { no: 8018, nameEn: 'Bangladesh', nameAr: 'بنغلاديش' },
    { no: 8019, nameEn: 'Barbados', nameAr: 'بربادوس' },
    { no: 8020, nameEn: 'Belarus', nameAr: 'بيلاروسيا' },
    { no: 8021, nameEn: 'Belgium', nameAr: 'بلجيكا' },
    { no: 8022, nameEn: 'Belize', nameAr: 'بليز' },
    { no: 8023, nameEn: 'Benin', nameAr: 'بنين' },
    { no: 8024, nameEn: 'Bermuda', nameAr: 'برمودا' },
    { no: 8025, nameEn: 'Bhutan', nameAr: 'بوتان' },
    { no: 8026, nameEn: 'Bolivia', nameAr: 'بوليفيا' },
    { no: 8027, nameEn: 'Bonaire, Sint Eustatius And Saba', nameAr: 'بونير، سينت أوستاتيوس وسابا' },
    { no: 8028, nameEn: 'Bosnia And Herzegovina', nameAr: 'البوسنة والهرسك' },
    { no: 8029, nameEn: 'Botswana', nameAr: 'بوتسوانا' },
    { no: 8030, nameEn: 'Bouvet Island', nameAr: 'جزيرة بوفيت' },
    { no: 8031, nameEn: 'Brazil', nameAr: 'البرازيل' },
    { no: 8032, nameEn: 'British Indian Ocean Territory', nameAr: 'إقليم المحيط الهندي البريطاني' },
    { no: 8033, nameEn: 'Brunei Darussalam', nameAr: 'بروناي' },
    { no: 8034, nameEn: 'Bulgaria', nameAr: 'بلغاريا' },
    { no: 8035, nameEn: 'Burkina Faso', nameAr: 'بوركينا فاسو' },
    { no: 8036, nameEn: 'Burundi', nameAr: 'بوروندي' },
    { no: 8037, nameEn: 'Cambodia', nameAr: 'كمبوديا' },
    { no: 8038, nameEn: 'Cameroon', nameAr: 'الكاميرون' },
    { no: 8039, nameEn: 'Canada', nameAr: 'كندا' },
    { no: 8040, nameEn: 'Cape Verde', nameAr: 'الرأس الأخضر' },
    { no: 8041, nameEn: 'Cayman Islands', nameAr: 'جزر كايمان' },
    { no: 8042, nameEn: 'Central African Republic', nameAr: 'جمهورية أفريقيا الوسطى' },
    { no: 8043, nameEn: 'Chad', nameAr: 'تشاد' },
    { no: 8044, nameEn: 'Chile', nameAr: 'تشيلي' },
    { no: 8045, nameEn: 'China', nameAr: 'الصين' },
    { no: 8046, nameEn: 'Christmas Island', nameAr: 'جزيرة الكريسماس' },
    { no: 8047, nameEn: 'Cocos (Keeling) Islands', nameAr: 'جزر كوكوس' },
    { no: 8048, nameEn: 'Colombia', nameAr: 'كولومبيا' },
    { no: 8049, nameEn: 'Comoros', nameAr: 'جزر القمر' },
    { no: 8050, nameEn: 'Congo', nameAr: 'الكونغو' },
    { no: 8051, nameEn: 'Congo, Democratic Republic Of The Congo', nameAr: 'جمهورية الكونغو الديمقراطية' },
    { no: 8052, nameEn: 'Cook Islands', nameAr: 'جزر كوك' },
    { no: 8053, nameEn: 'Costa Rica', nameAr: 'كوستاريكا' },
    { no: 8054, nameEn: "Cote D'Ivoire", nameAr: 'ساحل العاج' },
    { no: 8055, nameEn: 'Croatia', nameAr: 'كرواتيا' },
    { no: 8056, nameEn: 'Cuba', nameAr: 'كوبا' },
    { no: 8057, nameEn: 'Curacao', nameAr: 'كوراساو' },
    { no: 8058, nameEn: 'Cyprus', nameAr: 'قبرص' },
    { no: 8059, nameEn: 'Czech Republic', nameAr: 'جمهورية التشيك' },
    { no: 8060, nameEn: 'Denmark', nameAr: 'الدنمارك' },
    { no: 8061, nameEn: 'Djibouti', nameAr: 'جيبوتي' },
    { no: 8062, nameEn: 'Dominica', nameAr: 'دومينيكا' },
    { no: 8063, nameEn: 'Dominican Republic', nameAr: 'جمهورية الدومينيكان' },
    { no: 8064, nameEn: 'Ecuador', nameAr: 'الإكوادور' },
    { no: 8065, nameEn: 'Egypt', nameAr: 'مصر' },
    { no: 8066, nameEn: 'El Salvador', nameAr: 'السلفادور' },
    { no: 8067, nameEn: 'Equatorial Guinea', nameAr: 'غينيا الاستوائية' },
    { no: 8068, nameEn: 'Eritrea', nameAr: 'إريتريا' },
    { no: 8069, nameEn: 'Estonia', nameAr: 'إستونيا' },
    { no: 8070, nameEn: 'Ethiopia', nameAr: 'إثيوبيا' },
    { no: 8071, nameEn: 'Falkland Islands (Malvinas)', nameAr: 'جزر فوكلاند' },
    { no: 8072, nameEn: 'Faroe Islands', nameAr: 'جزر فارو' },
    { no: 8073, nameEn: 'Fiji', nameAr: 'فيجي' },
    { no: 8074, nameEn: 'Finland', nameAr: 'فنلندا' },
    { no: 8075, nameEn: 'France', nameAr: 'فرنسا' },
    { no: 8076, nameEn: 'French Guiana', nameAr: 'غيانا الفرنسية' },
    { no: 8077, nameEn: 'French Polynesia', nameAr: 'بولينيزيا الفرنسية' },
    { no: 8078, nameEn: 'French Southern Territories', nameAr: 'الأقاليم الجنوبية الفرنسية' },
    { no: 8079, nameEn: 'Gabon', nameAr: 'الغابون' },
    { no: 8080, nameEn: 'Gambia', nameAr: 'غامبيا' },
    { no: 8081, nameEn: 'Georgia', nameAr: 'جورجيا' },
    { no: 8082, nameEn: 'Germany', nameAr: 'ألمانيا' },
    { no: 8083, nameEn: 'Ghana', nameAr: 'غانا' },
    { no: 8084, nameEn: 'Gibraltar', nameAr: 'جبل طارق' },
    { no: 8085, nameEn: 'Greece', nameAr: 'اليونان' },
    { no: 8086, nameEn: 'Greenland', nameAr: 'جرينلاند' },
    { no: 8087, nameEn: 'Grenada', nameAr: 'غرينادا' },
    { no: 8088, nameEn: 'Guadeloupe', nameAr: 'جوادلوب' },
    { no: 8089, nameEn: 'Guam', nameAr: 'جوام' },
    { no: 8090, nameEn: 'Guatemala', nameAr: 'غواتيمالا' },
    { no: 8091, nameEn: 'Guernsey', nameAr: 'غيرنزي' },
    { no: 8092, nameEn: 'Guinea', nameAr: 'غينيا' },
    { no: 8093, nameEn: 'Guinea-Bissau', nameAr: 'غينيا بيساو' },
    { no: 8094, nameEn: 'Guyana', nameAr: 'غيانا' },
    { no: 8095, nameEn: 'Haiti', nameAr: 'هايتي' },
    { no: 8096, nameEn: 'Heard Island And McDonald Islands', nameAr: 'جزيرة هيرد وجزر ماكدونالد' },
    { no: 8097, nameEn: 'Holy See (Vatican City State)', nameAr: 'الفاتيكان' },
    { no: 8098, nameEn: 'Honduras', nameAr: 'هندوراس' },
    { no: 8099, nameEn: 'Hong Kong', nameAr: 'هونغ كونغ' },
    { no: 8100, nameEn: 'Hungary', nameAr: 'المجر' },
    { no: 8101, nameEn: 'Iceland', nameAr: 'آيسلندا' },
    { no: 8102, nameEn: 'India', nameAr: 'الهند' },
    { no: 8103, nameEn: 'Indonesia', nameAr: 'إندونيسيا' },
    { no: 8104, nameEn: 'Iran, Islamic Republic Of', nameAr: 'إيران' },
    { no: 8105, nameEn: 'Iraq', nameAr: 'العراق' },
    { no: 8106, nameEn: 'Ireland', nameAr: 'أيرلندا' },
    { no: 8107, nameEn: 'Isle Of Man', nameAr: 'جزيرة مان' },
    { no: 8108, nameEn: 'Italy', nameAr: 'إيطاليا' },
    { no: 8109, nameEn: 'Jamaica', nameAr: 'جامايكا' },
    { no: 8110, nameEn: 'Japan', nameAr: 'اليابان' },
    { no: 8111, nameEn: 'Jersey', nameAr: 'جيرزي' },
    { no: 8112, nameEn: 'Jordan', nameAr: 'الأردن' },
    { no: 8113, nameEn: 'Kazakhstan', nameAr: 'كازاخستان' },
    { no: 8114, nameEn: 'Kenya', nameAr: 'كينيا' },
    { no: 8115, nameEn: 'Kiribati', nameAr: 'كيريباس' },
    { no: 8116, nameEn: "Korea, Democratic People's Republic Of", nameAr: 'كوريا الشمالية' },
    { no: 8117, nameEn: 'Korea, Republic Of', nameAr: 'كوريا الجنوبية' },
    { no: 8118, nameEn: 'Kosovo', nameAr: 'كوسوفو' },
    { no: 8119, nameEn: 'Kuwait', nameAr: 'الكويت' },
    { no: 8120, nameEn: 'Kyrgyzstan', nameAr: 'قيرغيزستان' },
    { no: 8121, nameEn: "Lao People's Democratic Republic", nameAr: 'لاوس' },
    { no: 8122, nameEn: 'Latvia', nameAr: 'لاتفيا' },
    { no: 8123, nameEn: 'Lebanon', nameAr: 'لبنان' },
    { no: 8124, nameEn: 'Lesotho', nameAr: 'ليسوتو' },
    { no: 8125, nameEn: 'Liberia', nameAr: 'ليبيريا' },
    { no: 8126, nameEn: 'Libyan Arab Jamahiriya', nameAr: 'ليبيا' },
    { no: 8127, nameEn: 'Liechtenstein', nameAr: 'ليختنشتاين' },
    { no: 8128, nameEn: 'Lithuania', nameAr: 'ليتوانيا' },
    { no: 8129, nameEn: 'Luxembourg', nameAr: 'لوكسمبورغ' },
    { no: 8130, nameEn: 'Macao', nameAr: 'ماكاو' },
    { no: 8131, nameEn: 'Macedonia, The Former Yugoslav Republic Of', nameAr: 'مقدونيا' },
    { no: 8132, nameEn: 'Madagascar', nameAr: 'مدغشقر' },
    { no: 8133, nameEn: 'Malawi', nameAr: 'مالاوي' },
    { no: 8134, nameEn: 'Malaysia', nameAr: 'ماليزيا' },
    { no: 8135, nameEn: 'Maldives', nameAr: 'المالديف' },
    { no: 8136, nameEn: 'Mali', nameAr: 'مالي' },
    { no: 8137, nameEn: 'Malta', nameAr: 'مالطا' },
    { no: 8138, nameEn: 'Marshall Islands', nameAr: 'جزر مارشال' },
    { no: 8139, nameEn: 'Martinique', nameAr: 'مارتينيك' },
    { no: 8140, nameEn: 'Mauritania', nameAr: 'موريتانيا' },
    { no: 8141, nameEn: 'Mauritius', nameAr: 'موريشيوس' },
    { no: 8142, nameEn: 'Mayotte', nameAr: 'مايوت' },
    { no: 8143, nameEn: 'Mexico', nameAr: 'المكسيك' },
    { no: 8144, nameEn: 'Micronesia, Federated States Of', nameAr: 'ميكرونيزيا' },
    { no: 8145, nameEn: 'Moldova, Republic Of', nameAr: 'مولدوفا' },
    { no: 8146, nameEn: 'Monaco', nameAr: 'موناكو' },
    { no: 8147, nameEn: 'Mongolia', nameAr: 'منغوليا' },
    { no: 8148, nameEn: 'Montenegro', nameAr: 'الجبل الأسود' },
    { no: 8149, nameEn: 'Montserrat', nameAr: 'مونتسرات' },
    { no: 8150, nameEn: 'Morocco', nameAr: 'المغرب' },
    { no: 8151, nameEn: 'Mozambique', nameAr: 'موزمبيق' },
    { no: 8152, nameEn: 'Myanmar', nameAr: 'ميانمار' },
    { no: 8153, nameEn: 'Namibia', nameAr: 'ناميبيا' },
    { no: 8154, nameEn: 'Nauru', nameAr: 'ناورو' },
    { no: 8155, nameEn: 'Nepal', nameAr: 'نيبال' },
    { no: 8156, nameEn: 'Netherlands', nameAr: 'هولندا' },
    { no: 8157, nameEn: 'New Caledonia', nameAr: 'كاليدونيا الجديدة' },
    { no: 8158, nameEn: 'New Zealand', nameAr: 'نيوزيلندا' },
    { no: 8159, nameEn: 'Nicaragua', nameAr: 'نيكاراغوا' },
    { no: 8160, nameEn: 'Niger', nameAr: 'النيجر' },
    { no: 8161, nameEn: 'Nigeria', nameAr: 'نيجيريا' },
    { no: 8162, nameEn: 'Niue', nameAr: 'نييوي' },
    { no: 8163, nameEn: 'Norfolk Island', nameAr: 'جزيرة نورفولك' },
    { no: 8164, nameEn: 'Northern Mariana Islands', nameAr: 'جزر ماريانا الشمالية' },
    { no: 8165, nameEn: 'Norway', nameAr: 'النرويج' },
    { no: 8166, nameEn: 'Oman', nameAr: 'عمان' },
    { no: 8167, nameEn: 'Pakistan', nameAr: 'باكستان' },
    { no: 8168, nameEn: 'Palau', nameAr: 'بالاو' },
    { no: 8169, nameEn: 'Palestinian Territory, Occupied', nameAr: 'فلسطين' },
    { no: 8170, nameEn: 'Panama', nameAr: 'بنما' },
    { no: 8171, nameEn: 'Papua New Guinea', nameAr: 'بابوا غينيا الجديدة' },
    { no: 8172, nameEn: 'Paraguay', nameAr: 'باراغواي' },
    { no: 8173, nameEn: 'Peru', nameAr: 'بيرو' },
    { no: 8174, nameEn: 'Philippines', nameAr: 'الفلبين' },
    { no: 8175, nameEn: 'Pitcairn', nameAr: 'بيتكيرن' },
    { no: 8176, nameEn: 'Poland', nameAr: 'بولندا' },
    { no: 8177, nameEn: 'Portugal', nameAr: 'البرتغال' },
    { no: 8178, nameEn: 'Puerto Rico', nameAr: 'بورتوريكو' },
    { no: 8179, nameEn: 'Qatar', nameAr: 'قطر' },
    { no: 8180, nameEn: 'Reunion', nameAr: 'لا ريونيون' },
    { no: 8181, nameEn: 'Romania', nameAr: 'رومانيا' },
    { no: 8182, nameEn: 'Russian Federation', nameAr: 'روسيا' },
    { no: 8183, nameEn: 'Rwanda', nameAr: 'رواندا' },
    { no: 8184, nameEn: 'Saint Barthelemy', nameAr: 'سانت بارتيليمي' },
    { no: 8185, nameEn: 'Saint Helena', nameAr: 'سانت هيلانة' },
    { no: 8186, nameEn: 'Saint Kitts And Nevis', nameAr: 'سانت كيتس ونيفيس' },
    { no: 8187, nameEn: 'Saint Lucia', nameAr: 'سانت لوسيا' },
    { no: 8188, nameEn: 'Saint Martin', nameAr: 'سانت مارتين' },
    { no: 8189, nameEn: 'Saint Pierre And Miquelon', nameAr: 'سانت بيير وميكلون' },
    { no: 8190, nameEn: 'Saint Vincent And The Grenadines', nameAr: 'سانت فنسنت وجزر غرينادين' },
    { no: 8191, nameEn: 'Samoa', nameAr: 'ساموا' },
    { no: 8192, nameEn: 'San Marino', nameAr: 'سان مارينو' },
    { no: 8193, nameEn: 'Sao Tome And Principe', nameAr: 'ساو تومي وبرينسيب' },
    { no: 8194, nameEn: 'Saudi Arabia', nameAr: 'المملكة العربية السعودية' },
    { no: 8195, nameEn: 'Senegal', nameAr: 'السنغال' },
    { no: 8196, nameEn: 'Serbia', nameAr: 'صربيا' },
    { no: 8197, nameEn: 'Seychelles', nameAr: 'سيشل' },
    { no: 8198, nameEn: 'Sierra Leone', nameAr: 'سيراليون' },
    { no: 8199, nameEn: 'Singapore', nameAr: 'سنغافورة' },
    { no: 8200, nameEn: 'Sint Maarten', nameAr: 'سينت مارتن' },
    { no: 8201, nameEn: 'Slovakia', nameAr: 'سلوفاكيا' },
    { no: 8202, nameEn: 'Slovenia', nameAr: 'سلوفينيا' },
    { no: 8203, nameEn: 'Solomon Islands', nameAr: 'جزر سليمان' },
    { no: 8204, nameEn: 'Somalia', nameAr: 'الصومال' },
    { no: 8205, nameEn: 'South Africa', nameAr: 'جنوب أفريقيا' },
    {
      no: 8206,
      nameEn: 'South Georgia And The South Sandwich Islands',
      nameAr: 'جورجيا الجنوبية وجزر ساندويتش الجنوبية'
    },
    { no: 8207, nameEn: 'South Sudan', nameAr: 'جنوب السودان' },
    { no: 8208, nameEn: 'Spain', nameAr: 'إسبانيا' },
    { no: 8209, nameEn: 'Sri Lanka', nameAr: 'سريلانكا' },
    { no: 8210, nameEn: 'Sudan', nameAr: 'السودان' },
    { no: 8211, nameEn: 'Suriname', nameAr: 'سورينام' },
    { no: 8212, nameEn: 'Svalbard And Jan Mayen', nameAr: 'سفالبارد ويان ماين' },
    { no: 8213, nameEn: 'Swaziland', nameAr: 'سوازيلاند' },
    { no: 8214, nameEn: 'Sweden', nameAr: 'السويد' },
    { no: 8215, nameEn: 'Switzerland', nameAr: 'سويسرا' },
    { no: 8216, nameEn: 'Syrian Arab Republic', nameAr: 'سوريا' },
    { no: 8217, nameEn: 'Taiwan, Province Of China', nameAr: 'تايوان' },
    { no: 8218, nameEn: 'Tajikistan', nameAr: 'طاجيكستان' },
    { no: 8219, nameEn: 'Tanzania, United Republic Of', nameAr: 'تنزانيا' },
    { no: 8220, nameEn: 'Thailand', nameAr: 'تايلاند' },
    { no: 8221, nameEn: 'Timor-Leste', nameAr: 'تيمور الشرقية' },
    { no: 8222, nameEn: 'Togo', nameAr: 'توغو' },
    { no: 8223, nameEn: 'Tokelau', nameAr: 'توكيلاو' },
    { no: 8224, nameEn: 'Tonga', nameAr: 'تونغا' },
    { no: 8225, nameEn: 'Trinidad And Tobago', nameAr: 'ترينيداد وتوباغو' },
    { no: 8226, nameEn: 'Tunisia', nameAr: 'تونس' },
    { no: 8227, nameEn: 'Turkey', nameAr: 'تركيا' },
    { no: 8228, nameEn: 'Turkmenistan', nameAr: 'تركمانستان' },
    { no: 8229, nameEn: 'Turks And Caicos Islands', nameAr: 'جزر توركس وكايكوس' },
    { no: 8230, nameEn: 'Tuvalu', nameAr: 'توفالو' },
    { no: 8231, nameEn: 'Uganda', nameAr: 'أوغندا' },
    { no: 8232, nameEn: 'Ukraine', nameAr: 'أوكرانيا' },
    { no: 8233, nameEn: 'United Arab Emirates', nameAr: 'الإمارات العربية المتحدة' },
    { no: 8234, nameEn: 'United Kingdom', nameAr: 'المملكة المتحدة' },
    { no: 8235, nameEn: 'United States', nameAr: 'الولايات المتحدة' },
    { no: 8236, nameEn: 'United States Minor Outlying Islands', nameAr: 'جزر الولايات المتحدة النائية' },
    { no: 8237, nameEn: 'Uruguay', nameAr: 'أورغواي' },
    { no: 8238, nameEn: 'Uzbekistan', nameAr: 'أوزبكستان' },
    { no: 8239, nameEn: 'Vanuatu', nameAr: 'فانواتو' },
    { no: 8240, nameEn: 'Venezuela', nameAr: 'فنزويلا' },
    { no: 8241, nameEn: 'Viet Nam', nameAr: 'فيتنام' },
    { no: 8242, nameEn: 'Virgin Islands, British', nameAr: 'جزر فيرجن البريطانية' },
    { no: 8243, nameEn: 'Virgin Islands, U.S.', nameAr: 'جزر فيرجن الأمريكية' },
    { no: 8244, nameEn: 'Wallis And Futuna', nameAr: 'واليس وفوتونا' },
    { no: 8245, nameEn: 'Western Sahara', nameAr: 'الصحراء الغربية' },
    { no: 8246, nameEn: 'Yemen', nameAr: 'اليمن' },
    { no: 8247, nameEn: 'Zambia', nameAr: 'زامبيا' },
    { no: 8248, nameEn: 'Zimbabwe', nameAr: 'زيمبابوي' },
    { no: 8249, nameEn: 'Unknown', nameAr: 'غير معروف' }
  ]);

  let user = useSelector((store) => {
    return store.authSlice.currentUser;
  });
  let language = useSelector((store) => {
    return store.authSlice.language;
  });

  useEffect(() => {
    axios
      .post(process.env.NEXT_PUBLIC_API_SERVER + '/api/settings/systemValues', {
        action: 'getValuesByTitle',
        groupTitle: 'Legal Status'
      })
      .then(function (resp) {
        setLegalForms(resp.data.values);
      });

    // axios.post("/api/settings/systemValues", {
    //   action:"getValuesByTitle",
    //   groupTitle:"nationality"
    // }).then(function (resp) {
    //   setNationality(resp.data.values)
    // });
  }, []);

  const onSubmit = async (data) => {
    data.action = 'addClient';
    // TB, best if it can be done at server
    data.owner = user.company;
    if (data) {
      axios.post(process.env.NEXT_PUBLIC_API_SERVER + '/api/dashboard/clients', data).then(function (resp) {
        toast.success('Client added successfully');
        router.push('/dashboard/clients');

        // console.log(resp.data);
        // alert("Form submitted successfully!");
      });
    }
  };

  const handlePhoneChange = (value, index) => {
    setValue(`contactNumber${index}`, value);
    trigger(`contactNumber${index}`);
  };

  const handleClientPhoneChange = (value) => {
    setPhoneNumber(value);
    setValue('phoneNumber', value);
    trigger('phoneNumber');
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const isFormValid = await trigger([
      'clientNameAr',
      'clientNameEn',
      'legalForm',
      'phoneNumber',
      'emailAddress',
      'personName1',
      'contactNumber1',
      'emailAddress1',
      'preferredLanguage1'
    ]);

    if (isFormValid) {
      handleSubmit(onSubmit)();
    } else {
      console.error('Please correct the errors in the form.');
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="container">
        <div class="row ">
          <div className="mt-4 d-flex justify-content-end">
            <Link href="/dashboard/clients">
              <button className="btn   border mb-4">All Clients</button>
            </Link>
            <button
              type="submit"
              className="btn  border mb-4"
            >
              Submit
            </button>
          </div>

          <div class="col-sm-3  mt-3 fw-700 fs-5 mr-0">Add New Client</div>
          <div class="col-sm-9 ">
            <div class="row mt-3 align-items-center ">
              <div class="col-lg-3 col-sm-6 mb-3">
                <label
                  htmlFor="clientNameAr"
                  className="form-label "
                >
                  Client Name<span className="text-danger">*</span>
                  <span className="float-right">(Arabic)</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="clientNameAr"
                  placeholder="Type Client name"
                  {...register('clientNameAr', {
                    required: 'Client name in Arabic is required'
                  })}
                />
                {errors.clientNameAr && <span className="text-danger">{errors.clientNameAr.message}</span>}
              </div>
              <div class="col-lg-3 col-sm-6 mb-3">
                <label
                  htmlFor="clientNameEn"
                  className="form-label"
                >
                  Client Name <span className="text-danger">*</span>
                  <span className="float-right">(English)</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="clientNameEn"
                  placeholder="Type Client name in English"
                  {...register('clientNameEn', {
                    required: 'Client name in English is required'
                  })}
                />
                {errors.clientNameEn && <span className="text-danger">{errors.clientNameEn.message}</span>}
              </div>
              <div class="col-lg-3 col-sm-6 mb-3 ">
                <label
                  htmlFor="legalForm"
                  className="form-label"
                >
                  Legal form <span className="text-danger">*</span>
                </label>
                <select
                  className="form-select"
                  id="legalForm"
                  {...register('legalForm', {
                    required: 'Legal form is required'
                  })}
                >
                  <option value="">Select Legal Form</option>
                  {legalForms.map((legalForm, i) => {
                    return (
                      <option
                        key={i}
                        value={legalForm._id}
                      >
                        {legalForm['name' + language]}
                      </option>
                    );
                  })}
                </select>
                {errors.legalForm && <span className="text-danger">{errors.legalForm.message}</span>}
              </div>
              <div class="col-lg-3 col-sm-6 mb-3 ">
                <label
                  htmlFor="nationality"
                  className="form-label"
                >
                  Nationality
                </label>
                <select
                  className="form-select"
                  id="nationality"
                  {...register('nationality')}
                >
                  <option value="">Select</option>
                  {nationality.map((nationality, i) => {
                    return (
                      <option
                        key={i}
                        value={nationality._id}
                      >
                        {nationality['name' + language]}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div
                class="col-lg-3 col-sm-6 mb-3 "
                id="phoneNumber"
              >
                <label
                  htmlFor="phoneNumber"
                  className="form-label"
                >
                  Phone Number <span className="text-danger">*</span>
                </label>
                <Controller
                  name="phoneNumber"
                  control={control}
                  rules={{ required: 'Phone number is required' }}
                  render={({ field }) => (
                    <PhoneInput
                      {...field}
                      international
                      defaultCountry="RU"
                      value={field.value || ''}
                      onChange={(value) => handleClientPhoneChange(value)}
                      className={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`}
                      style={{ display: 'flex' }}
                      id="phoneNumber"
                      placeholder="Enter Phone Number"
                    />
                  )}
                />
                {errors.phoneNumber && <span className="text-danger">{errors.phoneNumber.message}</span>}
              </div>
              <div class="col-lg-3 col-sm-6 mb-3">
                <label
                  htmlFor="emailAddress"
                  className="form-label"
                >
                  Email Address <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="emailAddress"
                  placeholder="Type Email Address"
                  {...register('emailAddress', {
                    required: 'Email address is required'
                  })}
                />
                {errors.emailAddress && <span className="text-danger">{errors.emailAddress.message}</span>}
              </div>
              <div class="col-lg-3 col-sm-6 mb-3">
                <label
                  htmlFor="address"
                  className="form-label"
                >
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="Type Client Address"
                  {...register('address')}
                />
              </div>
              <div class="col-lg-3 col-sm-6 mb-3">
                <label
                  htmlFor="idNumber"
                  className="form-label"
                >
                  ID Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="idNumber"
                  placeholder="e.g. 784-1993-xxxxxxx"
                  {...register('idNumber')}
                />
              </div>
              <div class="col-lg-3 col-sm-6 mb-3">
                <label
                  htmlFor="trnNo"
                  className="form-label"
                >
                  TRN No.
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="trnNo"
                  placeholder="e.g. 1000000xxxx"
                  {...register('trnNo')}
                />
              </div>
              <div class="col-lg-3 col-sm-6 mb-3">
                <label
                  htmlFor="websiteUrl"
                  className="form-label"
                >
                  Website URL
                </label>
                <input
                  type="url"
                  className="form-control"
                  id="websiteUrl"
                  placeholder="Type Website URL"
                  {...register('websiteUrl')}
                />
              </div>
              <div class="col-lg-3 col-sm-6 mb-3">
                <label
                  htmlFor="passportNumber"
                  className="form-label"
                >
                  Passport Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="passportNumber"
                  placeholder="Type Passport Number"
                  {...register('passportNumber')}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Contact Persons Form */}
        <div className="row mt-5">
          <div className="col-lg-3 col-sm-3 fw-700 fs-5 mr-0">Contacts</div>
          <div className="col-sm-9 mt-4">
            <div class="row ">
              {/* <div class=" col-lg-3 col-sm-3  fw-700 fs-5 mr-0">
     Contacts
    </div> */}
              <div class="col-lg-12  mt-4">
                <div class="row">
                  <div class=" col-lg-4 mb-3">
                    <div className="card">
                      <h5 className="card-title p-3 bg-light">Contact Person 1</h5>
                      <div className="card-body">
                        <div className="mb-3">
                          <label
                            htmlFor="personName1"
                            className="form-label"
                          >
                            Person Name<span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className={`form-control ${errors.personName1 ? 'is-invalid' : ''}`}
                            id="personName1"
                            placeholder="Type Contact Person Name"
                            {...register('personName1', {
                              required: 'Person Name is required'
                            })}
                          />
                          {errors.personName1 && <div className="invalid-feedback">{errors.personName1.message}</div>}
                        </div>

                        <div className="mb-3">
                          <label
                            htmlFor="contactNumber1"
                            className="form-label"
                          >
                            Contact Number<span className="text-danger">*</span>
                          </label>
                          <div className="input-group">
                            <Controller
                              name="contactNumber1"
                              control={control}
                              rules={{ required: 'Phone number is required' }}
                              render={({ field }) => (
                                <PhoneInput
                                  {...field}
                                  international
                                  defaultCountry="RU"
                                  value={field.value || ''}
                                  onChange={(value) => field.onChange(value)}
                                  className={`form-control ${errors.contactNumber1 ? 'is-invalid' : ''}`}
                                  style={{ display: 'flex' }}
                                  id="contactNumber1"
                                  placeholder="Enter Phone Number"
                                />
                              )}
                            />
                            {errors.contactNumber1 && (
                              <div className="invalid-feedback">{errors.contactNumber1.message}</div>
                            )}
                          </div>
                        </div>

                        <div className="mb-3">
                          <label
                            htmlFor="emailAddress1"
                            className="form-label"
                          >
                            Email Address <span className="text-danger">*</span>
                          </label>
                          <input
                            type="email"
                            className={`form-control ${errors.emailAddress1 ? 'is-invalid' : ''}`}
                            id="emailAddress1"
                            placeholder="Email Address"
                            {...register('emailAddress1', {
                              required: 'Email Address is required',
                              pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: 'Invalid email address'
                              }
                            })}
                          />
                          {errors.emailAddress1 && (
                            <div className="invalid-feedback">{errors.emailAddress1.message}</div>
                          )}
                        </div>

                        <div className="mb-3">
                          <label
                            htmlFor="preferredLanguage1"
                            className="form-label"
                          >
                            Preferred Language <span className="text-danger">*</span>
                          </label>
                          <select
                            className={`form-select ${errors.preferredLanguage1 ? 'is-invalid' : ''}`}
                            id="preferredLanguage1"
                            defaultValue="0"
                            {...register('preferredLanguage1', {
                              required: 'Preferred Language is required'
                            })}
                          >
                            <option value="">select Language</option>

                            <option value="English">English Language</option>
                            <option value="Arabic">Arabic Language</option>
                            <option value="Urdu">Urdu Language</option>
                          </select>
                          {errors.preferredLanguage1 && (
                            <div className="invalid-feedback">{errors.preferredLanguage1.message}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4  mb-3">
                    <div className="card">
                      <h5 className="card-title p-3 bg-light">Contact Person 2</h5>
                      <div className="card-body">
                        <div className="mb-3">
                          <label
                            htmlFor="personName2"
                            className="form-label"
                          >
                            Person Name
                          </label>
                          <input
                            type="text"
                            className={`form-control`}
                            id="personName2"
                            placeholder="Type Contact Person Name"
                            {...register('personName2')}
                          />
                        </div>

                        <div className="mb-3">
                          <label
                            htmlFor="contactNumber2"
                            className="form-label"
                          >
                            Contact Number
                          </label>
                          <div className="input-group">
                            <PhoneInput
                              international
                              defaultCountry="RU"
                              value={undefined}
                              onChange={(value) => handlePhoneChange(value, 2)}
                              className={`form-control`}
                              style={{ display: 'flex' }}
                              id="contactNumber2"
                              placeholder="Enter Phone Number"
                            />
                          </div>
                        </div>

                        <div className="mb-3">
                          <label
                            htmlFor="emailAddress2"
                            className="form-label"
                          >
                            Email Address
                          </label>
                          <input
                            type="email"
                            className={`form-control`}
                            id="emailAddress2"
                            placeholder="Email Address"
                            {...register('emailAddress2')}
                          />
                        </div>

                        <div className="mb-3">
                          <label
                            htmlFor="preferredLanguage2"
                            className="form-label"
                          >
                            Preferred Language
                          </label>
                          <select
                            className={`form-select`}
                            id="preferredLanguage2"
                            defaultValue="0"
                            {...register('preferredLanguage2')}
                          >
                            <option value="">select Language</option>

                            <option value="English">English Language</option>
                            <option value="Arabic">Arabic Language</option>
                            <option value="Urdu">Urdu Language</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4  mb-3">
                    <div className="card">
                      <h5 className="card-title p-3 bg-light">Contact Person 3</h5>
                      <div className="card-body">
                        <div className="mb-3">
                          <label
                            htmlFor="personName3"
                            className="form-label"
                          >
                            Person Name
                          </label>
                          <input
                            type="text"
                            className={`form-control`}
                            id="personName3"
                            placeholder="Type Contact Person Name"
                            {...register('personName3')}
                          />
                        </div>

                        <div className="mb-3">
                          <label
                            htmlFor="contactNumber3"
                            className="form-label"
                          >
                            Contact Number
                          </label>
                          <div className="input-group">
                            <PhoneInput
                              international
                              defaultCountry="RU"
                              value={undefined}
                              onChange={(value) => handlePhoneChange(value, 3)}
                              className={`form-control`}
                              style={{ display: 'flex' }}
                              id="contactNumber3"
                              placeholder="Enter Phone Number"
                            />
                          </div>
                        </div>

                        <div className="mb-3">
                          <label
                            htmlFor="emailAddress3"
                            className="form-label"
                          >
                            Email Address
                          </label>
                          <input
                            type="email"
                            className={`form-control`}
                            id="emailAddress3"
                            placeholder="Email Address"
                            {...register('emailAddress3')}
                          />
                        </div>

                        <div className="mb-3">
                          <label
                            htmlFor="preferredLanguage3"
                            className="form-label"
                          >
                            Preferred Language
                          </label>
                          <select
                            className={`form-select`}
                            id="preferredLanguage3"
                            defaultValue="0"
                            {...register('preferredLanguage3')}
                          >
                            <option value="">select Language</option>
                            <option value="English">English Language</option>
                            <option value="Arabic">Arabic Language</option>
                            <option value="Urdu">Urdu Language</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
