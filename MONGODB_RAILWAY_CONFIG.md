# MongoDB Railway Deployment Configuration

This document explains the MongoDB connection optimizations implemented for Railway deployment.

## Changes Made

### 1. Increased Timeout Settings
- **serverSelectionTimeoutMS**: Increased from 5000ms to 30000ms (6x increase)
- **connectTimeoutMS**: Increased from 10000ms to 30000ms (3x increase)

These changes accommodate Railway's network latency and connection establishment time, which can be higher than localhost environments.

### 2. Enhanced Debug Logging
Added comprehensive logging to help troubleshoot connection issues:
- URI and database name validation logging
- Step-by-step connection progress logging
- Enhanced error logging with error name, message, and stack trace

### 3. Maintained Secure TLS Configuration
The following secure TLS settings are maintained:
- `tls: true` - Enables TLS encryption
- `tlsAllowInvalidCertificates: false` - Ensures certificate validation
- `tlsAllowInvalidHostnames: false` - Ensures hostname validation

## Benefits for Railway Deployment

1. **Better Network Resilience**: Higher timeouts handle Railway's network conditions
2. **Improved Debugging**: Enhanced logging helps identify connection issues
3. **Secure Connections**: Maintains MongoDB Atlas security requirements
4. **Railway Compatibility**: Optimized for cloud deployment environments

## Configuration Summary

```typescript
client = new MongoClient(uri, {
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 30000,  // ← Increased for Railway
  socketTimeoutMS: 45000,
  connectTimeoutMS: 30000,          // ← Increased for Railway
  heartbeatFrequencyMS: 30000,
  tls: true,
  tlsAllowInvalidCertificates: false,
  tlsAllowInvalidHostnames: false,
  retryWrites: true,
  w: "majority",
});
```

## Required Environment Variables

Ensure these environment variables are set in your Railway deployment:
- `MONGODB_URI` - Your MongoDB Atlas connection string
- `MONGODB_DB_NAME` - Your database name
- `MONGODB_COLLECTION` - Your collection name (optional, defaults to "Registrations")

## Troubleshooting

The enhanced logging will now show:
1. URI and database name validation
2. Step-by-step connection progress
3. Detailed error information for failed connections

Check Railway logs for these debug messages to identify and resolve connection issues.