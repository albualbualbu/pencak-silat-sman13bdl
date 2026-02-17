import React, { useState } from 'react';
import { Users, Award, Calendar, BookOpen, Sparkles, Target, Shield, Swords, Trophy, Clock, MapPin, Star, Menu, X } from 'lucide-react';

const PencakSilatWeb = () => {
  const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSduD8XKP2ILlnVTC5VDMIYKNM3pnEArrHTb_QsIygOACrTfRA/viewform'; 

  const [currentPage, setCurrentPage] = useState('beranda');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const members = [
    { id: 1, name: 'Robby Cahya Pratama', belt: 'Coach', class: 'Lulus', joinDate: '2022-01-15', image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&h=400&fit=crop' },
    { id: 2, name: 'Muhammad Fauzan', belt: 'Coach', class: 'Lulus', joinDate: '2022-06-20', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop' },
    { id: 3, name: 'Indri Isna Wati', belt: 'Coach', class: 'Lulus', joinDate: '2023-02-10', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop' },
    { id: 4, name: 'Leni Marlina', belt: 'Coach', class: 'Lulus', joinDate: '2023-08-05', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop' },
    { id: 5, name: 'Zaky', belt: 'Ketua Umum', class: 'XI IPA 1', joinDate: '2023-08-05', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop' },
    { id: 6, name: 'Randi', belt: 'Anggota', class: 'XI IPA 1', joinDate: '2023-08-05', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop' },
    { id: 7, name: 'Isma', belt: 'Anggota', class: 'XI IPA 1', joinDate: '2023-08-05', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop' },
    { id: 8, name: 'Dani', belt: 'Anggota', class: 'XI IPA 1', joinDate: '2023-08-05', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop' },
    { id: 9, name: 'Zihan', belt: 'Anggota', class: 'XI IPA 1', joinDate: '2023-08-05', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop' },
    { id: 10, name: 'Salwa', belt: 'Anggota', class: 'XI IPA 1', joinDate: '2023-08-05', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop' },
    { id: 11, name: 'Ojan', belt: 'Anggota', class: 'XI IPA 1', joinDate: '2023-08-05', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop' },
    { id: 12, name: 'Fika', belt: 'Anggota', class: 'XI IPA 1', joinDate: '2023-08-05', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop' },
  ];
  
  const achievements = [
    { id: 1, title: 'Juara 1 Porprov Lampung', year: '2024', category: 'Tanding Putra', description: 'Meraih medali emas pada kategori tanding putra kelas C', image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=600&fit=crop' },
    { id: 2, title: 'Juara 2 Kejurnas Pencak Silat', year: '2023', category: 'Seni Tunggal Putri', description: 'Perak untuk penampilan seni tunggal yang memukau', image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&h=600&fit=crop' },
    { id: 3, title: 'Juara 1 O2SN Kota', year: '2024', category: 'Tanding Putri', description: 'Dominasi penuh di olimpiade olahraga siswa nasional tingkat kota', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop' },
  ];

  const events = [
    { id: 1, name: 'Latihan Materi', date: 'Senin', time: '16:00', location: 'Lapangan SMAN 13', description: 'Latihan Materi Ajaran PSHT', image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&h=600&fit=crop' },
    { id: 2, name: 'Latihan Fisik', date: 'Rabu', time: '16:00', location: 'Lapangan SMAN 13', description: 'Latihan Kebugaran Fisik', image: 'https://images.unsplash.com/photo-1555597408-26bc8e548a46?w=800&h=600&fit=crop' },
    { id: 3, name: 'Latihan Prestasi', date: 'Sabtu', time: '14:00', location: 'Lapangan SMAN 13', description: 'Latihan teknik dasar dan sparring', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop' },
  ];

  const handlePageChange = (page) => {
    setIsAnimating(true);
    setMobileMenuOpen(false);
    setTimeout(() => {
      setCurrentPage(page);
      setIsAnimating(false);
    }, 400);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow"></div>
      </div>

      {/* Header */}
      <header className="relative z-50 bg-slate-900/80 backdrop-blur-xl border-b border-emerald-500/20 sticky top-0 shadow-2xl">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform shadow-xl">
                  <Shield className="text-white w-9 h-9" />
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">PENCAK SILAT</h1>
                <p className="text-emerald-300 text-sm font-semibold tracking-wide">SMAN 13 Bandar Lampung</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-2">
              {[
                { id: 'beranda', label: 'Beranda', icon: Sparkles },
                { id: 'sejarah', label: 'Sejarah', icon: BookOpen },
                { id: 'anggota', label: 'Anggota', icon: Users },
                { id: 'prestasi', label: 'Prestasi', icon: Trophy },
                { id: 'kegiatan', label: 'Kegiatan', icon: Calendar }
              ].map((page) => {
                const Icon = page.icon;
                return (
                  <button
                    key={page.id}
                    onClick={() => handlePageChange(page.id)}
                    className={`px-5 py-2.5 rounded-xl font-bold transition-all duration-300 flex items-center space-x-2 ${
                      currentPage === page.id
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/50 scale-105'
                        : 'bg-slate-800/50 text-emerald-300 hover:bg-slate-700/50 hover:text-emerald-200'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{page.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-3 bg-slate-800/50 rounded-xl text-emerald-400 hover:bg-slate-700/50 transition-all"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 space-y-2 animate-slide-down">
              {[
                { id: 'beranda', label: 'Beranda', icon: Sparkles },
                { id: 'sejarah', label: 'Sejarah', icon: BookOpen },
                { id: 'anggota', label: 'Anggota', icon: Users },
                { id: 'prestasi', label: 'Prestasi', icon: Trophy },
                { id: 'kegiatan', label: 'Kegiatan', icon: Calendar }
              ].map((page) => {
                const Icon = page.icon;
                return (
                  <button
                    key={page.id}
                    onClick={() => handlePageChange(page.id)}
                    className={`w-full px-5 py-3 rounded-xl font-bold transition-all duration-300 flex items-center space-x-3 ${
                      currentPage === page.id
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/50'
                        : 'bg-slate-800/50 text-emerald-300 hover:bg-slate-700/50 hover:text-emerald-200'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{page.label}</span>
                  </button>
                );
              })}
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className={`relative z-10 container mx-auto px-6 py-12 transition-all duration-500 ${isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'}`}>
        
        {/* Beranda Page */}
        {currentPage === 'beranda' && (
          <div className="space-y-12">
            {/* Hero Section */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-emerald-950 border border-emerald-500/30 shadow-2xl">
              <div className="absolute inset-0">
                <img 
                  src="https://images.unsplash.com/photo-1555597408-26bc8e548a46?w=1600&h=800&fit=crop" 
                  alt="Hero" 
                  className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-emerald-950/95 to-transparent"></div>
              </div>
              
              <div className="relative p-12 md:p-16">
                <div className="max-w-3xl">
                  <div className="flex items-center space-x-3 mb-6">
                    <Swords className="w-12 h-12 text-emerald-400" />
                    <span className="text-emerald-400 font-bold text-lg uppercase tracking-wider">Ekstrakurikuler Unggulan</span>
                  </div>
                  <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                    Membentuk<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Karakter Juara</span>
                  </h1>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    Bergabunglah dengan kami dalam perjalanan mengasah kemampuan bela diri tradisional Indonesia, 
                    membentuk disiplin, dan meraih prestasi gemilang.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button 
                      onClick={() => handlePageChange('anggota')}
                      className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-bold shadow-lg shadow-emerald-500/50 hover:shadow-emerald-500/70 transform hover:scale-105 transition-all flex items-center space-x-2">
                      <Users className="w-5 h-5" />
                      <span>Gabung Sekarang</span>
                    </button>
                    <button 
                      onClick={() => handlePageChange('prestasi')}
                      className="px-8 py-4 bg-slate-800/80 backdrop-blur text-emerald-300 rounded-xl font-bold border border-emerald-500/30 hover:bg-slate-700/80 transform hover:scale-105 transition-all flex items-center space-x-2">
                      <Trophy className="w-5 h-5" />
                      <span>Lihat Prestasi</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: Users, value: '50+', label: 'Anggota Aktif', color: 'from-emerald-500 to-teal-500' },
                { icon: Trophy, value: '15+', label: 'Prestasi Diraih', color: 'from-amber-500 to-orange-500' },
                { icon: Target, value: '9', label: 'Tahun Berdiri', color: 'from-blue-500 to-cyan-500' },
                { icon: Award, value: '5', label: 'Pelatih Pro', color: 'from-purple-500 to-pink-500' },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="group relative overflow-hidden rounded-2xl bg-slate-900/50 backdrop-blur border border-emerald-500/20 p-6 hover:border-emerald-500/50 transition-all hover:scale-105">
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                    <Icon className={`w-12 h-12 mb-4 text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`} />
                    <div className={`text-4xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}>{stat.value}</div>
                    <div className="text-gray-400 font-semibold">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Features Section */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { 
                  icon: Shield, 
                  title: 'Teknik Profesional', 
                  desc: 'Belajar dari pelatih bersertifikat nasional dengan pengalaman kompetisi tingkat tinggi',
                  image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop'
                },
                { 
                  icon: Star, 
                  title: 'Prestasi Gemilang', 
                  desc: 'Raih medali emas dan perak di berbagai kompetisi regional hingga nasional',
                  image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&h=400&fit=crop'
                },
                { 
                  icon: Users, 
                  title: 'Komunitas Solid', 
                  desc: 'Bergabung dengan keluarga besar pesilat SMAN 13 yang suportif dan kompetitif',
                  image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&h=400&fit=crop'
                },
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="group relative overflow-hidden rounded-2xl bg-slate-900/50 backdrop-blur border border-emerald-500/20 hover:border-emerald-500/50 transition-all">
                    <div className="relative h-48 overflow-hidden">
                      <img src={feature.image} alt={feature.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <Icon className="w-10 h-10 text-emerald-400 mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-400">{feature.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Sejarah Page */}
        {currentPage === 'sejarah' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <BookOpen className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
              <h2 className="text-5xl font-black text-white mb-4">Sejarah Kami</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">Perjalanan panjang ekstrakurikuler Pencak Silat SMAN 13 Bandar Lampung</p>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 via-teal-500 to-emerald-500"></div>
              
              {[
                { 
                  year: '2015', 
                  title: 'Awal Perjalanan',
                  desc: 'Didirikan oleh 12 siswa yang memiliki passion terhadap seni bela diri tradisional Indonesia. Latihan dimulai dengan fasilitas seadanya namun semangat membara.',
                  image: 'https://images.unsplash.com/photo-1555597408-26bc8e548a46?w=800&h=500&fit=crop'
                },
                { 
                  year: '2017', 
                  title: 'Berkembang Pesat',
                  desc: 'Bergabungnya pelatih profesional berlisensi dan penambahan anggota hingga 30 orang. Mulai ikut kompetisi tingkat kota.',
                  image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&h=500&fit=crop'
                },
                { 
                  year: '2020', 
                  title: 'Prestasi Pertama',
                  desc: 'Meraih medali pertama di kompetisi O2SN tingkat kota. Momentum kebangkitan dan pembuktian diri.',
                  image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=500&fit=crop'
                },
                { 
                  year: '2024', 
                  title: 'Era Keemasan',
                  desc: 'Juara 1 Porprov Lampung dan berbagai prestasi gemilang lainnya. Menjadi salah satu ekstrakurikuler terbaik di Lampung dengan 50+ anggota aktif.',
                  image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop'
                },
              ].map((item, index) => (
                <div key={index} className="relative pl-20 pb-12 group">
                  <div className="absolute left-0 top-0 w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg shadow-emerald-500/50 group-hover:scale-110 transition-transform">
                    {item.year}
                  </div>
                  
                  <div className="bg-slate-900/50 backdrop-blur rounded-2xl overflow-hidden border border-emerald-500/20 hover:border-emerald-500/50 transition-all group-hover:scale-[1.02]">
                    <div className="md:flex">
                      <div className="md:w-2/5 relative overflow-hidden">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="md:w-3/5 p-8">
                        <h3 className="text-3xl font-bold text-white mb-4">{item.title}</h3>
                        <p className="text-gray-400 text-lg leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Vision Mission */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <div className="bg-gradient-to-br from-emerald-900/50 to-teal-900/50 backdrop-blur rounded-2xl p-8 border border-emerald-500/30">
                <Target className="w-12 h-12 text-emerald-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Visi Kami</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Menjadi ekstrakurikuler Pencak Silat terbaik yang membentuk generasi berprestasi, berkarakter, dan mencintai budaya bangsa.
                </p>
              </div>
              <div className="bg-gradient-to-br from-teal-900/50 to-emerald-900/50 backdrop-blur rounded-2xl p-8 border border-emerald-500/30">
                <Sparkles className="w-12 h-12 text-emerald-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Misi Kami</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Melatih siswa dengan teknik profesional, membentuk karakter disiplin, dan meraih prestasi gemilang di tingkat nasional.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Anggota Page */}
        {currentPage === 'anggota' && (
          <div>
            <div className="text-center mb-12">
              <Users className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
              <h2 className="text-5xl font-black text-white mb-2">Anggota Kami</h2>
              <p className="text-xl text-gray-400">Pesilat berbakat SMAN 13 Bandar Lampung</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {members.map((member) => (
                <div key={member.id} className="group relative overflow-hidden rounded-2xl bg-slate-900/50 backdrop-blur border border-emerald-500/20 hover:border-emerald-500/50 transition-all hover:scale-105">
                  <div className="relative h-64 overflow-hidden">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                    <div className="absolute top-4 right-4 px-3 py-1 bg-emerald-500/90 backdrop-blur rounded-full text-white text-sm font-bold">
                      {member.belt}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-emerald-400 text-sm mb-2">{member.class}</p>
                    <p className="text-gray-500 text-sm">Bergabung: {member.joinDate}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Prestasi Page */}
        {currentPage === 'prestasi' && (
          <div>
            <div className="text-center mb-12">
              <Trophy className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
              <h2 className="text-5xl font-black text-white mb-2">Prestasi Kami</h2>
              <p className="text-xl text-gray-400">Pencapaian membanggakan yang telah diraih</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((achievement) => (
                <div key={achievement.id} className="group relative overflow-hidden rounded-2xl bg-slate-900/50 backdrop-blur border border-emerald-500/20 hover:border-emerald-500/50 transition-all hover:scale-105">
                  <div className="relative h-56 overflow-hidden">
                    <img src={achievement.image} alt={achievement.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                    <Trophy className="absolute top-4 right-4 w-10 h-10 text-amber-400" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-bold">{achievement.year}</span>
                      <span className="text-gray-500 text-sm">{achievement.category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{achievement.title}</h3>
                    <p className="text-gray-400 text-sm">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Kegiatan Page */}
        {currentPage === 'kegiatan' && (
          <div>
            <div className="text-center mb-12">
              <Calendar className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
              <h2 className="text-5xl font-black text-white mb-2">Jadwal & Kegiatan</h2>
              <p className="text-xl text-gray-400">Agenda dan kegiatan ekstrakurikuler</p>
            </div>

            <div className="space-y-6">
              {events.map((event) => (
                <div key={event.id} className="group relative overflow-hidden rounded-2xl bg-slate-900/50 backdrop-blur border border-emerald-500/20 hover:border-emerald-500/50 transition-all hover:scale-[1.02]">
                  <div className="md:flex">
                    <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                      <img src={event.image} alt={event.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-transparent to-transparent"></div>
                    </div>
                    
                    <div className="md:w-3/5 p-8">
                      <h3 className="text-3xl font-bold text-white mb-4">{event.name}</h3>
                      <p className="text-gray-400 mb-6">{event.description}</p>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 text-emerald-400">
                          <Calendar className="w-5 h-5" />
                          <span className="font-semibold">{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-3 text-emerald-400">
                          <Clock className="w-5 h-5" />
                          <span className="font-semibold">Pukul {event.time} WIB</span>
                        </div>
                        <div className="flex items-center space-x-3 text-emerald-400">
                          <MapPin className="w-5 h-5" />
                          <span className="font-semibold">{event.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>


      <footer className="relative z-10 bg-slate-900/80 backdrop-blur-xl border-t border-emerald-500/20 mt-20 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="w-12 h-12 text-emerald-400" />
              <div>
                <h3 className="text-2xl font-black text-white">Pencak Silat SMAN 13</h3>
                <p className="text-emerald-400 text-sm">Bandar Lampung</p>
              </div>
            </div>
            <p className="text-gray-400 text-lg mb-4">Membentuk Karakter, Mengukir Prestasi</p>
            <p className="text-gray-600 text-sm">© 2012 Ekstrakurikuler Pencak Silat. Semua Hak Dilindungi.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(20px) translateX(-20px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-15px) translateX(-15px); }
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }

        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default PencakSilatWeb;