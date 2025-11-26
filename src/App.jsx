import React, { useState } from 'react';
import { Home, MessageCircle, User, Droplet, Utensils, Activity, Coffee, Heart, Info, Lock, Mail } from 'lucide-react';
const DailyFulfillmentApp = () => {
  const [currentPage, setCurrentPage] = useState('landing');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // Dashboard state
  const [meals, setMeals] = useState({ meal1: true, meal2: false, meal3: false });
  const [waterCups, setWaterCups] = useState(3);
  const [movementStatus, setMovementStatus] = useState('Not started');
  const [sweetsItems, setSweetsItems] = useState(0);
  
  // Profile state
  const [dailyGoals, setDailyGoals] = useState({
    mealsPerDay: 3,
    waterIntake: 8,
    movementGoal: 30
  });
  const [notifications, setNotifications] = useState({
    dailyAffirmations: true,
    weeklyProgress: false
  });

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage('dashboard');
  };

  const toggleMeal = (meal) => {
    setMeals(prev => ({ ...prev, [meal]: !prev[meal] }));
  };

  const calculateProgress = () => {
    const mealProgress = (Object.values(meals).filter(Boolean).length / 3) * 100;
    const waterProgress = (waterCups / 8) * 100;
    const movementProgress = movementStatus === 'Mark Complete' ? 100 : 0;
    const sweetsProgress = sweetsItems === 0 ? 100 : Math.max(0, 100 - (sweetsItems * 20));
    return Math.round((mealProgress + waterProgress + movementProgress + sweetsProgress) / 4);
  };

  // Landing Page
  const LandingPage = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-8 h-8 text-cyan-400" />
          </div>
          <div className="flex gap-4">
            <button 
              onClick={handleLogin}
              className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium"
            >
              Log In
            </button>
            <button 
              onClick={handleLogin}
              className="px-6 py-2 bg-cyan-400 text-white rounded-lg hover:bg-cyan-500 font-medium"
            >
              Start Tracking
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Daily Fulfillment Dose
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Your daily balance for body, mind, and emotions.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={handleLogin}
                className="px-8 py-3 bg-cyan-400 text-white rounded-lg hover:bg-cyan-500 font-medium"
              >
                Start Tracking
              </button>
              <button 
                onClick={handleLogin}
                className="px-8 py-3 bg-white text-gray-700 rounded-lg border border-gray-300 hover:bg-gray-50 font-medium"
              >
                Log In
              </button>
            </div>
          </div>
          <div className="bg-gradient-to-br from-orange-100 to-peach-100 rounded-3xl p-12 flex items-center justify-center">
            <div className="text-center">
              <div className="w-48 h-48 bg-orange-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <User className="w-24 h-24 text-orange-400" />
              </div>
              <div className="flex justify-around mt-8">
                <div className="w-16 h-16 bg-orange-300 rounded-full"></div>
                <div className="w-12 h-12 bg-orange-200 rounded-full"></div>
                <div className="w-16 h-16 bg-orange-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-gray-600">
              Discover how Daily Fulfillment Dose can support your journey to wellbeing.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gray-50">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Basic Needs Tracker</h3>
              <p className="text-gray-600">
                Effortlessly monitor your meals, water intake, movement, and manage sugar/caffeine for a balanced day.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gray-50">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Daily Positive Dose</h3>
              <p className="text-gray-600">
                Receive a personalized daily affirmation and a simple wellbeing suggestion to uplift your spirit.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gray-50">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Supportive Mini-Chat</h3>
              <p className="text-gray-600">
                Expect warm, non-judgmental, comforting, AI-powered responses to guide you through your day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm text-gray-600">
          <p>© 2025 Daily Fulfillment Dose. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-900 flex items-center gap-1">
              <Info className="w-4 h-4" /> About
            </a>
            <a href="#" className="hover:text-gray-900 flex items-center gap-1">
              <Lock className="w-4 h-4" /> Privacy
            </a>
            <a href="#" className="hover:text-gray-900 flex items-center gap-1">
              <Mail className="w-4 h-4" /> Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );

  // Dashboard Page
  const DashboardPage = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-8 h-8 text-cyan-400" />
          </div>
          <nav className="flex gap-8">
            <button 
              onClick={() => setCurrentPage('dashboard')}
              className="flex items-center gap-2 text-gray-900 font-medium"
            >
              <Home className="w-5 h-5" /> Dashboard
            </button>
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <MessageCircle className="w-5 h-5" /> Chat
            </button>
            <button 
              onClick={() => setCurrentPage('profile')}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <User className="w-5 h-5" /> Profile
            </button>
          </nav>
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-12">Your Daily Balance</h1>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Meals Tracker */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Utensils className="w-5 h-5 text-gray-700" />
              <h2 className="text-xl font-bold text-gray-900">Meals</h2>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Track your daily meals to ensure consistent nourishment.
            </p>
            <div className="mb-4">
              <p className="text-2xl font-bold text-gray-900 mb-2">
                {Object.values(meals).filter(Boolean).length}/3 Meals
              </p>
              <div className="flex gap-4">
                {['meal1', 'meal2', 'meal3'].map((meal, idx) => (
                  <label key={meal} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={meals[meal]}
                      onChange={() => toggleMeal(meal)}
                      className="w-4 h-4 text-cyan-400 rounded"
                    />
                    <span className="text-sm text-gray-700">Meal {idx + 1}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Water Intake */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Droplet className="w-5 h-5 text-gray-700" />
              <h2 className="text-xl font-bold text-gray-900">Water Intake</h2>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Stay hydrated throughout the day for optimal energy.
            </p>
            <div>
              <p className="text-2xl font-bold text-gray-900 mb-2">{waterCups}/8 Cups</p>
              <div className="flex gap-2 mb-4">
                <button
                  onClick={() => setWaterCups(Math.max(0, waterCups - 1))}
                  className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                >
                  -
                </button>
                <button
                  onClick={() => setWaterCups(Math.min(8, waterCups + 1))}
                  className="px-4 py-2 bg-cyan-400 text-white rounded-lg hover:bg-cyan-500"
                >
                  +
                </button>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-cyan-400 h-2 rounded-full transition-all"
                  style={{ width: `${(waterCups / 8) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Movement */}
          <div className="bg-red-50 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-red-400 rounded-full flex items-center justify-center">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Movement / Outdoor Time</h2>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Incorporate movement and fresh air into your daily routine.
            </p>
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-900">{movementStatus}</span>
              <button
                onClick={() => setMovementStatus(movementStatus === 'Not started' ? 'Mark Complete' : 'Not started')}
                className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50 border border-gray-200"
              >
                {movementStatus === 'Not started' ? 'Mark Complete' : 'Reset'}
              </button>
            </div>
          </div>

          {/* Sweets Control */}
          <div className="bg-cyan-50 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-cyan-400 rounded-full flex items-center justify-center">
                <Coffee className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Sweets / Coffee / Energy Drinks Control</h2>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Mindful consumption to maintain balanced energy levels.
            </p>
            <div>
              <p className="text-2xl font-bold text-gray-900 mb-2">{sweetsItems}/3 Items</p>
              <div className="flex gap-2 mb-4">
                <button
                  onClick={() => setSweetsItems(Math.max(0, sweetsItems - 1))}
                  className="px-4 py-2 bg-white rounded-lg hover:bg-gray-50 border border-gray-200"
                >
                  -
                </button>
                <button
                  onClick={() => setSweetsItems(Math.min(10, sweetsItems + 1))}
                  className="px-4 py-2 bg-cyan-400 text-white rounded-lg hover:bg-cyan-500"
                >
                  +
                </button>
              </div>
              <div className="w-full bg-white rounded-full h-2">
                <div 
                  className="bg-cyan-400 h-2 rounded-full transition-all"
                  style={{ width: `${Math.min(100, (sweetsItems / 3) * 100)}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Daily Positive Dose */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-cyan-400" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Daily Positive Dose</h2>
          </div>
          <p className="text-sm text-gray-600 mb-6">
            A moment of calm and inspiration for your day.
          </p>
          <div className="bg-gray-50 rounded-xl p-6 mb-4">
            <p className="text-gray-900 italic mb-4">
              "Today, I choose to be gentle with myself and embrace growth."
            </p>
            <div className="border-t border-gray-200 pt-4">
              <p className="font-medium text-gray-900 mb-2">Relaxation Tip:</p>
              <p className="text-gray-600 text-sm">
                Take a few deep breaths, focusing on the rise and fall of your abdomen.
              </p>
            </div>
          </div>
          <a href="#" className="text-cyan-400 text-sm hover:underline">
            New challenge: Take a 5-minute walk outside and notice three natural things.
          </a>
        </div>

        {/* Overall Progress */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Overall Daily Balance</h2>
          <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
            <div 
              className="bg-gradient-to-r from-red-400 to-orange-400 h-4 rounded-full transition-all"
              style={{ width: `${calculateProgress()}%` }}
            ></div>
          </div>
          <p className="text-center text-gray-600 text-sm">
            Your overall progress for today: <span className="font-bold">{calculateProgress()}%</span>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm text-gray-600">
          <p>© 2025 Daily Fulfillment Dose. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-900">About</a>
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );

  // Profile Page
  const ProfilePage = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-8 h-8 text-cyan-400" />
          </div>
          <nav className="flex gap-8">
            <button 
              onClick={() => setCurrentPage('dashboard')}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <Home className="w-5 h-5" /> Dashboard
            </button>
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <MessageCircle className="w-5 h-5" /> Chat
            </button>
            <button 
              onClick={() => setCurrentPage('profile')}
              className="flex items-center gap-2 text-gray-900 font-medium"
            >
              <User className="w-5 h-5" /> Profile
            </button>
          </nav>
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">Profile & Settings</h1>

        {/* Profile Info */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-8 text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full mx-auto mb-4 flex items-center justify-center">
            <User className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Alice Smith</h2>
          <button className="text-cyan-400 text-sm hover:underline">Edit Profile</button>
        </div>

        {/* Daily Goals */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Daily Goals</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Utensils className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">Meals per day</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-900 font-medium">{dailyGoals.mealsPerDay}</span>
                <span className="text-gray-500 text-sm">meals</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Droplet className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">Water Intake</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-900 font-medium">{dailyGoals.waterIntake}</span>
                <span className="text-gray-500 text-sm">glasses</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Activity className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">Movement goal</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-900 font-medium">{dailyGoals.movementGoal}</span>
                <span className="text-gray-500 text-sm">minutes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Notification Preferences */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Notification Preferences</h3>
          
          <div className="space-y-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-medium text-gray-900 mb-1">Daily Affirmations</p>
                <p className="text-sm text-gray-600">Receive personalized affirmations each new day start.</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={notifications.dailyAffirmations}
                  onChange={() => setNotifications(prev => ({ ...prev, dailyAffirmations: !prev.dailyAffirmations }))}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-400"></div>
              </label>
            </div>

            <div className="flex items-start justify-between">
              <div>
                <p className="font-medium text-gray-900 mb-1">Weekly Progress Summary</p>
                <p className="text-sm text-gray-600">Get a summary of your wellbeing progress every week.</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={notifications.weeklyProgress}
                  onChange={() => setNotifications(prev => ({ ...prev, weeklyProgress: !prev.weeklyProgress }))}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-400"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Your Progress */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Your Progress</h3>
          
          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-2">Weekly Balance</p>
            <div className="flex items-center justify-center">
              <div className="relative w-40 h-40">
                <svg className="w-40 h-40 transform -rotate-90">
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="#e5e7eb"
                    strokeWidth="12"
                    fill="none"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="#22d3ee"
                    strokeWidth="12"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 70}`}
                    strokeDashoffset={`${2 * Math.PI * 70 * (1 - 0.75)}`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-cyan-400">75%</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="font-medium text-gray-900 mb-4">Completed Challenges This Week</p>
            <div className="space-y-3">
              {[
                { task: 'Meditated for 10 minutes', day: 'Sunday' },
                { task: 'Drank 8 glasses of water', day: 'Tuesday' },
                { task: 'Took a 20-minute walk', day: 'Wednesday' },
                { task: 'Practiced mindful breathing', day: 'Thursday' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">{item.task}</span>
                  </div>
                  <span className="text-gray-500 text-sm">{item.day}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm text-gray-600">
          <p>© 2025 Daily Fulfillment Dose. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-900">About</a>
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );

  // Render current page
  return (
    <>
      {!isLoggedIn && currentPage === 'landing' && <LandingPage />}
      {isLoggedIn && currentPage === 'dashboard' && <DashboardPage />}
      {isLoggedIn && currentPage === 'profile' && <ProfilePage />}
    </>
  );
};

export default DailyFulfillmentApp;