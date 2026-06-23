// بيانات مشروع Firebase الخاص بك — مأخوذة من Firebase Console
// لم يبقَ سوى تعبئة databaseURL (راجع التعليمات أدناه)

const firebaseConfig = {
  apiKey: "AIzaSyC4xw-y-HgJw1i9GfZtAqPk0YE9FT48JD8",
  authDomain: "liqaa-event.firebaseapp.com",
  databaseURL: "https://liqaa-event-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "liqaa-event",
  storageBucket: "liqaa-event.firebasestorage.app",
  messagingSenderId: "451935472121",
  appId: "1:451935472121:web:d37cad49f6b10bcfddd528",
  measurementId: "G-DS28YBG6CW"
};

firebase.initializeApp(firebaseConfig);

/*
كيف تحصل على databaseURL:
1. من القائمة الجانبية في Firebase Console: Build > Realtime Database
2. إذا لم تُنشئ القاعدة بعد: اضغط Create Database > اختر الموقع > Start in test mode
3. سيظهر رابط بالأعلى يشبه: https://liqaa-event-default-rtdb.firebaseio.com
4. استبدل به السطر أعلاه بالكامل (بدون حذف الفواصل المنقوطة أو علامات التنصيص)
*/

