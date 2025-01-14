package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.domain.ContactForm;
import com.mycompany.myapp.repository.ContactFormRepository;
import com.mycompany.myapp.service.ContactFormService;
import com.mycompany.myapp.web.rest.errors.BadRequestAlertException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tech.jhipster.web.util.HeaderUtil;
import tech.jhipster.web.util.ResponseUtil;

/**
 * REST controller for managing {@link com.mycompany.myapp.domain.ContactForm}.
 */
@RestController
@RequestMapping("/api/contact-forms")
public class ContactFormResource {

    private static final Logger LOG = LoggerFactory.getLogger(ContactFormResource.class);

    private static final String ENTITY_NAME = "contactForm";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final ContactFormService contactFormService;

    private final ContactFormRepository contactFormRepository;

    public ContactFormResource(ContactFormService contactFormService, ContactFormRepository contactFormRepository) {
        this.contactFormService = contactFormService;
        this.contactFormRepository = contactFormRepository;
    }

    /**
     * {@code POST  /contact-forms} : Create a new contactForm.
     *
     * @param contactForm the contactForm to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new contactForm, or with status {@code 400 (Bad Request)} if the contactForm has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("")
    public ResponseEntity<ContactForm> createContactForm(@RequestBody ContactForm contactForm) throws URISyntaxException {
        LOG.debug("REST request to save ContactForm : {}", contactForm);
        if (contactForm.getId() != null) {
            throw new BadRequestAlertException("A new contactForm cannot already have an ID", ENTITY_NAME, "idexists");
        }
        contactForm = contactFormService.save(contactForm);
        return ResponseEntity.created(new URI("/api/contact-forms/" + contactForm.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, contactForm.getId().toString()))
            .body(contactForm);
    }

    /**
     * {@code PUT  /contact-forms/:id} : Updates an existing contactForm.
     *
     * @param id the id of the contactForm to save.
     * @param contactForm the contactForm to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated contactForm,
     * or with status {@code 400 (Bad Request)} if the contactForm is not valid,
     * or with status {@code 500 (Internal Server Error)} if the contactForm couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/{id}")
    public ResponseEntity<ContactForm> updateContactForm(
        @PathVariable(value = "id", required = false) final Long id,
        @RequestBody ContactForm contactForm
    ) throws URISyntaxException {
        LOG.debug("REST request to update ContactForm : {}, {}", id, contactForm);
        if (contactForm.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, contactForm.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!contactFormRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        contactForm = contactFormService.update(contactForm);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, contactForm.getId().toString()))
            .body(contactForm);
    }

    /**
     * {@code PATCH  /contact-forms/:id} : Partial updates given fields of an existing contactForm, field will ignore if it is null
     *
     * @param id the id of the contactForm to save.
     * @param contactForm the contactForm to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated contactForm,
     * or with status {@code 400 (Bad Request)} if the contactForm is not valid,
     * or with status {@code 404 (Not Found)} if the contactForm is not found,
     * or with status {@code 500 (Internal Server Error)} if the contactForm couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PatchMapping(value = "/{id}", consumes = { "application/json", "application/merge-patch+json" })
    public ResponseEntity<ContactForm> partialUpdateContactForm(
        @PathVariable(value = "id", required = false) final Long id,
        @RequestBody ContactForm contactForm
    ) throws URISyntaxException {
        LOG.debug("REST request to partial update ContactForm partially : {}, {}", id, contactForm);
        if (contactForm.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, contactForm.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!contactFormRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        Optional<ContactForm> result = contactFormService.partialUpdate(contactForm);

        return ResponseUtil.wrapOrNotFound(
            result,
            HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, contactForm.getId().toString())
        );
    }

    /**
     * {@code GET  /contact-forms} : get all the contactForms.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of contactForms in body.
     */
    @GetMapping("")
    public List<ContactForm> getAllContactForms() {
        LOG.debug("REST request to get all ContactForms");
        return contactFormService.findAll();
    }

    /**
     * {@code GET  /contact-forms/:id} : get the "id" contactForm.
     *
     * @param id the id of the contactForm to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the contactForm, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/{id}")
    public ResponseEntity<ContactForm> getContactForm(@PathVariable("id") Long id) {
        LOG.debug("REST request to get ContactForm : {}", id);
        Optional<ContactForm> contactForm = contactFormService.findOne(id);
        return ResponseUtil.wrapOrNotFound(contactForm);
    }

    /**
     * {@code DELETE  /contact-forms/:id} : delete the "id" contactForm.
     *
     * @param id the id of the contactForm to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteContactForm(@PathVariable("id") Long id) {
        LOG.debug("REST request to delete ContactForm : {}", id);
        contactFormService.delete(id);
        return ResponseEntity.noContent()
            .headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString()))
            .build();
    }
}
