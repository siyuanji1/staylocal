
# TestSprite AI Testing Report (MCP)

---

## 1️⃣ Document Metadata
- **Project Name:** StayLocal — Local Service Travel Web App
- **Date:** 2026-03-15
- **Prepared by:** TestSprite AI Team

---

## 2️⃣ Requirement Validation Summary

---

### Requirement: Listings Grid
- **Description:** Responsive grid on /index.html displaying property cards with image, title, location, rating, and price. Cards open a detail modal.

#### Test TC001 — Listings grid renders property cards with required summary fields
- **Test Code:** [TC001_Listings_grid_renders_property_cards_with_required_summary_fields.py](./TC001_Listings_grid_renders_property_cards_with_required_summary_fields.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/c57fbc9e-e8e3-4e39-9334-257e5fe2bdfb/84a05d49-f5d0-4c71-8d1e-d501a619fe82
- **Status:** ✅ Passed
- **Severity:** LOW
- **Analysis / Findings:** All listing cards correctly render image, title, location, rating, and price. Grid layout is functioning as expected.

---

#### Test TC002 — Open listing detail modal from a card
- **Test Code:** [TC002_Open_listing_detail_modal_from_a_card.py](./TC002_Open_listing_detail_modal_from_a_card.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/c57fbc9e-e8e3-4e39-9334-257e5fe2bdfb/17a340c7-626b-4c10-b27c-852dda09497c
- **Status:** ✅ Passed
- **Severity:** LOW
- **Analysis / Findings:** Clicking a listing card correctly opens the detail modal with all expected content.

---

#### Test TC020 — Open listing detail modal shows core listing information
- **Test Code:** [TC020_Open_listing_detail_modal_shows_core_listing_information.py](./TC020_Open_listing_detail_modal_shows_core_listing_information.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/c57fbc9e-e8e3-4e39-9334-257e5fe2bdfb/171c25ac-ba0f-4e13-b1ad-72c86048b2b4
- **Status:** ✅ Passed
- **Severity:** LOW
- **Analysis / Findings:** Modal shows title, location, rating, beds/baths/guests count correctly.

---

#### Test TC021 — Modal displays host, description, and amenities sections
- **Test Code:** [TC021_Modal_displays_host_description_and_amenities_sections.py](./TC021_Modal_displays_host_description_and_amenities_sections.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/c57fbc9e-e8e3-4e39-9334-257e5fe2bdfb/991456ce-bdfd-4edd-8f9d-28307ae0e1f4
- **Status:** ✅ Passed
- **Severity:** LOW
- **Analysis / Findings:** Host info, description text, and amenities list all render correctly inside the modal.

---

#### Test TC022 — Reserve from modal triggers booking confirmation toast
- **Test Code:** [TC022_Reserve_from_modal_triggers_booking_confirmation_toast.py](./TC022_Reserve_from_modal_triggers_booking_confirmation_toast.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/c57fbc9e-e8e3-4e39-9334-257e5fe2bdfb/0a395447-22ac-434e-9360-2f5882c5e920
- **Status:** ✅ Passed
- **Severity:** LOW
- **Analysis / Findings:** Reserve button fires a toast confirmation with the listing title. Expected behavior for a frontend-only booking flow.

---

### Requirement: Category Filter
- **Description:** Filter the listings grid by category chips (beach, mountain, city, cabin, All, etc.)

#### Test TC007 — Filter listings by selecting a category chip
- **Test Code:** [TC007_Filter_listings_by_selecting_a_category_chip.py](./TC007_Filter_listings_by_selecting_a_category_chip.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/c57fbc9e-e8e3-4e39-9334-257e5fe2bdfb/1c826c04-4e59-42f3-8ffa-6c4b315f343b
- **Status:** ✅ Passed
- **Severity:** LOW
- **Analysis / Findings:** Selecting a category chip correctly filters the grid to matching listings only.

---

#### Test TC008 — Reset filter using All category
- **Test Code:** [TC008_Reset_filter_using_All_category.py](./TC008_Reset_filter_using_All_category.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/c57fbc9e-e8e3-4e39-9334-257e5fe2bdfb/502c10ed-0978-4239-9a14-68b17df75ce4
- **Status:** ✅ Passed
- **Severity:** LOW
- **Analysis / Findings:** Clicking "All" correctly resets the grid to show all 12 listings.

---

#### Test TC009 — Switch categories updates the grid each time
- **Test Code:** [TC009_Switch_categories_updates_the_grid_each_time.py](./TC009_Switch_categories_updates_the_grid_each_time.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/c57fbc9e-e8e3-4e39-9334-257e5fe2bdfb/a161dc54-142f-4928-993a-d78578c27285
- **Status:** ✅ Passed
- **Severity:** LOW
- **Analysis / Findings:** Switching between multiple categories consistently updates the grid without stale state.

---

#### Test TC012 — Empty results state when a category has no matching listings
- **Test Code:** [TC012_Empty_results_state_when_a_category_has_no_matching_listings.py](./TC012_Empty_results_state_when_a_category_has_no_matching_listings.py)
- **Test Error:** Selecting 'Farms' showed 1 listing ('Charming Farmhouse with Horses'). Empty state text reads 'No results found' not 'No listings found'.
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/c57fbc9e-e8e3-4e39-9334-257e5fe2bdfb/93b6afef-2340-4784-b917-7d422410561d
- **Status:** ❌ Failed
- **Severity:** LOW
- **Analysis / Findings:** Test used an incorrect assumption that "Farms" has no listings — there is 1 farm listing. This is a test expectation mismatch, not a real bug. The empty state text 'No results found' is correct per the actual code in `index.html`.

---

### Requirement: Search
- **Description:** Search listings by destination, title, or keyword using the "Where" input; show a toast with the query.

#### Test TC013 — Search returns matching listings and shows toast (using search button)
- **Test Code:** [TC013_Search_returns_matching_listings_and_shows_toast_using_search_button.py](./TC013_Search_returns_matching_listings_and_shows_toast_using_search_button.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/c57fbc9e-e8e3-4e39-9334-257e5fe2bdfb/d6ccfc22-473e-4b54-b4e8-af1ede2e14fc
- **Status:** ✅ Passed
- **Severity:** LOW
- **Analysis / Findings:** Search button correctly filters listings and shows toast notification with the query.

---

#### Test TC014 — Search returns matching listings and shows toast (using Enter key)
- **Test Code:** [TC014_Search_returns_matching_listings_and_shows_toast_using_Enter_key.py](./TC014_Search_returns_matching_listings_and_shows_toast_using_Enter_key.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/c57fbc9e-e8e3-4e39-9334-257e5fe2bdfb/4584273b-b483-4cf2-be1d-a72e6f07898e
- **Status:** ✅ Passed
- **Severity:** LOW
- **Analysis / Findings:** Enter key listener on the search input works correctly and triggers the same search behavior as the button.

---

#### Test TC017 — No-results search shows empty state and toast with query
- **Test Code:** [TC017_No_results_search_shows_empty_state_and_toast_with_query.py](./TC017_No_results_search_shows_empty_state_and_toast_with_query.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/c57fbc9e-e8e3-4e39-9334-257e5fe2bdfb/91b38cb4-37bb-43fd-92ef-bd77726a2038
- **Status:** ✅ Passed
- **Severity:** LOW
- **Analysis / Findings:** Searching for a non-existent location correctly shows the empty state and toast.

---

### Requirement: Wishlist / Like
- **Description:** Toggle heart on listing cards to save/remove from wishlist; toast notification for each action. Not persisted on reload (known limitation).

#### Test TC027 — Like a listing shows liked state and 'Saved to wishlist' toast
- **Test Code:** [TC027_Like_a_listing_shows_liked_state_and_Saved_to_wishlist_toast.py](./TC027_Like_a_listing_shows_liked_state_and_Saved_to_wishlist_toast.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/c57fbc9e-e8e3-4e39-9334-257e5fe2bdfb/af77fb76-3d1e-4d1d-92f6-57635f218bc0
- **Status:** ✅ Passed
- **Severity:** LOW
- **Analysis / Findings:** Heart toggles to red and toast "Saved to wishlist ❤️" appears correctly.

---

#### Test TC028 — Unlike a previously liked listing shows unliked state and 'Removed from wishlist' toast
- **Test Code:** [TC028_Unlike_a_previously_liked_listing_shows_unliked_state_and_Removed_from_wishlist_toast.py](./TC028_Unlike_a_previously_liked_listing_shows_unliked_state_and_Removed_from_wishlist_toast.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/c57fbc9e-e8e3-4e39-9334-257e5fe2bdfb/f94bd01f-96d5-4d24-87bc-0108e1b98c9c
- **Status:** ✅ Passed
- **Severity:** LOW
- **Analysis / Findings:** Toggle from liked to unliked works correctly with proper toast message.

---

#### Test TC031 — Wishlist like state is not persisted after page reload (known behavior)
- **Test Code:** [TC031_Wishlist_like_state_is_not_persisted_after_page_reload_known_behavior.py](./TC031_Wishlist_like_state_is_not_persisted_after_page_reload_known_behavior.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/c57fbc9e-e8e3-4e39-9334-257e5fe2bdfb/2f94a8eb-30a2-4d4f-8feb-a1f35ab3615f
- **Status:** ✅ Passed
- **Severity:** LOW
- **Analysis / Findings:** Confirmed known limitation — wishlist state is in-memory only and resets on reload. No backend persistence is expected at this stage.

---

### Requirement: Filters Modal
- **Description:** Filter by price range, place type (entire/private/shared), and amenities checkboxes.

#### Test TC034 — Apply combined filters (price + place type + amenities) updates the listings grid
- **Test Code:** [TC034_Apply_combined_filters_price__place_type__amenities_updates_the_listings_grid.py](./TC034_Apply_combined_filters_price__place_type__amenities_updates_the_listings_grid.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/c57fbc9e-e8e3-4e39-9334-257e5fe2bdfb/d4c80e20-43cf-4a58-9973-670c2d2927d8
- **Status:** ✅ Passed
- **Severity:** LOW
- **Analysis / Findings:** Combined price + type + amenity filters correctly reduce the listing grid.

---

#### Test TC035 — Clear all resets filter selections and returns to default results
- **Test Code:** [TC035_Clear_all_resets_filter_selections_and_returns_to_default_results.py](./TC035_Clear_all_resets_filter_selections_and_returns_to_default_results.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/c57fbc9e-e8e3-4e39-9334-257e5fe2bdfb/d0b1d6bb-e572-43f4-a3bc-4058b394c360
- **Status:** ✅ Passed
- **Severity:** LOW
- **Analysis / Findings:** "Clear all" correctly resets price range, place type, and amenity checkboxes.

---

#### Test TC038 — Invalid price range (min > max) results in empty results state
- **Test Code:** [TC038_Invalid_price_range_min_greater_than_max_results_in_empty_results_state.py](./TC038_Invalid_price_range_min_greater_than_max_results_in_empty_results_state.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/c57fbc9e-e8e3-4e39-9334-257e5fe2bdfb/baa6e021-bc6a-4230-8bb2-ed4c2879a6d4
- **Status:** ✅ Passed
- **Severity:** LOW
- **Analysis / Findings:** Setting min > max correctly produces zero results without crashing.

---

### Requirement: User Menu Dropdown
- **Description:** Header hamburger + avatar reveals sign-up/log-in/become-a-host/help links (placeholder, no real auth).

#### Test TC042 — Open and close the user menu dropdown from the header
- **Test Code:** [TC042_Open_and_close_the_user_menu_dropdown_from_the_header.py](./TC042_Open_and_close_the_user_menu_dropdown_from_the_header.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/c57fbc9e-e8e3-4e39-9334-257e5fe2bdfb/6030cebe-35a4-4466-96a2-11e7b2dfa3dd
- **Status:** ✅ Passed
- **Severity:** LOW
- **Analysis / Findings:** Dropdown opens and closes correctly; outside-click dismissal works.

---

#### Test TC044 — Sign up link is a non-functional placeholder (no auth flow)
- **Test Code:** [TC044_Sign_up_link_is_a_non_functional_placeholder_no_auth_flow.py](./TC044_Sign_up_link_is_a_non_functional_placeholder_no_auth_flow.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/c57fbc9e-e8e3-4e39-9334-257e5fe2bdfb/cb5f79d3-b764-42a3-8b9d-e13ba227f8b7
- **Status:** ✅ Passed
- **Severity:** LOW
- **Analysis / Findings:** Confirmed — Sign up link is `href="#"` with no auth flow. Expected for hackathon MVP.

---

#### Test TC045 — Log in link is a non-functional placeholder (no auth flow)
- **Test Code:** [TC045_Log_in_link_is_a_non_functional_placeholder_no_auth_flow.py](./TC045_Log_in_link_is_a_non_functional_placeholder_no_auth_flow.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/c57fbc9e-e8e3-4e39-9334-257e5fe2bdfb/9e0e2bad-c713-4b5a-8013-9b2326585a5a
- **Status:** ✅ Passed
- **Severity:** LOW
- **Analysis / Findings:** Confirmed — Log in link is `href="#"` with no auth flow. Expected for hackathon MVP.

---

### Requirement: Local Guides Listing
- **Description:** Browse guide cards on /experiences.html; filter by category chips; open guide detail modal.

#### Test TC049 — View local guide cards on Local Guides page
- **Test Code:** [TC049_View_local_guide_cards_on_Local_Guides_page.py](./TC049_View_local_guide_cards_on_Local_Guides_page.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/c57fbc9e-e8e3-4e39-9334-257e5fe2bdfb/9e76fdbc-fd2b-4f62-8fe1-ff9743bf3e79
- **Status:** ✅ Passed
- **Severity:** LOW
- **Analysis / Findings:** Guide cards load correctly with name, category, rating, price, and location fields displayed.

---

#### Test TC050 — Filter guides by a category chip with matching results
- **Test Code:** [TC050_Filter_guides_by_a_category_chip_with_matching_results.py](./TC050_Filter_guides_by_a_category_chip_with_matching_results.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/c57fbc9e-e8e3-4e39-9334-257e5fe2bdfb/3746b2df-d83a-4e4f-a4b2-c5a4a0e4f12f
- **Status:** ✅ Passed
- **Severity:** LOW
- **Analysis / Findings:** Category chips correctly filter the guides grid to the selected experience type.

---

#### Test TC051 — Open guide detail modal from a guide card
- **Test Code:** [TC051_Open_guide_detail_modal_from_a_guide_card.py](./TC051_Open_guide_detail_modal_from_a_guide_card.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/c57fbc9e-e8e3-4e39-9334-257e5fe2bdfb/844053b1-0404-4a99-b60e-67d4f7805e14
- **Status:** ✅ Passed
- **Severity:** LOW
- **Analysis / Findings:** Clicking a guide card opens the modal with guide photo, name, and details.

---

#### Test TC053 — No-results state when selecting a category with zero matches
- **Test Code:** [TC053_No_results_state_when_selecting_a_category_with_zero_matches.py](./TC053_No_results_state_when_selecting_a_category_with_zero_matches.py)
- **Test Error:** Selecting 'Wellness' showed 1 guide instead of empty state. 'Art & Craft' also had 1 guide. No category produced a true zero-match state.
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/c57fbc9e-e8e3-4e39-9334-257e5fe2bdfb/aec1aec6-bfd1-46fd-b9ab-aae0ad6bde7c
- **Status:** ❌ Failed
- **Severity:** MEDIUM
- **Analysis / Findings:** Every category chip currently has at least one guide assigned in `experiences.js`, so the empty-results state for guides has never been triggered. Consider adding a test city filter that results in zero matches, or verify empty-state CSS/logic is correct by manually triggering it.

---

### Requirement: Guide Hero Search
- **Description:** Search guides by city + experience type + group size from the hero section on /experiences.html.

#### Test TC057 — Filter guides by city + experience type + group size from hero search
- **Test Code:** [TC057_Filter_guides_by_city__experience_type__group_size_from_hero_search.py](./TC057_Filter_guides_by_city__experience_type__group_size_from_hero_search.py)
- **Test Error:** Group size option '1-2' not found (options are: Any size, Just me (solo), 2 people, Small group (3–6)). Experience type option 'Food' not found (correct label: 'Food & Drink').
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/c57fbc9e-e8e3-4e39-9334-257e5fe2bdfb/c9ec9fc3-43fc-4a07-8824-34121e46494a
- **Status:** ❌ Failed
- **Severity:** LOW
- **Analysis / Findings:** Test used incorrect option labels. The actual dropdown values in `experiences.html` are "Just me (solo)", "2 people", "Small group (3–6)" — not "1-2". Similarly the experience type is "Food & Drink" not "Food". This is a test data mismatch, not a code bug.

---

#### Test TC061 — No results when city is blank and no other filters are chosen (empty search)
- **Test Code:** [TC061_No_results_when_city_is_blank_and_no_other_filters_are_chosen_empty_search.py](./TC061_No_results_when_city_is_blank_and_no_other_filters_are_chosen_empty_search.py)
- **Test Error:** Empty search returned all 8 guides instead of zero results.
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/c57fbc9e-e8e3-4e39-9334-257e5fe2bdfb/2400e534-a5cd-4ac2-b0da-81f6408acba1
- **Status:** ❌ Failed
- **Severity:** MEDIUM
- **Analysis / Findings:** Current behavior: submitting an empty city search returns all guides (same as no filter). This is a UX gap — users may expect an empty query to show "please enter a city" rather than all results. Consider adding validation to require a city input before searching.

---

#### Test TC062 — No results for a city that has no guides
- **Test Code:** [TC062_No_results_for_a_city_that_has_no_guides.py](./TC062_No_results_for_a_city_that_has_no_guides.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/c57fbc9e-e8e3-4e39-9334-257e5fe2bdfb/14bf77c9-87d6-4b3f-91bb-9d7d00784727
- **Status:** ✅ Passed
- **Severity:** LOW
- **Analysis / Findings:** Searching for a city with no guides correctly shows the no-results empty state.

---

### Requirement: Guide Detail Modal & Booking Panel
- **Description:** Open a guide modal showing bio/specialties/reviews; book via slide-up panel with date, duration, guests, and optional message.

#### Test TC065 — Open guide detail modal and verify core guide information is displayed
- **Test Code:** [TC065_Open_guide_detail_modal_and_verify_core_guide_information_is_displayed.py](./TC065_Open_guide_detail_modal_and_verify_core_guide_information_is_displayed.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/c57fbc9e-e8e3-4e39-9334-257e5fe2bdfb/ed5ea8ed-86f8-4bd8-8c5e-837d6b4475d2
- **Status:** ✅ Passed
- **Severity:** LOW
- **Analysis / Findings:** Guide modal correctly shows photo, name, bio, specialties, and review information.

---

#### Test TC067 — Book from guide detail modal opens booking panel
- **Test Code:** [TC067_Book_from_guide_detail_modal_opens_booking_panel.py](./TC067_Book_from_guide_detail_modal_opens_booking_panel.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/c57fbc9e-e8e3-4e39-9334-257e5fe2bdfb/135ab657-8d55-423d-83f2-551adbdde02a
- **Status:** ✅ Passed
- **Severity:** LOW
- **Analysis / Findings:** "Book this guide" button correctly triggers the slide-up booking panel with date, duration, guests, and message fields.

---

## 3️⃣ Coverage & Matching Metrics

- **86.67% of tests passed** (26 passed, 4 failed out of 30 total)

| Requirement               | Total Tests | ✅ Passed | ❌ Failed |
|---------------------------|-------------|-----------|-----------|
| Listings Grid             | 5           | 5         | 0         |
| Category Filter           | 4           | 3         | 1         |
| Search                    | 3           | 3         | 0         |
| Wishlist / Like           | 3           | 3         | 0         |
| Filters Modal             | 3           | 3         | 0         |
| User Menu Dropdown        | 3           | 3         | 0         |
| Local Guides Listing      | 4           | 3         | 1         |
| Guide Hero Search         | 3           | 1         | 2         |
| Guide Detail & Booking    | 2           | 2         | 0         |
| **Total**                 | **30**      | **26**    | **4**     |

---

## 4️⃣ Key Gaps / Risks

> **86.67% of tests passed fully.**

**Failures breakdown:**

1. **TC012 — Category empty state (listings):** Test assumption was wrong (Farms has a listing). The empty-state message text `"No results found"` is correct in the code. No code fix needed — test expectation was incorrect.

2. **TC053 — Guide category empty state:** All 8 category chips have at least one guide assigned. The empty-state UI exists but is never reachable via category chips alone. **Risk:** If more guides are added later and a chip becomes empty, the UI may not render correctly since it has never been exercised. Recommend adding a guide-less category or a unit test.

3. **TC057 — Hero search dropdown labels:** Test used wrong option labels ('1-2', 'Food'). Actual labels are 'Just me (solo)', 'Food & Drink'. No code bug — test data mismatch. However, the group size labels could be made more intuitive (e.g. "Solo (1 person)" instead of "Just me (solo)") for clarity.

4. **TC061 — Empty city search returns all guides:** Submitting hero search with no city input returns all 8 guides instead of a validation error or empty state. **UX risk:** Users may not understand they need to type a city. Recommend adding a required city check or a helpful placeholder prompt.

**Other known risks (from code review):**
- No real authentication — all sign-in/sign-up links are `href="#"` placeholders.
- Bookings are toast-only with no backend persistence.
- Check-in/check-out date inputs use `prompt()` dialogs — poor mobile UX.
- Listing image carousel dots are decorative only — not interactive.
