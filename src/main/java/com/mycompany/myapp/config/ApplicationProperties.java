package com.mycompany.myapp.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

/**
 * Properties specific to Y.
 * <p>
 * Properties are configured in the {@code application.yml} file.
 * See {@link tech.jhipster.config.JHipsterProperties} for a good example.
 */
@ConfigurationProperties(prefix = "application", ignoreUnknownFields = false)
public class ApplicationProperties {

    private boolean liquibaseEnabled = false;  // Liquibase disabled by default

    // jhipster-needle-application-properties-property

    public boolean isLiquibaseEnabled() {
        return liquibaseEnabled;
    }

    public void setLiquibaseEnabled(boolean liquibaseEnabled) {
        this.liquibaseEnabled = liquibaseEnabled;
    }

    // jhipster-needle-application-properties-property-getter
}
