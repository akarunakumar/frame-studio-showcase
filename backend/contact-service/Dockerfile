# ---------- Build stage ----------
FROM maven:3.9-eclipse-temurin-17 AS build
WORKDIR /workspace
COPY pom.xml .
RUN mvn -B dependency:go-offline
COPY src ./src
RUN mvn -B clean package -DskipTests

# ---------- Runtime stage ----------
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
RUN addgroup -S fsi && adduser -S fsi -G fsi
COPY --from=build /workspace/target/contact-service.jar app.jar
RUN mkdir -p /app/data && chown -R fsi:fsi /app/data
USER fsi
EXPOSE 8090
ENTRYPOINT ["java", "-jar", "app.jar"]
