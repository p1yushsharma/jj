package com.mycompany.myapp.service;

import com.mycompany.myapp.domain.ContactForm;
import com.mycompany.myapp.repository.ContactFormRepository;
import java.util.List;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Service Implementation for managing {@link com.mycompany.myapp.domain.ContactForm}.
 */
@Service
@Transactional
public class ContactFormService {

    private static final Logger LOG = LoggerFactory.getLogger(ContactFormService.class);

    private final ContactFormRepository contactFormRepository;

    public ContactFormService(ContactFormRepository contactFormRepository) {
        this.contactFormRepository = contactFormRepository;
    }

    /**
     * Save a contactForm.
     *
     * @param contactForm the entity to save.
     * @return the persisted entity.
     */
    public ContactForm save(ContactForm contactForm) {
        LOG.debug("Request to save ContactForm : {}", contactForm);
        return contactFormRepository.save(contactForm);
    }

    /**
     * Update a contactForm.
     *
     * @param contactForm the entity to save.
     * @return the persisted entity.
     */
    public ContactForm update(ContactForm contactForm) {
        LOG.debug("Request to update ContactForm : {}", contactForm);
        return contactFormRepository.save(contactForm);
    }

    /**
     * Partially update a contactForm.
     *
     * @param contactForm the entity to update partially.
     * @return the persisted entity.
     */
    public Optional<ContactForm> partialUpdate(ContactForm contactForm) {
        LOG.debug("Request to partially update ContactForm : {}", contactForm);

        return contactFormRepository
            .findById(contactForm.getId())
            .map(existingContactForm -> {
                if (contactForm.getName() != null) {
                    existingContactForm.setName(contactForm.getName());
                }
                if (contactForm.getEmail() != null) {
                    existingContactForm.setEmail(contactForm.getEmail());
                }
                if (contactForm.getMessage() != null) {
                    existingContactForm.setMessage(contactForm.getMessage());
                }

                return existingContactForm;
            })
            .map(contactFormRepository::save);
    }

    /**
     * Get all the contactForms.
     *
     * @return the list of entities.
     */
    @Transactional(readOnly = true)
    public List<ContactForm> findAll() {
        LOG.debug("Request to get all ContactForms");
        return contactFormRepository.findAll();
    }

    /**
     * Get one contactForm by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Transactional(readOnly = true)
    public Optional<ContactForm> findOne(Long id) {
        LOG.debug("Request to get ContactForm : {}", id);
        return contactFormRepository.findById(id);
    }

    /**
     * Delete the contactForm by id.
     *
     * @param id the id of the entity.
     */
    public void delete(Long id) {
        LOG.debug("Request to delete ContactForm : {}", id);
        contactFormRepository.deleteById(id);
    }
}
