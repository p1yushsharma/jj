package com.mycompany.myapp.service;

import com.mycompany.myapp.domain.Contact;
import com.mycompany.myapp.repository.ContactRepository;
import java.util.List;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Service Implementation for managing {@link com.mycompany.myapp.domain.Contact}.
 */
@Service
@Transactional
public class ContactService {

    private static final Logger LOG = LoggerFactory.getLogger(ContactService.class);

    private final ContactRepository contactRepository;

    public ContactService(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    /**
     * Save a contact.
     *
     * @param contact the entity to save.
     * @return the persisted entity.
     */
    public Contact save(Contact contact) {
        LOG.debug("Request to save Contact : {}", contact);
        return contactRepository.save(contact);
    }

    /**
     * Update a contact.
     *
     * @param contact the entity to save.
     * @return the persisted entity.
     */
    public Contact update(Contact contact) {
        LOG.debug("Request to update Contact : {}", contact);
        return contactRepository.save(contact);
    }

    /**
     * Partially update a contact.
     *
     * @param contact the entity to update partially.
     * @return the persisted entity.
     */
    public Optional<Contact> partialUpdate(Contact contact) {
        LOG.debug("Request to partially update Contact : {}", contact);

        return contactRepository
            .findById(contact.getId())
            .map(existingContact -> {
                if (contact.getName() != null) {
                    existingContact.setName(contact.getName());
                }
                if (contact.getEmail() != null) {
                    existingContact.setEmail(contact.getEmail());
                }
                if (contact.getMessage() != null) {
                    existingContact.setMessage(contact.getMessage());
                }

                return existingContact;
            })
            .map(contactRepository::save);
    }

    /**
     * Get all the contacts.
     *
     * @return the list of entities.
     */
    @Transactional(readOnly = true)
    public List<Contact> findAll() {
        LOG.debug("Request to get all Contacts");
        return contactRepository.findAll();
    }

    /**
     * Get one contact by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Transactional(readOnly = true)
    public Optional<Contact> findOne(Long id) {
        LOG.debug("Request to get Contact : {}", id);
        return contactRepository.findById(id);
    }

    /**
     * Delete the contact by id.
     *
     * @param id the id of the entity.
     */
    public void delete(Long id) {
        LOG.debug("Request to delete Contact : {}", id);
        contactRepository.deleteById(id);
    }
}
