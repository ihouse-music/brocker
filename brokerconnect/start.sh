#!/bin/bash

echo "🚀 Starting BrokerConnect Development Server..."

# Check if .env exists
if [ ! -f .env ]; then
    echo "📋 Creating .env file from .env.example..."
    cp .env.example .env
fi

# Generate app key if not set
if ! grep -q "APP_KEY=base64:" .env; then
    echo "🔑 Generating application key..."
    php artisan key:generate
fi

# Check if database exists (SQLite)
if grep -q "DB_CONNECTION=sqlite" .env; then
    if [ ! -f database/database.sqlite ]; then
        echo "🗄️ Creating SQLite database..."
        touch database/database.sqlite
    fi
fi

# Run migrations
echo "🔄 Running database migrations..."
php artisan migrate --force

# Install frontend dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing frontend dependencies..."
    npm install
fi

# Build assets
echo "🎨 Building frontend assets..."
npm run build

# Start the development server
echo "✅ Starting Laravel development server on http://localhost:8000"
php artisan serve