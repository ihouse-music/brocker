# BrokerConnect

> **Connect. Grow. Succeed.** - The ultimate platform for real estate brokers.

BrokerConnect is a comprehensive real estate broker platform designed to help professionals showcase verified profiles, capture leads, and build lasting relationships with clients through innovative features and social networking capabilities.

## 🚀 Features

- **Verified Broker Profiles** - Build trust with verified credentials and professional information
- **Smart Lead Capture** - Intelligent forms with automated follow-ups and detailed tracking
- **Property Listings** - Showcase properties with image galleries and detailed information
- **QR Business Cards** - Digital business cards with QR codes for instant networking
- **Broker Wall** - Social feed functionality for broker posts and community engagement
- **Reviews & Testimonials** - Client review system to build credibility
- **Analytics Dashboard** - Track performance with detailed insights and metrics
- **Notifications** - Real-time in-app, email, and push notifications
- **Mobile Responsive** - Optimized for all devices and screen sizes

## 🛠 Tech Stack

- **Backend**: Laravel 12 with PHP 8.4
- **Frontend**: Livewire 3 + Alpine.js + Tailwind CSS
- **Database**: MySQL 8.0 with Redis for caching
- **Media**: Spatie Media Library for file management
- **Permissions**: Spatie Laravel Permission for role-based access
- **QR Codes**: Endroid QR Code for business card generation
- **Image Processing**: Intervention Image for photo optimization

## 📋 Requirements

- PHP 8.4 or higher
- Composer
- Node.js & NPM
- MySQL 8.0+ or SQLite (for development)
- Redis (optional, for caching and sessions)

## 🐳 Docker Installation (Recommended)

The easiest way to run BrokerConnect is using Docker:

### Prerequisites
- Docker
- Docker Compose

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd brokerconnect
   ```

2. **Copy environment file**
   ```bash
   cp .env.example .env
   ```

3. **Build and start containers**
   ```bash
   docker-compose up -d --build
   ```

4. **Install dependencies and set up database**
   ```bash
   docker-compose exec app composer install
   docker-compose exec app php artisan key:generate
   docker-compose exec app php artisan migrate --seed
   ```

5. **Build frontend assets**
   ```bash
   docker-compose exec app npm install
   docker-compose exec app npm run build
   ```

6. **Access the application**
   - Main application: http://localhost:80
   - Admin panel: http://localhost:80/admin

### Docker Services

- **app**: Laravel application (PHP-FPM)
- **nginx**: Web server
- **db**: MySQL database
- **redis**: Redis cache and sessions

## 🔧 Manual Installation

If you prefer to install without Docker:

### 1. Install Dependencies

```bash
# Install PHP dependencies
composer install

# Install Node.js dependencies
npm install
```

### 2. Environment Setup

```bash
# Copy environment file
cp .env.example .env

# Generate application key
php artisan key:generate

# Configure your database in .env file
```

### 3. Database Setup

```bash
# Run migrations
php artisan migrate

# Seed database (optional)
php artisan db:seed
```

### 4. Build Assets

```bash
# Build frontend assets
npm run build

# For development with hot reload
npm run dev
```

### 5. Start Development Server

```bash
php artisan serve
```

## 🗄️ Database Configuration

### MySQL (Production)
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=brokerconnect
DB_USERNAME=your_username
DB_PASSWORD=your_password
```

### SQLite (Development)
```env
DB_CONNECTION=sqlite
DB_DATABASE=/absolute/path/to/database.sqlite
```

## 📁 Project Structure

```
brokerconnect/
├── app/
│   ├── Http/Controllers/       # Controllers
│   ├── Livewire/              # Livewire components
│   ├── Models/                # Eloquent models
│   └── ...
├── resources/
│   ├── views/                 # Blade templates
│   ├── css/                   # Stylesheets
│   └── js/                    # JavaScript
├── docker/                    # Docker configuration
├── database/
│   ├── migrations/            # Database migrations
│   └── seeders/               # Database seeders
└── public/                    # Public assets
```

## 🔐 Authentication & Roles

BrokerConnect includes a comprehensive role-based permission system:

- **Admin**: Full system access and management
- **Broker**: Profile management, lead capture, listings
- **User**: Basic access for lead interaction

## 🎨 Frontend Development

### Tailwind CSS
The project uses Tailwind CSS for styling with custom color schemes:
- Primary: Blue variations for branding
- Secondary: Gray variations for text and backgrounds

### Alpine.js
Interactive components use Alpine.js for reactivity:
- Mobile navigation
- Dropdowns and modals
- Form interactions

### Livewire Components
Real-time features are built with Livewire:
- Lead management
- Profile updates
- Live search and filters

## 📊 Analytics & Monitoring

BrokerConnect includes built-in analytics for:
- Lead conversion tracking
- Profile view statistics
- Property listing performance
- User engagement metrics

## 🔧 Configuration

### Media Library
Configure file upload limits in `config/media-library.php`

### Permissions
Role and permission configurations in `config/permission.php`

### QR Codes
QR code generation settings can be customized for business cards

## 🚀 Deployment

### Production Checklist

1. **Environment Configuration**
   ```bash
   APP_ENV=production
   APP_DEBUG=false
   APP_URL=https://yourdomain.com
   ```

2. **Optimize for Production**
   ```bash
   composer install --optimize-autoloader --no-dev
   php artisan config:cache
   php artisan route:cache
   php artisan view:cache
   npm run build
   ```

3. **Set Proper Permissions**
   ```bash
   chmod -R 755 storage bootstrap/cache
   ```

### Docker Production Deployment

```bash
# Build production image
docker-compose -f docker-compose.prod.yml up -d --build

# Run optimizations
docker-compose exec app php artisan optimize
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support, please contact [support@brokerconnect.com](mailto:support@brokerconnect.com) or create an issue in the repository.

## 🙏 Acknowledgments

- Laravel framework and community
- Tailwind CSS for the utility-first CSS framework
- Alpine.js for reactive components
- All contributors and testers

---

**BrokerConnect** - Empowering real estate professionals to connect, grow, and succeed in the digital age.