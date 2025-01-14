package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.ContactForm;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the ContactForm entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ContactFormRepository extends JpaRepository<ContactForm, Long> {}
