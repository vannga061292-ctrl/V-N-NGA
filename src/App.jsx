import { useState } from "react";
import {
  Home,
  BookOpen,
  MessageCircle,
  User,
  Bell,
  Camera,
  Calendar,
  Brain,
  Heart,
  GraduationCap,
} from "lucide-react";

export default function SmartKids365App() {
  const [activeTab, setActiveTab] = useState("home");
  const [darkMode, setDarkMode] = useState(false);
  const [notifications] = useState(12);

  const activities = [
    {
      title: "Hoạt động tạo hình",
      time: "08:30",
      teacher: "Cô Nga",
      image:
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Bé học chữ cái",
      time: "09:15",
      teacher: "Cô Hương",
      image:
        "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const students = [
    {
      name: "Bé Minh Anh",
      status: "Có mặt",
      avatar:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Bé Gia Bảo",
      status: "Nghỉ học",
      avatar:
        "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const renderHome = () => (
    <>
      <div className="bg-gradient-to-r from-pink-400 to-purple-400 rounded-3xl p-5 text-white shadow-xl mb-5">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Xin chào cô giáo 👩‍🏫</h2>
            <p className="mt-2 text-sm opacity-90">
              Hôm nay lớp Mẫu Giáo 3 Tuổi A4 có 25 trẻ đến lớp.
            </p>
          </div>

          <div className="bg-white/20 p-3 rounded-2xl">
            <Bell size={28} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-5">
        <FeatureCard
          icon={<Camera className="text-pink-500" />}
          title="Điểm danh"
          desc="QR & nhận diện ảnh"
        />

        <FeatureCard
          icon={<BookOpen className="text-blue-500" />}
          title="Nhật ký lớp"
          desc="Cập nhật mỗi ngày"
        />

        <FeatureCard
          icon={<Brain className="text-purple-500" />}
          title="AI Giáo án"
          desc="Soạn bài tự động"
        />

        <FeatureCard
          icon={<Heart className="text-red-400" />}
          title="Sức khỏe"
          desc="Theo dõi phát triển"
        />
      </div>

      <div className="bg-white rounded-3xl p-5 shadow-lg mb-5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-xl text-gray-700">
            📚 Hoạt động hôm nay
          </h2>
          <span className="text-pink-500 text-sm font-semibold">
            Xem thêm
          </span>
        </div>

        <div className="space-y-4">
          {activities.map((item, index) => (
            <div
              key={index}
              className="flex gap-3 bg-pink-50 rounded-2xl overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-28 h-24 object-cover"
              />

              <div className="p-3 flex flex-col justify-center">
                <h3 className="font-bold text-gray-700 text-lg">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  ⏰ {item.time}
                </p>

                <p className="text-sm text-pink-500 mt-1">
                  👩‍🏫 {item.teacher}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );

  const renderAttendance = () => (
    <div className="bg-white rounded-3xl p-5 shadow-lg">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl font-bold text-gray-700">
          📋 Điểm danh trẻ
        </h2>

        <button className="bg-pink-500 text-white px-4 py-2 rounded-2xl text-sm">
          Quét QR
        </button>
      </div>

      <div className="space-y-4">
        {students.map((student, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-pink-50 rounded-2xl p-3"
          >
            <div className="flex items-center gap-3">
              <img
                src={student.avatar}
                alt={student.name}
                className="w-14 h-14 rounded-full object-cover"
              />

              <div>
                <h3 className="font-bold text-gray-700">
                  {student.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {student.status}
                </p>
              </div>
            </div>

            <button className="bg-green-400 text-white px-3 py-2 rounded-xl text-sm">
              Xác nhận
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAI = () => (
    <div className="space-y-5">
      <div className="bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl p-5 text-white shadow-xl">
        <h2 className="text-2xl font-bold mb-2">
          🤖 AI Giáo án thông minh
        </h2>

        <p className="text-sm leading-relaxed opacity-90">
          Tạo giáo án, thơ, trò chơi và hoạt động sáng tạo chỉ trong vài giây.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-5 shadow-lg">
        <label className="font-semibold text-gray-700 block mb-2">
          Chủ đề bài học
        </label>

        <input
          placeholder="Ví dụ: Thế giới động vật"
          className="w-full border border-pink-200 rounded-2xl p-3 outline-none"
        />

        <button className="w-full mt-4 bg-pink-500 text-white py-3 rounded-2xl font-bold">
          ✨ Tạo giáo án AI
        </button>
      </div>

      <div className="bg-white rounded-3xl p-5 shadow-lg">
        <h3 className="font-bold text-lg text-gray-700 mb-3">
          📚 Gợi ý nhanh
        </h3>

        <div className="flex flex-wrap gap-3">
          <Tag text="Thơ thiếu nhi" />
          <Tag text="Hoạt động STEAM" />
          <Tag text="Trò chơi vận động" />
          <Tag text="Kể chuyện sáng tạo" />
        </div>
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="bg-white rounded-3xl p-5 shadow-lg text-center">
      <img
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop"
        alt="teacher"
        className="w-28 h-28 rounded-full object-cover mx-auto"
      />

      <h2 className="text-2xl font-bold text-gray-700 mt-4">
        Cô Văn Nga
      </h2>

      <p className="text-gray-500 mt-2">
        Giáo viên lớp Mẫu Giáo 3 Tuổi A4
      </p>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <InfoCard title="25" subtitle="Học sinh" />
        <InfoCard title="12" subtitle="Hoạt động" />
        <InfoCard title="98%" subtitle="Chuyên cần" />
        <InfoCard title="4.9⭐" subtitle="Đánh giá" />
      </div>
    </div>
  );

  return (
    <div
      className={`min-h-screen p-4 transition-all duration-500 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-b from-pink-50 to-blue-50"
      }`}
    >
      <div className="max-w-md mx-auto pb-28">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h1 className="text-3xl font-bold text-pink-500">
              SMARTKIDS 365
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Chuyển đổi số giáo dục mầm non
            </p>
          </div>

          <div className="absolute top-4 right-4 flex items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-white shadow-md px-4 py-2 rounded-2xl text-sm"
            >
              {darkMode ? "☀️ Sáng" : "🌙 Tối"}
            </button>

            <div className="relative">
              <Bell className="text-pink-500" />
              <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {notifications}
              </div>
            </div>
          </div>
        </div>

        {activeTab === "home" && renderHome()}
        {activeTab === "attendance" && renderAttendance()}
        {activeTab === "ai" && renderAI()}
        {activeTab === "profile" && renderProfile()}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-pink-100 shadow-2xl rounded-t-3xl">
        <div className="max-w-md mx-auto flex justify-around py-4">
          <BottomTab
            icon={<Home size={22} />}
            label="Trang chủ"
            active={activeTab === "home"}
            onClick={() => setActiveTab("home")}
          />

          <BottomTab
            icon={<Calendar size={22} />}
            label="Điểm danh"
            active={activeTab === "attendance"}
            onClick={() => setActiveTab("attendance")}
          />

          <BottomTab
            icon={<GraduationCap size={22} />}
            label="AI"
            active={activeTab === "ai"}
            onClick={() => setActiveTab("ai")}
          />

          <BottomTab
            icon={<User size={22} />}
            label="Tài khoản"
            active={activeTab === "profile"}
            onClick={() => setActiveTab("profile")}
          />
        </div>
      </div>
    </div>
  );
}

function WebsiteCard({ icon, title, desc }) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg hover:-translate-y-2 transition-all duration-300">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-700 mb-2">{title}</h3>
      <p className="text-gray-500 leading-relaxed">{desc}</p>
    </div>
  );
}

function FeatureLarge({ title, desc }) {
  return (
    <div className="bg-pink-50 rounded-3xl p-6 shadow-md hover:shadow-xl transition-all">
      <h3 className="text-2xl font-bold text-pink-500 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-white rounded-3xl p-4 shadow-md hover:scale-105 transition-all">
      <div className="mb-3">{icon}</div>
      <h3 className="font-bold text-lg text-gray-700">{title}</h3>
      <p className="text-sm text-gray-500 mt-2">{desc}</p>
    </div>
  );
}

function BottomTab({ icon, label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-1 ${
        active ? "text-pink-500" : "text-gray-400"
      }`}
    >
      {icon}
      <span className="text-xs font-medium">{label}</span>
    </button>
  );
}

function Tag({ text }) {
  return (
    <div className="bg-pink-100 text-pink-500 px-4 py-2 rounded-full text-sm font-medium">
      {text}
    </div>
  );
}

function InfoCard({ title, subtitle }) {
  return (
    <div className="bg-pink-50 rounded-2xl p-4">
      <h3 className="text-2xl font-bold text-pink-500">{title}</h3>
      <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
    </div>
  );
}
