import React from 'react';
import logo from '../logo.svg';

const Header = () => {
	return (
        <div>
            {/* Header-BP */}
            <header className="header" id="site-header">
                <div className="page-title">
                    <h6>Profile Page</h6>
                </div>
                <div className="header-content-wrapper">
                    <form className="search-bar w-search notification-list friend-requests">
                        <div className="form-group with-button">
                            <input
                                className="form-control js-user-search"
                                placeholder="Search here people or pages..."
                                type="text"
                            />
                            <button>
                                <svg className="olymp-magnifying-glass-icon">
                                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-magnifying-glass-icon" />
                                </svg>
                            </button>
                        </div>
                    </form>
                    <a href="#" className="link-find-friend">
                        Find Friends
                    </a>
                    <div className="control-block">
                        <div className="control-icon more has-items">
                            <svg className="olymp-happy-face-icon">
                                <use xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-face-icon" />
                            </svg>
                            <div className="label-avatar bg-blue">6</div>
                            <div className="more-dropdown more-with-triangle triangle-top-center">
                                <div className="ui-block-title ui-block-title-small">
                                    <h6 className="title">FRIEND REQUESTS</h6>
                                    <a href="#">Find Friends</a>
                                    <a href="#">Settings</a>
                                </div>
                                <div className="mCustomScrollbar" data-mcs-theme="dark">
                                    <ul className="notification-list friend-requests">
                                        <li>
                                            <div className="author-thumb">
                                                <img src="img/avatar55-sm.jpg" alt="author" />
                                            </div>
                                            <div className="notification-event">
                                                <a href="#" className="h6 notification-friend">
                                                    Tamara Romanoff
                                                </a>
                                                <span className="chat-message-item">
                      Mutual Friend: Sarah Hetfield
                    </span>
                                            </div>
                                            <span className="notification-icon">
                    <a href="#" className="accept-request">
                      <span className="icon-add without-text">
                        <svg className="olymp-happy-face-icon">
                          <use xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-face-icon" />
                        </svg>
                      </span>
                    </a>
                    <a href="#" className="accept-request request-del">
                      <span className="icon-minus">
                        <svg className="olymp-happy-face-icon">
                          <use xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-face-icon" />
                        </svg>
                      </span>
                    </a>
                  </span>
                                            <div className="more">
                                                <svg className="olymp-three-dots-icon">
                                                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                                                </svg>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="author-thumb">
                                                <img src="img/avatar56-sm.jpg" alt="author" />
                                            </div>
                                            <div className="notification-event">
                                                <a href="#" className="h6 notification-friend">
                                                    Tony Stevens
                                                </a>
                                                <span className="chat-message-item">
                      4 Friends in Common
                    </span>
                                            </div>
                                            <span className="notification-icon">
                    <a href="#" className="accept-request">
                      <span className="icon-add without-text">
                        <svg className="olymp-happy-face-icon">
                          <use xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-face-icon" />
                        </svg>
                      </span>
                    </a>
                    <a href="#" className="accept-request request-del">
                      <span className="icon-minus">
                        <svg className="olymp-happy-face-icon">
                          <use xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-face-icon" />
                        </svg>
                      </span>
                    </a>
                  </span>
                                            <div className="more">
                                                <svg className="olymp-three-dots-icon">
                                                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                                                </svg>
                                            </div>
                                        </li>
                                        <li className="accepted">
                                            <div className="author-thumb">
                                                <img src="img/avatar57-sm.jpg" alt="author" />
                                            </div>
                                            <div className="notification-event">
                                                You and{" "}
                                                <a href="#" className="h6 notification-friend">
                                                    Mary Jane Stark
                                                </a>{" "}
                                                just became friends. Write on{" "}
                                                <a href="#" className="notification-link">
                                                    her wall
                                                </a>
                                                .
                                            </div>
                                            <span className="notification-icon">
                    <svg className="olymp-happy-face-icon">
                      <use xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-face-icon" />
                    </svg>
                  </span>
                                            <div className="more">
                                                <svg className="olymp-three-dots-icon">
                                                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                                                </svg>
                                                <svg className="olymp-little-delete">
                                                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-little-delete" />
                                                </svg>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="author-thumb">
                                                <img src="img/avatar58-sm.jpg" alt="author" />
                                            </div>
                                            <div className="notification-event">
                                                <a href="#" className="h6 notification-friend">
                                                    Stagg Clothing
                                                </a>
                                                <span className="chat-message-item">
                      9 Friends in Common
                    </span>
                                            </div>
                                            <span className="notification-icon">
                    <a href="#" className="accept-request">
                      <span className="icon-add without-text">
                        <svg className="olymp-happy-face-icon">
                          <use xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-face-icon" />
                        </svg>
                      </span>
                    </a>
                    <a href="#" className="accept-request request-del">
                      <span className="icon-minus">
                        <svg className="olymp-happy-face-icon">
                          <use xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-face-icon" />
                        </svg>
                      </span>
                    </a>
                  </span>
                                            <div className="more">
                                                <svg className="olymp-three-dots-icon">
                                                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                                                </svg>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <a href="#" className="view-all bg-blue">
                                    Check all your Events
                                </a>
                            </div>
                        </div>
                        <div className="control-icon more has-items">
                            <svg className="olymp-chat---messages-icon">
                                <use xlinkHref="svg-icons/sprites/icons.svg#olymp-chat---messages-icon" />
                            </svg>
                            <div className="label-avatar bg-purple">2</div>
                            <div className="more-dropdown more-with-triangle triangle-top-center">
                                <div className="ui-block-title ui-block-title-small">
                                    <h6 className="title">Chat / Messages</h6>
                                    <a href="#">Mark all as read</a>
                                    <a href="#">Settings</a>
                                </div>
                                <div className="mCustomScrollbar" data-mcs-theme="dark">
                                    <ul className="notification-list chat-message">
                                        <li className="message-unread">
                                            <div className="author-thumb">
                                                <img src="img/avatar59-sm.jpg" alt="author" />
                                            </div>
                                            <div className="notification-event">
                                                <a href="#" className="h6 notification-friend">
                                                    Diana Jameson
                                                </a>
                                                <span className="chat-message-item">
                      Hi James! It’s Diana, I just wanted to let you know that
                      we have to reschedule...
                    </span>
                                                <span className="notification-date">
                      <time
                          className="entry-date updated"
                          dateTime="2004-07-24T18:18"
                      >
                        4 hours ago
                      </time>
                    </span>
                                            </div>
                                            <span className="notification-icon">
                    <svg className="olymp-chat---messages-icon">
                      <use xlinkHref="svg-icons/sprites/icons.svg#olymp-chat---messages-icon" />
                    </svg>
                  </span>
                                            <div className="more">
                                                <svg className="olymp-three-dots-icon">
                                                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                                                </svg>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="author-thumb">
                                                <img src="img/avatar60-sm.jpg" alt="author" />
                                            </div>
                                            <div className="notification-event">
                                                <a href="#" className="h6 notification-friend">
                                                    Jake Parker
                                                </a>
                                                <span className="chat-message-item">
                      Great, I’ll see you tomorrow!.
                    </span>
                                                <span className="notification-date">
                      <time
                          className="entry-date updated"
                          dateTime="2004-07-24T18:18"
                      >
                        4 hours ago
                      </time>
                    </span>
                                            </div>
                                            <span className="notification-icon">
                    <svg className="olymp-chat---messages-icon">
                      <use xlinkHref="svg-icons/sprites/icons.svg#olymp-chat---messages-icon" />
                    </svg>
                  </span>
                                            <div className="more">
                                                <svg className="olymp-three-dots-icon">
                                                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                                                </svg>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="author-thumb">
                                                <img src="img/avatar61-sm.jpg" alt="author" />
                                            </div>
                                            <div className="notification-event">
                                                <a href="#" className="h6 notification-friend">
                                                    Elaine Dreyfuss
                                                </a>
                                                <span className="chat-message-item">
                      We’ll have to check that at the office and see if the
                      client is on board with...
                    </span>
                                                <span className="notification-date">
                      <time
                          className="entry-date updated"
                          dateTime="2004-07-24T18:18"
                      >
                        Yesterday at 9:56pm
                      </time>
                    </span>
                                            </div>
                                            <span className="notification-icon">
                    <svg className="olymp-chat---messages-icon">
                      <use xlinkHref="svg-icons/sprites/icons.svg#olymp-chat---messages-icon" />
                    </svg>
                  </span>
                                            <div className="more">
                                                <svg className="olymp-three-dots-icon">
                                                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                                                </svg>
                                            </div>
                                        </li>
                                        <li className="chat-group">
                                            <div className="author-thumb">
                                                <img src="img/avatar11-sm.jpg" alt="author" />
                                                <img src="img/avatar12-sm.jpg" alt="author" />
                                                <img src="img/avatar13-sm.jpg" alt="author" />
                                                <img src="img/avatar10-sm.jpg" alt="author" />
                                            </div>
                                            <div className="notification-event">
                                                <a href="#" className="h6 notification-friend">
                                                    You, Faye, Ed &amp; Jet +3
                                                </a>
                                                <span className="last-message-author">Ed:</span>
                                                <span className="chat-message-item">
                      Yeah! Seems fine by me!
                    </span>
                                                <span className="notification-date">
                      <time
                          className="entry-date updated"
                          dateTime="2004-07-24T18:18"
                      >
                        March 16th at 10:23am
                      </time>
                    </span>
                                            </div>
                                            <span className="notification-icon">
                    <svg className="olymp-chat---messages-icon">
                      <use xlinkHref="svg-icons/sprites/icons.svg#olymp-chat---messages-icon" />
                    </svg>
                  </span>
                                            <div className="more">
                                                <svg className="olymp-three-dots-icon">
                                                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                                                </svg>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <a href="#" className="view-all bg-purple">
                                    View All Messages
                                </a>
                            </div>
                        </div>
                        <div className="control-icon more has-items">
                            <svg className="olymp-thunder-icon">
                                <use xlinkHref="svg-icons/sprites/icons.svg#olymp-thunder-icon" />
                            </svg>
                            <div className="label-avatar bg-primary">8</div>
                            <div className="more-dropdown more-with-triangle triangle-top-center">
                                <div className="ui-block-title ui-block-title-small">
                                    <h6 className="title">Notifications</h6>
                                    <a href="#">Mark all as read</a>
                                    <a href="#">Settings</a>
                                </div>
                                <div className="mCustomScrollbar" data-mcs-theme="dark">
                                    <ul className="notification-list">
                                        <li>
                                            <div className="author-thumb">
                                                <img src="img/avatar62-sm.jpg" alt="author" />
                                            </div>
                                            <div className="notification-event">
                                                <div>
                                                    <a href="#" className="h6 notification-friend">
                                                        Mathilda Brinker
                                                    </a>{" "}
                                                    commented on your new{" "}
                                                    <a href="#" className="notification-link">
                                                        profile status
                                                    </a>
                                                    .
                                                </div>
                                                <span className="notification-date">
                      <time
                          className="entry-date updated"
                          dateTime="2004-07-24T18:18"
                      >
                        4 hours ago
                      </time>
                    </span>
                                            </div>
                                            <span className="notification-icon">
                    <svg className="olymp-comments-post-icon">
                      <use xlinkHref="svg-icons/sprites/icons.svg#olymp-comments-post-icon" />
                    </svg>
                  </span>
                                            <div className="more">
                                                <svg className="olymp-three-dots-icon">
                                                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                                                </svg>
                                                <svg className="olymp-little-delete">
                                                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-little-delete" />
                                                </svg>
                                            </div>
                                        </li>
                                        <li className="un-read">
                                            <div className="author-thumb">
                                                <img src="img/avatar63-sm.jpg" alt="author" />
                                            </div>
                                            <div className="notification-event">
                                                <div>
                                                    You and{" "}
                                                    <a href="#" className="h6 notification-friend">
                                                        Nicholas Grissom
                                                    </a>{" "}
                                                    just became friends. Write on{" "}
                                                    <a href="#" className="notification-link">
                                                        his wall
                                                    </a>
                                                    .
                                                </div>
                                                <span className="notification-date">
                      <time
                          className="entry-date updated"
                          dateTime="2004-07-24T18:18"
                      >
                        9 hours ago
                      </time>
                    </span>
                                            </div>
                                            <span className="notification-icon">
                    <svg className="olymp-happy-face-icon">
                      <use xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-face-icon" />
                    </svg>
                  </span>
                                            <div className="more">
                                                <svg className="olymp-three-dots-icon">
                                                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                                                </svg>
                                                <svg className="olymp-little-delete">
                                                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-little-delete" />
                                                </svg>
                                            </div>
                                        </li>
                                        <li className="with-comment-photo">
                                            <div className="author-thumb">
                                                <img src="img/avatar64-sm.jpg" alt="author" />
                                            </div>
                                            <div className="notification-event">
                                                <div>
                                                    <a href="#" className="h6 notification-friend">
                                                        Sarah Hetfield
                                                    </a>{" "}
                                                    commented on your{" "}
                                                    <a href="#" className="notification-link">
                                                        photo
                                                    </a>
                                                    .
                                                </div>
                                                <span className="notification-date">
                      <time
                          className="entry-date updated"
                          dateTime="2004-07-24T18:18"
                      >
                        Yesterday at 5:32am
                      </time>
                    </span>
                                            </div>
                                            <span className="notification-icon">
                    <svg className="olymp-comments-post-icon">
                      <use xlinkHref="svg-icons/sprites/icons.svg#olymp-comments-post-icon" />
                    </svg>
                  </span>
                                            <div className="comment-photo">
                                                <img src="img/comment-photo1.jpg" alt="photo" />
                                                <span>
                      “She looks incredible in that outfit! We should see
                      each...”
                    </span>
                                            </div>
                                            <div className="more">
                                                <svg className="olymp-three-dots-icon">
                                                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                                                </svg>
                                                <svg className="olymp-little-delete">
                                                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-little-delete" />
                                                </svg>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="author-thumb">
                                                <img src="img/avatar65-sm.jpg" alt="author" />
                                            </div>
                                            <div className="notification-event">
                                                <div>
                                                    <a href="#" className="h6 notification-friend">
                                                        Green Goo Rock
                                                    </a>{" "}
                                                    invited you to attend to his event Goo in{" "}
                                                    <a href="#" className="notification-link">
                                                        Gotham Bar
                                                    </a>
                                                    .
                                                </div>
                                                <span className="notification-date">
                      <time
                          className="entry-date updated"
                          dateTime="2004-07-24T18:18"
                      >
                        March 5th at 6:43pm
                      </time>
                    </span>
                                            </div>
                                            <span className="notification-icon">
                    <svg className="olymp-happy-face-icon">
                      <use xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-face-icon" />
                    </svg>
                  </span>
                                            <div className="more">
                                                <svg className="olymp-three-dots-icon">
                                                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                                                </svg>
                                                <svg className="olymp-little-delete">
                                                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-little-delete" />
                                                </svg>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="author-thumb">
                                                <img src="img/avatar66-sm.jpg" alt="author" />
                                            </div>
                                            <div className="notification-event">
                                                <div>
                                                    <a href="#" className="h6 notification-friend">
                                                        James Summers
                                                    </a>{" "}
                                                    commented on your new{" "}
                                                    <a href="#" className="notification-link">
                                                        profile status
                                                    </a>
                                                    .
                                                </div>
                                                <span className="notification-date">
                      <time
                          className="entry-date updated"
                          dateTime="2004-07-24T18:18"
                      >
                        March 2nd at 8:29pm
                      </time>
                    </span>
                                            </div>
                                            <span className="notification-icon">
                    <svg className="olymp-heart-icon">
                      <use xlinkHref="svg-icons/sprites/icons.svg#olymp-heart-icon" />
                    </svg>
                  </span>
                                            <div className="more">
                                                <svg className="olymp-three-dots-icon">
                                                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                                                </svg>
                                                <svg className="olymp-little-delete">
                                                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-little-delete" />
                                                </svg>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <a href="#" className="view-all bg-primary">
                                    View All Notifications
                                </a>
                            </div>
                        </div>
                        <div className="author-page author vcard inline-items more">
                            <div className="author-thumb">
                                <img alt="author" src="img/author-page.jpg" className="avatar" />
                                <span className="icon-status online" />
                                <div className="more-dropdown more-with-triangle">
                                    <div className="mCustomScrollbar" data-mcs-theme="dark">
                                        <div className="ui-block-title ui-block-title-small">
                                            <h6 className="title">Your Account</h6>
                                        </div>
                                        <ul className="account-settings">
                                            <li>
                                                <a href="29-YourAccount-AccountSettings.html">
                                                    <svg className="olymp-menu-icon">
                                                        <use xlinkHref="svg-icons/sprites/icons.svg#olymp-menu-icon" />
                                                    </svg>
                                                    <span>Profile Settings</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="36-FavPage-SettingsAndCreatePopup.html">
                                                    <svg
                                                        className="olymp-star-icon left-menu-icon"
                                                        data-toggle="tooltip"
                                                        data-placement="right"
                                                        data-original-title="FAV PAGE"
                                                    >
                                                        <use xlinkHref="svg-icons/sprites/icons.svg#olymp-star-icon" />
                                                    </svg>
                                                    <span>Create Fav Page</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <svg className="olymp-logout-icon">
                                                        <use xlinkHref="svg-icons/sprites/icons.svg#olymp-logout-icon" />
                                                    </svg>
                                                    <span>Log Out</span>
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="ui-block-title ui-block-title-small">
                                            <h6 className="title">Chat Settings</h6>
                                        </div>
                                        <ul className="chat-settings">
                                            <li>
                                                <a href="#">
                                                    <span className="icon-status online" />
                                                    <span>Online</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="icon-status away" />
                                                    <span>Away</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="icon-status disconected" />
                                                    <span>Disconnected</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="icon-status status-invisible" />
                                                    <span>Invisible</span>
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="ui-block-title ui-block-title-small">
                                            <h6 className="title">Custom Status</h6>
                                        </div>
                                        <form className="form-group with-button custom-status">
                                            <input
                                                className="form-control"
                                                placeholder
                                                type="text"
                                                defaultValue="Space Cowboy"
                                            />
                                            <button className="bg-purple">
                                                <svg className="olymp-check-icon">
                                                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-check-icon" />
                                                </svg>
                                            </button>
                                        </form>
                                        <div className="ui-block-title ui-block-title-small">
                                            <h6 className="title">About Olympus</h6>
                                        </div>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <span>Terms and Conditions</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span>FAQs</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span>Careers</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span>Contact</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <a href="02-ProfilePage.html" className="author-name fn">
                                <div className="author-title">
                                    James Spiegel{" "}
                                    <svg className="olymp-dropdown-arrow-icon">
                                        <use xlinkHref="svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon" />
                                    </svg>
                                </div>
                                <span className="author-subtitle">SPACE COWBOY</span>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
            {/* ... end Header-BP */}
            {/* Responsive Header-BP */}
            <header className="header header-responsive" id="site-header-responsive">
                <div className="header-content-wrapper">
                    <ul className="nav nav-tabs mobile-app-tabs" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#request" role="tab">
                                <div className="control-icon has-items">
                                    <svg className="olymp-happy-face-icon">
                                        <use xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-face-icon" />
                                    </svg>
                                    <div className="label-avatar bg-blue">6</div>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#chat" role="tab">
                                <div className="control-icon has-items">
                                    <svg className="olymp-chat---messages-icon">
                                        <use xlinkHref="svg-icons/sprites/icons.svg#olymp-chat---messages-icon" />
                                    </svg>
                                    <div className="label-avatar bg-purple">2</div>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                data-toggle="tab"
                                href="#notification"
                                role="tab"
                            >
                                <div className="control-icon has-items">
                                    <svg className="olymp-thunder-icon">
                                        <use xlinkHref="svg-icons/sprites/icons.svg#olymp-thunder-icon" />
                                    </svg>
                                    <div className="label-avatar bg-primary">8</div>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#search" role="tab">
                                <svg className="olymp-magnifying-glass-icon">
                                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-magnifying-glass-icon" />
                                </svg>
                                <svg className="olymp-close-icon">
                                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-close-icon" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
                {/* Tab panes */}
                <div className="tab-content tab-content-responsive">
                    <div className="tab-pane " id="request" role="tabpanel">
                        <div className="mCustomScrollbar" data-mcs-theme="dark">
                            <div className="ui-block-title ui-block-title-small">
                                <h6 className="title">FRIEND REQUESTS</h6>
                                <a href="#">Find Friends</a>
                                <a href="#">Settings</a>
                            </div>
                            <ul className="notification-list friend-requests">
                                <li>
                                    <div className="author-thumb">
                                        <img src="img/avatar55-sm.jpg" alt="author" />
                                    </div>
                                    <div className="notification-event">
                                        <a href="#" className="h6 notification-friend">
                                            Tamara Romanoff
                                        </a>
                                        <span className="chat-message-item">
                  Mutual Friend: Sarah Hetfield
                </span>
                                    </div>
                                    <span className="notification-icon">
                <a href="#" className="accept-request">
                  <span className="icon-add without-text">
                    <svg className="olymp-happy-face-icon">
                      <use xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-face-icon" />
                    </svg>
                  </span>
                </a>
                <a href="#" className="accept-request request-del">
                  <span className="icon-minus">
                    <svg className="olymp-happy-face-icon">
                      <use xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-face-icon" />
                    </svg>
                  </span>
                </a>
              </span>
                                    <div className="more">
                                        <svg className="olymp-three-dots-icon">
                                            <use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                                        </svg>
                                    </div>
                                </li>
                                <li>
                                    <div className="author-thumb">
                                        <img src="img/avatar56-sm.jpg" alt="author" />
                                    </div>
                                    <div className="notification-event">
                                        <a href="#" className="h6 notification-friend">
                                            Tony Stevens
                                        </a>
                                        <span className="chat-message-item">4 Friends in Common</span>
                                    </div>
                                    <span className="notification-icon">
                <a href="#" className="accept-request">
                  <span className="icon-add without-text">
                    <svg className="olymp-happy-face-icon">
                      <use xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-face-icon" />
                    </svg>
                  </span>
                </a>
                <a href="#" className="accept-request request-del">
                  <span className="icon-minus">
                    <svg className="olymp-happy-face-icon">
                      <use xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-face-icon" />
                    </svg>
                  </span>
                </a>
              </span>
                                    <div className="more">
                                        <svg className="olymp-three-dots-icon">
                                            <use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                                        </svg>
                                    </div>
                                </li>
                                <li className="accepted">
                                    <div className="author-thumb">
                                        <img src="img/avatar57-sm.jpg" alt="author" />
                                    </div>
                                    <div className="notification-event">
                                        You and{" "}
                                        <a href="#" className="h6 notification-friend">
                                            Mary Jane Stark
                                        </a>{" "}
                                        just became friends. Write on{" "}
                                        <a href="#" className="notification-link">
                                            her wall
                                        </a>
                                        .
                                    </div>
                                    <span className="notification-icon">
                <svg className="olymp-happy-face-icon">
                  <use xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-face-icon" />
                </svg>
              </span>
                                    <div className="more">
                                        <svg className="olymp-three-dots-icon">
                                            <use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                                        </svg>
                                        <svg className="olymp-little-delete">
                                            <use xlinkHref="svg-icons/sprites/icons.svg#olymp-little-delete" />
                                        </svg>
                                    </div>
                                </li>
                                <li>
                                    <div className="author-thumb">
                                        <img src="img/avatar58-sm.jpg" alt="author" />
                                    </div>
                                    <div className="notification-event">
                                        <a href="#" className="h6 notification-friend">
                                            Stagg Clothing
                                        </a>
                                        <span className="chat-message-item">9 Friends in Common</span>
                                    </div>
                                    <span className="notification-icon">
                <a href="#" className="accept-request">
                  <span className="icon-add without-text">
                    <svg className="olymp-happy-face-icon">
                      <use xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-face-icon" />
                    </svg>
                  </span>
                </a>
                <a href="#" className="accept-request request-del">
                  <span className="icon-minus">
                    <svg className="olymp-happy-face-icon">
                      <use xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-face-icon" />
                    </svg>
                  </span>
                </a>
              </span>
                                    <div className="more">
                                        <svg className="olymp-three-dots-icon">
                                            <use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                                        </svg>
                                    </div>
                                </li>
                            </ul>
                            <a href="#" className="view-all bg-blue">
                                Check all your Events
                            </a>
                        </div>
                    </div>
                    <div className="tab-pane " id="chat" role="tabpanel">
                        <div className="mCustomScrollbar" data-mcs-theme="dark">
                            <div className="ui-block-title ui-block-title-small">
                                <h6 className="title">Chat / Messages</h6>
                                <a href="#">Mark all as read</a>
                                <a href="#">Settings</a>
                            </div>
                            <ul className="notification-list chat-message">
                                <li className="message-unread">
                                    <div className="author-thumb">
                                        <img src="img/avatar59-sm.jpg" alt="author" />
                                    </div>
                                    <div className="notification-event">
                                        <a href="#" className="h6 notification-friend">
                                            Diana Jameson
                                        </a>
                                        <span className="chat-message-item">
                  Hi James! It’s Diana, I just wanted to let you know that we
                  have to reschedule...
                </span>
                                        <span className="notification-date">
                  <time
                      className="entry-date updated"
                      dateTime="2004-07-24T18:18"
                  >
                    4 hours ago
                  </time>
                </span>
                                    </div>
                                    <span className="notification-icon">
                <svg className="olymp-chat---messages-icon">
                  <use xlinkHref="svg-icons/sprites/icons.svg#olymp-chat---messages-icon" />
                </svg>
              </span>
                                    <div className="more">
                                        <svg className="olymp-three-dots-icon">
                                            <use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                                        </svg>
                                    </div>
                                </li>
                                <li>
                                    <div className="author-thumb">
                                        <img src="img/avatar60-sm.jpg" alt="author" />
                                    </div>
                                    <div className="notification-event">
                                        <a href="#" className="h6 notification-friend">
                                            Jake Parker
                                        </a>
                                        <span className="chat-message-item">
                  Great, I’ll see you tomorrow!.
                </span>
                                        <span className="notification-date">
                  <time
                      className="entry-date updated"
                      dateTime="2004-07-24T18:18"
                  >
                    4 hours ago
                  </time>
                </span>
                                    </div>
                                    <span className="notification-icon">
                <svg className="olymp-chat---messages-icon">
                  <use xlinkHref="svg-icons/sprites/icons.svg#olymp-chat---messages-icon" />
                </svg>
              </span>
                                    <div className="more">
                                        <svg className="olymp-three-dots-icon">
                                            <use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                                        </svg>
                                    </div>
                                </li>
                                <li>
                                    <div className="author-thumb">
                                        <img src="img/avatar61-sm.jpg" alt="author" />
                                    </div>
                                    <div className="notification-event">
                                        <a href="#" className="h6 notification-friend">
                                            Elaine Dreyfuss
                                        </a>
                                        <span className="chat-message-item">
                  We’ll have to check that at the office and see if the client
                  is on board with...
                </span>
                                        <span className="notification-date">
                  <time
                      className="entry-date updated"
                      dateTime="2004-07-24T18:18"
                  >
                    Yesterday at 9:56pm
                  </time>
                </span>
                                    </div>
                                    <span className="notification-icon">
                <svg className="olymp-chat---messages-icon">
                  <use xlinkHref="svg-icons/sprites/icons.svg#olymp-chat---messages-icon" />
                </svg>
              </span>
                                    <div className="more">
                                        <svg className="olymp-three-dots-icon">
                                            <use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                                        </svg>
                                    </div>
                                </li>
                                <li className="chat-group">
                                    <div className="author-thumb">
                                        <img src="img/avatar11-sm.jpg" alt="author" />
                                        <img src="img/avatar12-sm.jpg" alt="author" />
                                        <img src="img/avatar13-sm.jpg" alt="author" />
                                        <img src="img/avatar10-sm.jpg" alt="author" />
                                    </div>
                                    <div className="notification-event">
                                        <a href="#" className="h6 notification-friend">
                                            You, Faye, Ed &amp; Jet +3
                                        </a>
                                        <span className="last-message-author">Ed:</span>
                                        <span className="chat-message-item">
                  Yeah! Seems fine by me!
                </span>
                                        <span className="notification-date">
                  <time
                      className="entry-date updated"
                      dateTime="2004-07-24T18:18"
                  >
                    March 16th at 10:23am
                  </time>
                </span>
                                    </div>
                                    <span className="notification-icon">
                <svg className="olymp-chat---messages-icon">
                  <use xlinkHref="svg-icons/sprites/icons.svg#olymp-chat---messages-icon" />
                </svg>
              </span>
                                    <div className="more">
                                        <svg className="olymp-three-dots-icon">
                                            <use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                                        </svg>
                                    </div>
                                </li>
                            </ul>
                            <a href="#" className="view-all bg-purple">
                                View All Messages
                            </a>
                        </div>
                    </div>
                    <div className="tab-pane " id="notification" role="tabpanel">
                        <div className="mCustomScrollbar" data-mcs-theme="dark">
                            <div className="ui-block-title ui-block-title-small">
                                <h6 className="title">Notifications</h6>
                                <a href="#">Mark all as read</a>
                                <a href="#">Settings</a>
                            </div>
                            <ul className="notification-list">
                                <li>
                                    <div className="author-thumb">
                                        <img src="img/avatar62-sm.jpg" alt="author" />
                                    </div>
                                    <div className="notification-event">
                                        <div>
                                            <a href="#" className="h6 notification-friend">
                                                Mathilda Brinker
                                            </a>{" "}
                                            commented on your new{" "}
                                            <a href="#" className="notification-link">
                                                profile status
                                            </a>
                                            .
                                        </div>
                                        <span className="notification-date">
                  <time
                      className="entry-date updated"
                      dateTime="2004-07-24T18:18"
                  >
                    4 hours ago
                  </time>
                </span>
                                    </div>
                                    <span className="notification-icon">
                <svg className="olymp-comments-post-icon">
                  <use xlinkHref="svg-icons/sprites/icons.svg#olymp-comments-post-icon" />
                </svg>
              </span>
                                    <div className="more">
                                        <svg className="olymp-three-dots-icon">
                                            <use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                                        </svg>
                                        <svg className="olymp-little-delete">
                                            <use xlinkHref="svg-icons/sprites/icons.svg#olymp-little-delete" />
                                        </svg>
                                    </div>
                                </li>
                                <li className="un-read">
                                    <div className="author-thumb">
                                        <img src="img/avatar63-sm.jpg" alt="author" />
                                    </div>
                                    <div className="notification-event">
                                        <div>
                                            You and{" "}
                                            <a href="#" className="h6 notification-friend">
                                                Nicholas Grissom
                                            </a>{" "}
                                            just became friends. Write on{" "}
                                            <a href="#" className="notification-link">
                                                his wall
                                            </a>
                                            .
                                        </div>
                                        <span className="notification-date">
                  <time
                      className="entry-date updated"
                      dateTime="2004-07-24T18:18"
                  >
                    9 hours ago
                  </time>
                </span>
                                    </div>
                                    <span className="notification-icon">
                <svg className="olymp-happy-face-icon">
                  <use xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-face-icon" />
                </svg>
              </span>
                                    <div className="more">
                                        <svg className="olymp-three-dots-icon">
                                            <use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                                        </svg>
                                        <svg className="olymp-little-delete">
                                            <use xlinkHref="svg-icons/sprites/icons.svg#olymp-little-delete" />
                                        </svg>
                                    </div>
                                </li>
                                <li className="with-comment-photo">
                                    <div className="author-thumb">
                                        <img src="img/avatar64-sm.jpg" alt="author" />
                                    </div>
                                    <div className="notification-event">
                                        <div>
                                            <a href="#" className="h6 notification-friend">
                                                Sarah Hetfield
                                            </a>{" "}
                                            commented on your{" "}
                                            <a href="#" className="notification-link">
                                                photo
                                            </a>
                                            .
                                        </div>
                                        <span className="notification-date">
                  <time
                      className="entry-date updated"
                      dateTime="2004-07-24T18:18"
                  >
                    Yesterday at 5:32am
                  </time>
                </span>
                                    </div>
                                    <span className="notification-icon">
                <svg className="olymp-comments-post-icon">
                  <use xlinkHref="svg-icons/sprites/icons.svg#olymp-comments-post-icon" />
                </svg>
              </span>
                                    <div className="comment-photo">
                                        <img src="img/comment-photo1.jpg" alt="photo" />
                                        <span>
                  “She looks incredible in that outfit! We should see each...”
                </span>
                                    </div>
                                    <div className="more">
                                        <svg className="olymp-three-dots-icon">
                                            <use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                                        </svg>
                                        <svg className="olymp-little-delete">
                                            <use xlinkHref="svg-icons/sprites/icons.svg#olymp-little-delete" />
                                        </svg>
                                    </div>
                                </li>
                                <li>
                                    <div className="author-thumb">
                                        <img src="img/avatar65-sm.jpg" alt="author" />
                                    </div>
                                    <div className="notification-event">
                                        <div>
                                            <a href="#" className="h6 notification-friend">
                                                Green Goo Rock
                                            </a>{" "}
                                            invited you to attend to his event Goo in{" "}
                                            <a href="#" className="notification-link">
                                                Gotham Bar
                                            </a>
                                            .
                                        </div>
                                        <span className="notification-date">
                  <time
                      className="entry-date updated"
                      dateTime="2004-07-24T18:18"
                  >
                    March 5th at 6:43pm
                  </time>
                </span>
                                    </div>
                                    <span className="notification-icon">
                <svg className="olymp-happy-face-icon">
                  <use xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-face-icon" />
                </svg>
              </span>
                                    <div className="more">
                                        <svg className="olymp-three-dots-icon">
                                            <use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                                        </svg>
                                        <svg className="olymp-little-delete">
                                            <use xlinkHref="svg-icons/sprites/icons.svg#olymp-little-delete" />
                                        </svg>
                                    </div>
                                </li>
                                <li>
                                    <div className="author-thumb">
                                        <img src="img/avatar66-sm.jpg" alt="author" />
                                    </div>
                                    <div className="notification-event">
                                        <div>
                                            <a href="#" className="h6 notification-friend">
                                                James Summers
                                            </a>{" "}
                                            commented on your new{" "}
                                            <a href="#" className="notification-link">
                                                profile status
                                            </a>
                                            .
                                        </div>
                                        <span className="notification-date">
                  <time
                      className="entry-date updated"
                      dateTime="2004-07-24T18:18"
                  >
                    March 2nd at 8:29pm
                  </time>
                </span>
                                    </div>
                                    <span className="notification-icon">
                <svg className="olymp-heart-icon">
                  <use xlinkHref="svg-icons/sprites/icons.svg#olymp-heart-icon" />
                </svg>
              </span>
                                    <div className="more">
                                        <svg className="olymp-three-dots-icon">
                                            <use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                                        </svg>
                                        <svg className="olymp-little-delete">
                                            <use xlinkHref="svg-icons/sprites/icons.svg#olymp-little-delete" />
                                        </svg>
                                    </div>
                                </li>
                            </ul>
                            <a href="#" className="view-all bg-primary">
                                View All Notifications
                            </a>
                        </div>
                    </div>
                    <div className="tab-pane " id="search" role="tabpanel">
                        <form className="search-bar w-search notification-list friend-requests">
                            <div className="form-group with-button">
                                <input
                                    className="form-control js-user-search"
                                    placeholder="Search here people or pages..."
                                    type="text"
                                />
                            </div>
                        </form>
                    </div>
                </div>
                {/* ... end  Tab panes */}
            </header>
            {/* ... end Responsive Header-BP */}
            <div className="header-spacer" />
            {/* Top Header-Profile */}
            <div className="container">
                <div className="row">
                    <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="ui-block">
                            <div className="top-header">
                                <div className="top-header-thumb">
                                    <img src="img/top-header1.jpg" alt="nature" />
                                </div>
                                <div className="profile-section">
                                    <div className="row">
                                        <div className="col col-lg-5 col-md-5 col-sm-12 col-12">
                                            <ul className="profile-menu">
                                                <li>
                                                    <a href="02-ProfilePage.html" className="active">
                                                        Timeline
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="05-ProfilePage-About.html">About</a>
                                                </li>
                                                <li>
                                                    <a href="06-ProfilePage.html">Friends</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col col-lg-5 ml-auto col-md-5 col-sm-12 col-12">
                                            <ul className="profile-menu">
                                                <li>
                                                    <a href="07-ProfilePage-Photos.html">Photos</a>
                                                </li>
                                                <li>
                                                    <a href="09-ProfilePage-Videos.html">Videos</a>
                                                </li>
                                                <li>
                                                    <div className="more">
                                                        <svg className="olymp-three-dots-icon">
                                                            <use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                                                        </svg>
                                                        <ul className="more-dropdown more-with-triangle">
                                                            <li>
                                                                <a href="#">Report Profile</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Block Profile</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="control-block-button">
                                        <a
                                            href="35-YourAccount-FriendsRequests.html"
                                            className="btn btn-control bg-blue"
                                        >
                                            <svg className="olymp-happy-face-icon">
                                                <use xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-face-icon" />
                                            </svg>
                                        </a>
                                        <a href="#" className="btn btn-control bg-purple">
                                            <svg className="olymp-chat---messages-icon">
                                                <use xlinkHref="svg-icons/sprites/icons.svg#olymp-chat---messages-icon" />
                                            </svg>
                                        </a>
                                        <div className="btn btn-control bg-primary more">
                                            <svg className="olymp-settings-icon">
                                                <use xlinkHref="svg-icons/sprites/icons.svg#olymp-settings-icon" />
                                            </svg>
                                            <ul className="more-dropdown more-with-triangle triangle-bottom-right">
                                                <li>
                                                    <a
                                                        href="#"
                                                        data-toggle="modal"
                                                        data-target="#update-header-photo"
                                                    >
                                                        Update Profile Photo
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        data-toggle="modal"
                                                        data-target="#update-header-photo"
                                                    >
                                                        Update Header Photo
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="29-YourAccount-AccountSettings.html">
                                                        Account Settings
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="top-header-author">
                                    <a href="02-ProfilePage.html" className="author-thumb">
                                        <img src="img/author-main1.jpg" alt="author" />
                                    </a>
                                    <div className="author-content">
                                        <a href="02-ProfilePage.html" className="h4 author-name">
                                            James Spiegel
                                        </a>
                                        <div className="country">San Francisco, CA</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ... end Top Header-Profile */}
            <div className="container">
                <div className="row">
                    {/* Main Content */}
                    <div className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
                        <div id="newsfeed-items-grid">
                            <div className="ui-block">
                                {/* Post */}
                                <article className="hentry post">
                                    <div className="post__author author vcard inline-items">
                                        <img src="img/author-page.jpg" alt="author" />
                                        <div className="author-date">
                                            <a
                                                className="h6 post__author-name fn"
                                                href="02-ProfilePage.html"
                                            >
                                                James Spiegel
                                            </a>
                                            <div className="post__date">
                                                <time className="published" dateTime="2017-03-24T18:18">
                                                    19 hours ago
                                                </time>
                                            </div>
                                        </div>
                                        <div className="more">
                                            <svg className="olymp-three-dots-icon">
                                                <use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                                            </svg>
                                            <ul className="more-dropdown">
                                                <li>
                                                    <a href="#">Edit Post</a>
                                                </li>
                                                <li>
                                                    <a href="#">Delete Post</a>
                                                </li>
                                                <li>
                                                    <a href="#">Turn Off Notifications</a>
                                                </li>
                                                <li>
                                                    <a href="#">Select as Featured</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt
                                        mollit anim id est laborum. Sed ut perspiciatis unde omnis iste
                                        natus error sit voluptatem accusantium doloremque.
                                    </p>
                                    <div className="post-additional-info inline-items">
                                        <a href="#" className="post-add-icon inline-items">
                                            <svg className="olymp-heart-icon">
                                                <use xlinkHref="svg-icons/sprites/icons.svg#olymp-heart-icon" />
                                            </svg>
                                            <span>8</span>
                                        </a>
                                        <ul className="friends-harmonic">
                                            <li>
                                                <a href="#">
                                                    <img src="img/friend-harmonic7.jpg" alt="friend" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img src="img/friend-harmonic8.jpg" alt="friend" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img src="img/friend-harmonic9.jpg" alt="friend" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img src="img/friend-harmonic10.jpg" alt="friend" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img src="img/friend-harmonic11.jpg" alt="friend" />
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="names-people-likes">
                                            <a href="#">Jenny</a>, <a href="#">Robert</a> and
                                            <br />6 more liked this
                                        </div>
                                        <div className="comments-shared">
                                            <a href="#" className="post-add-icon inline-items">
                                                <svg className="olymp-speech-balloon-icon">
                                                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-speech-balloon-icon" />
                                                </svg>
                                                <span>17</span>
                                            </a>
                                            <a href="#" className="post-add-icon inline-items">
                                                <svg className="olymp-share-icon">
                                                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-share-icon" />
                                                </svg>
                                                <span>24</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="control-block-button post-control-button">
                                        <a href="#" className="btn btn-control featured-post">
                                            <svg className="olymp-trophy-icon">
                                                <use xlinkHref="svg-icons/sprites/icons.svg#olymp-trophy-icon" />
                                            </svg>
                                        </a>
                                        <a href="#" className="btn btn-control">
                                            <svg className="olymp-like-post-icon">
                                                <use xlinkHref="svg-icons/sprites/icons.svg#olymp-like-post-icon" />
                                            </svg>
                                        </a>
                                        <a href="#" className="btn btn-control">
                                            <svg className="olymp-comments-post-icon">
                                                <use xlinkHref="svg-icons/sprites/icons.svg#olymp-comments-post-icon" />
                                            </svg>
                                        </a>
                                        <a href="#" className="btn btn-control">
                                            <svg className="olymp-share-icon">
                                                <use xlinkHref="svg-icons/sprites/icons.svg#olymp-share-icon" />
                                            </svg>
                                        </a>
                                    </div>
                                </article>
                                {/* .. end Post */}{" "}
                            </div>
                            <div className="ui-block">
                                {/* Post */}
                                <article className="hentry post video">
                                    <div className="post__author author vcard inline-items">
                                        <img src="img/author-page.jpg" alt="author" />
                                        <div className="author-date">
                                            <a
                                                className="h6 post__author-name fn"
                                                href="02-ProfilePage.html"
                                            >
                                                James Spiegel
                                            </a>{" "}
                                            shared a<a href="#">link</a>
                                            <div className="post__date">
                                                <time className="published" dateTime="2017-03-24T18:18">
                                                    7 hours ago
                                                </time>
                                            </div>
                                        </div>
                                        <div className="more">
                                            <svg className="olymp-three-dots-icon">
                                                <use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                                            </svg>
                                            <ul className="more-dropdown">
                                                <li>
                                                    <a href="#">Edit Post</a>
                                                </li>
                                                <li>
                                                    <a href="#">Delete Post</a>
                                                </li>
                                                <li>
                                                    <a href="#">Turn Off Notifications</a>
                                                </li>
                                                <li>
                                                    <a href="#">Select as Featured</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p>
                                        If someone missed it, check out the new song by System of a
                                        Revenge! I thinks they are going back to their roots...
                                    </p>
                                    <div className="post-video">
                                        <div className="video-thumb">
                                            <img src="img/video5.jpg" alt="photo" />
                                            <a
                                                href="https://youtube.com/watch?v=excVFQ2TWig"
                                                className="play-video"
                                            >
                                                <svg className="olymp-play-icon">
                                                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-play-icon" />
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="video-content">
                                            <a href="#" className="h4 title">
                                                System of a Revenge - Nothing Else Matters (LIVE)
                                            </a>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur ipisicing elit, sed
                                                do eiusmod tempo incididunt ut labore..
                                            </p>
                                            <a href="#" className="link-site">
                                                YOUTUBE.COM
                                            </a>
                                        </div>
                                    </div>
                                    <div className="post-additional-info inline-items">
                                        <a href="#" className="post-add-icon inline-items">
                                            <svg className="olymp-heart-icon">
                                                <use xlinkHref="svg-icons/sprites/icons.svg#olymp-heart-icon" />
                                            </svg>
                                            <span>15</span>
                                        </a>
                                        <ul className="friends-harmonic">
                                            <li>
                                                <a href="#">
                                                    <img src="img/friend-harmonic9.jpg" alt="friend" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img src="img/friend-harmonic10.jpg" alt="friend" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img src="img/friend-harmonic7.jpg" alt="friend" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img src="img/friend-harmonic8.jpg" alt="friend" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img src="img/friend-harmonic11.jpg" alt="friend" />
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="names-people-likes">
                                            <a href="#">Jenny</a>, <a href="#">Robert</a> and
                                            <br />
                                            13 more liked this
                                        </div>
                                        <div className="comments-shared">
                                            <a href="#" className="post-add-icon inline-items">
                                                <svg className="olymp-speech-balloon-icon">
                                                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-speech-balloon-icon" />
                                                </svg>
                                                <span>1</span>
                                            </a>
                                            <a href="#" className="post-add-icon inline-items">
                                                <svg className="olymp-share-icon">
                                                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-share-icon" />
                                                </svg>
                                                <span>16</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="control-block-button post-control-button">
                                        <a href="#" className="btn btn-control">
                                            <svg className="olymp-like-post-icon">
                                                <use xlinkHref="svg-icons/sprites/icons.svg#olymp-like-post-icon" />
                                            </svg>
                                        </a>
                                        <a href="#" className="btn btn-control">
                                            <svg className="olymp-comments-post-icon">
                                                <use xlinkHref="svg-icons/sprites/icons.svg#olymp-comments-post-icon" />
                                            </svg>
                                        </a>
                                        <a href="#" className="btn btn-control">
                                            <svg className="olymp-share-icon">
                                                <use xlinkHref="svg-icons/sprites/icons.svg#olymp-share-icon" />
                                            </svg>
                                        </a>
                                    </div>
                                </article>
                                {/* .. end Post */}{" "}
                            </div>
                            <div className="ui-block">
                                {/* Post */}
                                <article className="hentry post">
                                    <div className="post__author author vcard inline-items">
                                        <img src="img/author-page.jpg" alt="author" />
                                        <div className="author-date">
                                            <a
                                                className="h6 post__author-name fn"
                                                href="02-ProfilePage.html"
                                            >
                                                James Spiegel
                                            </a>
                                            <div className="post__date">
                                                <time className="published" dateTime="2017-03-24T18:18">
                                                    2 hours ago
                                                </time>
                                            </div>
                                        </div>
                                        <div className="more">
                                            <svg className="olymp-three-dots-icon">
                                                <use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                                            </svg>
                                            <ul className="more-dropdown">
                                                <li>
                                                    <a href="#">Edit Post</a>
                                                </li>
                                                <li>
                                                    <a href="#">Delete Post</a>
                                                </li>
                                                <li>
                                                    <a href="#">Turn Off Notifications</a>
                                                </li>
                                                <li>
                                                    <a href="#">Select as Featured</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                        eiusmod tempo incididunt ut labore et dolore magna aliqua. Ut
                                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                        consequat.
                                    </p>
                                    <div className="post-additional-info inline-items">
                                        <a href="#" className="post-add-icon inline-items">
                                            <svg className="olymp-heart-icon">
                                                <use xlinkHref="svg-icons/sprites/icons.svg#olymp-heart-icon" />
                                            </svg>
                                            <span>36</span>
                                        </a>
                                        <ul className="friends-harmonic">
                                            <li>
                                                <a href="#">
                                                    <img src="img/friend-harmonic7.jpg" alt="friend" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img src="img/friend-harmonic8.jpg" alt="friend" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img src="img/friend-harmonic9.jpg" alt="friend" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img src="img/friend-harmonic10.jpg" alt="friend" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img src="img/friend-harmonic11.jpg" alt="friend" />
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="names-people-likes">
                                            <a href="#">You</a>, <a href="#">Elaine</a> and
                                            <br />
                                            34 more liked this
                                        </div>
                                        <div className="comments-shared">
                                            <a href="#" className="post-add-icon inline-items">
                                                <svg className="olymp-speech-balloon-icon">
                                                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-speech-balloon-icon" />
                                                </svg>
                                                <span>17</span>
                                            </a>
                                            <a href="#" className="post-add-icon inline-items">
                                                <svg className="olymp-share-icon">
                                                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-share-icon" />
                                                </svg>
                                                <span>24</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="control-block-button post-control-button">
                                        <a href="#" className="btn btn-control">
                                            <svg className="olymp-like-post-icon">
                                                <use xlinkHref="svg-icons/sprites/icons.svg#olymp-like-post-icon" />
                                            </svg>
                                        </a>
                                        <a href="#" className="btn btn-control">
                                            <svg className="olymp-comments-post-icon">
                                                <use xlinkHref="svg-icons/sprites/icons.svg#olymp-comments-post-icon" />
                                            </svg>
                                        </a>
                                        <a href="#" className="btn btn-control">
                                            <svg className="olymp-share-icon">
                                                <use xlinkHref="svg-icons/sprites/icons.svg#olymp-share-icon" />
                                            </svg>
                                        </a>
                                    </div>
                                </article>
                                {/* .. end Post */}
                                {/* Comments */}
                                <ul className="comments-list">
                                    <li className="comment-item">
                                        <div className="post__author author vcard inline-items">
                                            <img src="img/avatar10-sm.jpg" alt="author" />
                                            <div className="author-date">
                                                <a className="h6 post__author-name fn" href="#">
                                                    Elaine Dreyfuss
                                                </a>
                                                <div className="post__date">
                                                    <time className="published" dateTime="2017-03-24T18:18">
                                                        5 mins ago
                                                    </time>
                                                </div>
                                            </div>
                                            <a href="#" className="more">
                                                <svg className="olymp-three-dots-icon">
                                                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                                                </svg>
                                            </a>
                                        </div>
                                        <p>
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                            accusantium der doloremque laudantium.
                                        </p>
                                        <a href="#" className="post-add-icon inline-items">
                                            <svg className="olymp-heart-icon">
                                                <use xlinkHref="svg-icons/sprites/icons.svg#olymp-heart-icon" />
                                            </svg>
                                            <span>8</span>
                                        </a>
                                        <a href="#" className="reply">
                                            Reply
                                        </a>
                                    </li>
                                    <li className="comment-item has-children">
                                        <div className="post__author author vcard inline-items">
                                            <img src="img/avatar5-sm.jpg" alt="author" />
                                            <div className="author-date">
                                                <a className="h6 post__author-name fn" href="#">
                                                    Green Goo Rock
                                                </a>
                                                <div className="post__date">
                                                    <time className="published" dateTime="2017-03-24T18:18">
                                                        1 hour ago
                                                    </time>
                                                </div>
                                            </div>
                                            <a href="#" className="more">
                                                <svg className="olymp-three-dots-icon">
                                                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                                                </svg>
                                            </a>
                                        </div>
                                        <p>
                                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                                            odit aut fugiten, sed quia consequuntur magni dolores eos qui
                                            ratione voluptatem sequi en lod nesciunt. Neque porro quisquam
                                            est, qui dolorem ipsum quia dolor sit amet, consectetur
                                            adipisci velit en lorem ipsum der.
                                        </p>
                                        <a href="#" className="post-add-icon inline-items">
                                            <svg className="olymp-heart-icon">
                                                <use xlinkHref="svg-icons/sprites/icons.svg#olymp-heart-icon" />
                                            </svg>
                                            <span>5</span>
                                        </a>
                                        <a href="#" className="reply">
                                            Reply
                                        </a>
                                        <ul className="children">
                                            <li className="comment-item">
                                                <div className="post__author author vcard inline-items">
                                                    <img src="img/avatar8-sm.jpg" alt="author" />
                                                    <div className="author-date">
                                                        <a className="h6 post__author-name fn" href="#">
                                                            Diana Jameson
                                                        </a>
                                                        <div className="post__date">
                                                            <time
                                                                className="published"
                                                                dateTime="2017-03-24T18:18"
                                                            >
                                                                39 mins ago
                                                            </time>
                                                        </div>
                                                    </div>
                                                    <a href="#" className="more">
                                                        <svg className="olymp-three-dots-icon">
                                                            <use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                <p>
                                                    Duis aute irure dolor in reprehenderit in voluptate velit
                                                    esse cillum dolore eu fugiat nulla pariatur.
                                                </p>
                                                <a href="#" className="post-add-icon inline-items">
                                                    <svg className="olymp-heart-icon">
                                                        <use xlinkHref="svg-icons/sprites/icons.svg#olymp-heart-icon" />
                                                    </svg>
                                                    <span>2</span>
                                                </a>
                                                <a href="#" className="reply">
                                                    Reply
                                                </a>
                                            </li>
                                            <li className="comment-item">
                                                <div className="post__author author vcard inline-items">
                                                    <img src="img/avatar2-sm.jpg" alt="author" />
                                                    <div className="author-date">
                                                        <a className="h6 post__author-name fn" href="#">
                                                            Nicholas Grisom
                                                        </a>
                                                        <div className="post__date">
                                                            <time
                                                                className="published"
                                                                dateTime="2017-03-24T18:18"
                                                            >
                                                                24 mins ago
                                                            </time>
                                                        </div>
                                                    </div>
                                                    <a href="#" className="more">
                                                        <svg className="olymp-three-dots-icon">
                                                            <use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                <p>Excepteur sint occaecat cupidatat non proident.</p>
                                                <a href="#" className="post-add-icon inline-items">
                                                    <svg className="olymp-heart-icon">
                                                        <use xlinkHref="svg-icons/sprites/icons.svg#olymp-heart-icon" />
                                                    </svg>
                                                    <span>0</span>
                                                </a>
                                                <a href="#" className="reply">
                                                    Reply
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="comment-item">
                                        <div className="post__author author vcard inline-items">
                                            <img src="img/avatar4-sm.jpg" alt="author" />
                                            <div className="author-date">
                                                <a className="h6 post__author-name fn" href="#">
                                                    Chris Greyson
                                                </a>
                                                <div className="post__date">
                                                    <time className="published" dateTime="2017-03-24T18:18">
                                                        1 hour ago
                                                    </time>
                                                </div>
                                            </div>
                                            <a href="#" className="more">
                                                <svg className="olymp-three-dots-icon">
                                                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                                                </svg>
                                            </a>
                                        </div>
                                        <p>
                                            Dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                            cupidatat non proident, sunt in culpa qui officia deserunt
                                            mollit.
                                        </p>
                                        <a href="#" className="post-add-icon inline-items">
                                            <svg className="olymp-heart-icon">
                                                <use xlinkHref="svg-icons/sprites/icons.svg#olymp-heart-icon" />
                                            </svg>
                                            <span>7</span>
                                        </a>
                                        <a href="#" className="reply">
                                            Reply
                                        </a>
                                    </li>
                                </ul>
                                {/* ... end Comments */}
                                <a href="#" className="more-comments">
                                    View more comments <span>+</span>
                                </a>
                                {/* Comment Form  */}
                                <form className="comment-form inline-items">
                                    <div className="post__author author vcard inline-items">
                                        <img src="img/author-page.jpg" alt="author" />
                                        <div className="form-group with-icon-right ">
                  <textarea
                      className="form-control"
                      placeholder
                      defaultValue={""}
                  />
                                            <div className="add-options-message">
                                                <a
                                                    href="#"
                                                    className="options-message"
                                                    data-toggle="modal"
                                                    data-target="#update-header-photo"
                                                >
                                                    <svg className="olymp-camera-icon">
                                                        <use xlinkHref="svg-icons/sprites/icons.svg#olymp-camera-icon" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn btn-md-2 btn-primary">Post Comment</button>
                                    <button className="btn btn-md-2 btn-border-think c-grey btn-transparent custom-color">
                                        Cancel
                                    </button>
                                </form>
                                {/* ... end Comment Form  */}{" "}
                            </div>
                            <div className="ui-block">
                                {/* Post */}
                                <article className="hentry post has-post-thumbnail shared-photo">
                                    <div className="post__author author vcard inline-items">
                                        <img src="img/author-page.jpg" alt="author" />
                                        <div className="author-date">
                                            <a
                                                className="h6 post__author-name fn"
                                                href="02-ProfilePage.html"
                                            >
                                                James Spiegel
                                            </a>{" "}
                                            shared
                                            <a href="#">Diana Jameson</a>’s <a href="#">photo</a>
                                            <div className="post__date">
                                                <time className="published" dateTime="2017-03-24T18:18">
                                                    7 hours ago
                                                </time>
                                            </div>
                                        </div>
                                        <div className="more">
                                            <svg className="olymp-three-dots-icon">
                                                <use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                                            </svg>
                                            <ul className="more-dropdown">
                                                <li>
                                                    <a href="#">Edit Post</a>
                                                </li>
                                                <li>
                                                    <a href="#">Delete Post</a>
                                                </li>
                                                <li>
                                                    <a href="#">Turn Off Notifications</a>
                                                </li>
                                                <li>
                                                    <a href="#">Select as Featured</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p>
                                        Hi! Everyone should check out these amazing photographs that my
                                        friend shot the past week. Here’s one of them...leave a kind
                                        comment!
                                    </p>
                                    <div className="post-thumb">
                                        <img src="img/post-photo6.jpg" alt="photo" />
                                    </div>
                                    <ul className="children single-children">
                                        <li className="comment-item">
                                            <div className="post__author author vcard inline-items">
                                                <img src="img/avatar8-sm.jpg" alt="author" />
                                                <div className="author-date">
                                                    <a className="h6 post__author-name fn" href="#">
                                                        Diana Jameson
                                                    </a>
                                                    <div className="post__date">
                                                        <time className="published" dateTime="2017-03-24T18:18">
                                                            16 hours ago
                                                        </time>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>
                                                Here’s the first photo of our incredible photoshoot from
                                                yesterday. If you like it please say so and tel me what you
                                                wanna see next!
                                            </p>
                                        </li>
                                    </ul>
                                    <div className="post-additional-info inline-items">
                                        <a href="#" className="post-add-icon inline-items">
                                            <svg className="olymp-heart-icon">
                                                <use xlinkHref="svg-icons/sprites/icons.svg#olymp-heart-icon" />
                                            </svg>
                                            <span>15</span>
                                        </a>
                                        <ul className="friends-harmonic">
                                            <li>
                                                <a href="#">
                                                    <img src="img/friend-harmonic5.jpg" alt="friend" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img src="img/friend-harmonic10.jpg" alt="friend" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img src="img/friend-harmonic7.jpg" alt="friend" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img src="img/friend-harmonic8.jpg" alt="friend" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img src="img/friend-harmonic2.jpg" alt="friend" />
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="names-people-likes">
                                            <a href="#">Diana</a>, <a href="#">Nicholas</a> and
                                            <br />
                                            13 more liked this
                                        </div>
                                        <div className="comments-shared">
                                            <a href="#" className="post-add-icon inline-items">
                                                <svg className="olymp-speech-balloon-icon">
                                                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-speech-balloon-icon" />
                                                </svg>
                                                <span>0</span>
                                            </a>
                                            <a href="#" className="post-add-icon inline-items">
                                                <svg className="olymp-share-icon">
                                                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-share-icon" />
                                                </svg>
                                                <span>16</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="control-block-button post-control-button">
                                        <a href="#" className="btn btn-control">
                                            <svg className="olymp-like-post-icon">
                                                <use xlinkHref="svg-icons/sprites/icons.svg#olymp-like-post-icon" />
                                            </svg>
                                        </a>
                                        <a href="#" className="btn btn-control">
                                            <svg className="olymp-comments-post-icon">
                                                <use xlinkHref="svg-icons/sprites/icons.svg#olymp-comments-post-icon" />
                                            </svg>
                                        </a>
                                        <a href="#" className="btn btn-control">
                                            <svg className="olymp-share-icon">
                                                <use xlinkHref="svg-icons/sprites/icons.svg#olymp-share-icon" />
                                            </svg>
                                        </a>
                                    </div>
                                </article>
                                {/* .. end Post */}{" "}
                            </div>
                        </div>
                        <a
                            id="load-more-button"
                            href="#"
                            className="btn btn-control btn-more"
                            data-load-link="items-to-load.html"
                            data-container="newsfeed-items-grid"
                        >
                            <svg className="olymp-three-dots-icon">
                                <use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                            </svg>
                        </a>
                    </div>
                    {/* ... end Main Content */}
                    {/* Left Sidebar */}
                    <div className="col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12">
                        <div className="ui-block">
                            <div className="ui-block-title">
                                <h6 className="title">Profile Intro</h6>
                            </div>
                            <div className="ui-block-content">
                                {/* W-Personal-Info */}
                                <ul className="widget w-personal-info item-block">
                                    <li>
                                        <span className="title">About Me:</span>
                                        <span className="text">
                  Hi, I’m James, I’m 36 and I work as a Digital Designer for the
                  “Daydreams” Agency in Pier 56.
                </span>
                                    </li>
                                    <li>
                                        <span className="title">Favourite TV Shows:</span>
                                        <span className="text">
                  Breaking Good, RedDevil, People of Interest, The Running Dead,
                  Found, American Guy.
                </span>
                                    </li>
                                    <li>
                                        <span className="title">Favourite Music Bands / Artists:</span>
                                        <span className="text">
                  Iron Maid, DC/AC, Megablow, The Ill, Kung Fighters, System of
                  a Revenge.
                </span>
                                    </li>
                                </ul>
                                {/* .. end W-Personal-Info */}
                                {/* W-Socials */}
                                <div className="widget w-socials">
                                    <h6 className="title">Other Social Networks:</h6>
                                    <a href="#" className="social-item bg-facebook">
                                        <i className="fab fa-facebook-f" aria-hidden="true" />
                                        Facebook
                                    </a>
                                    <a href="#" className="social-item bg-twitter">
                                        <i className="fab fa-twitter" aria-hidden="true" />
                                        Twitter
                                    </a>
                                    <a href="#" className="social-item bg-dribbble">
                                        <i className="fab fa-dribbble" aria-hidden="true" />
                                        Dribbble
                                    </a>
                                </div>
                                {/* ... end W-Socials */}
                            </div>
                        </div>
                        <div className="ui-block">
                            <div className="ui-block-title">
                                <h6 className="title">James’s Badges</h6>
                            </div>
                            <div className="ui-block-content">
                                {/* W-Badges */}
                                <ul className="widget w-badges">
                                    <li>
                                        <a href="24-CommunityBadges.html">
                                            <img src="img/badge1.png" alt="author" />
                                            <div className="label-avatar bg-primary">2</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="24-CommunityBadges.html">
                                            <img src="img/badge4.png" alt="author" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="24-CommunityBadges.html">
                                            <img src="img/badge3.png" alt="author" />
                                            <div className="label-avatar bg-blue">4</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="24-CommunityBadges.html">
                                            <img src="img/badge6.png" alt="author" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="24-CommunityBadges.html">
                                            <img src="img/badge11.png" alt="author" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="24-CommunityBadges.html">
                                            <img src="img/badge8.png" alt="author" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="24-CommunityBadges.html">
                                            <img src="img/badge10.png" alt="author" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="24-CommunityBadges.html">
                                            <img src="img/badge13.png" alt="author" />
                                            <div className="label-avatar bg-breez">2</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="24-CommunityBadges.html">
                                            <img src="img/badge7.png" alt="author" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="24-CommunityBadges.html">
                                            <img src="img/badge12.png" alt="author" />
                                        </a>
                                    </li>
                                </ul>
                                {/*.. end W-Badges */}
                            </div>
                        </div>
                        <div className="ui-block">
                            <div className="ui-block-title">
                                <h6 className="title">My Spotify Playlist</h6>
                            </div>
                            {/* W-Playlist */}
                            <ol className="widget w-playlist">
                                <li className="js-open-popup" data-popup-target=".playlist-popup">
                                    <div className="playlist-thumb">
                                        <img src="img/playlist6.jpg" alt="thumb-composition" />
                                        <div className="overlay" />
                                        <a href="#" className="play-icon">
                                            <svg className="olymp-music-play-icon-big">
                                                <use xlinkHref="svg-icons/sprites/icons-music.svg#olymp-music-play-icon-big" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="composition">
                                        <a href="#" className="composition-name">
                                            The Past Starts Slow...
                                        </a>
                                        <a href="#" className="composition-author">
                                            System of a Revenge
                                        </a>
                                    </div>
                                    <div className="composition-time">
                                        <time className="published" dateTime="2017-03-24T18:18">
                                            3:22
                                        </time>
                                        <div className="more">
                                            <svg className="olymp-three-dots-icon">
                                                <use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                                            </svg>
                                            <ul className="more-dropdown">
                                                <li>
                                                    <a href="#">Add Song to Player</a>
                                                </li>
                                                <li>
                                                    <a href="#">Add Playlist to Player</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="js-open-popup" data-popup-target=".playlist-popup">
                                    <div className="playlist-thumb">
                                        <img src="img/playlist7.jpg" alt="thumb-composition" />
                                        <div className="overlay" />
                                        <a href="#" className="play-icon">
                                            <svg className="olymp-music-play-icon-big">
                                                <use xlinkHref="svg-icons/sprites/icons-music.svg#olymp-music-play-icon-big" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="composition">
                                        <a href="#" className="composition-name">
                                            The Pretender
                                        </a>
                                        <a href="#" className="composition-author">
                                            Kung Fighters
                                        </a>
                                    </div>
                                    <div className="composition-time">
                                        <time className="published" dateTime="2017-03-24T18:18">
                                            5:48
                                        </time>
                                        <div className="more">
                                            <svg className="olymp-three-dots-icon">
                                                <use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                                            </svg>
                                            <ul className="more-dropdown">
                                                <li>
                                                    <a href="#">Add Song to Player</a>
                                                </li>
                                                <li>
                                                    <a href="#">Add Playlist to Player</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="js-open-popup" data-popup-target=".playlist-popup">
                                    <div className="playlist-thumb">
                                        <img src="img/playlist8.jpg" alt="thumb-composition" />
                                        <div className="overlay" />
                                        <a href="#" className="play-icon">
                                            <svg className="olymp-music-play-icon-big">
                                                <use xlinkHref="svg-icons/sprites/icons-music.svg#olymp-music-play-icon-big" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="composition">
                                        <a href="#" className="composition-name">
                                            Blood Brothers
                                        </a>
                                        <a href="#" className="composition-author">
                                            Iron Maid
                                        </a>
                                    </div>
                                    <div className="composition-time">
                                        <time className="published" dateTime="2017-03-24T18:18">
                                            3:06
                                        </time>
                                        <div className="more">
                                            <svg className="olymp-three-dots-icon">
                                                <use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                                            </svg>
                                            <ul className="more-dropdown">
                                                <li>
                                                    <a href="#">Add Song to Player</a>
                                                </li>
                                                <li>
                                                    <a href="#">Add Playlist to Player</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="js-open-popup" data-popup-target=".playlist-popup">
                                    <div className="playlist-thumb">
                                        <img src="img/playlist9.jpg" alt="thumb-composition" />
                                        <div className="overlay" />
                                        <a href="#" className="play-icon">
                                            <svg className="olymp-music-play-icon-big">
                                                <use xlinkHref="svg-icons/sprites/icons-music.svg#olymp-music-play-icon-big" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="composition">
                                        <a href="#" className="composition-name">
                                            Seven Nation Army
                                        </a>
                                        <a href="#" className="composition-author">
                                            The Black Stripes
                                        </a>
                                    </div>
                                    <div className="composition-time">
                                        <time className="published" dateTime="2017-03-24T18:18">
                                            6:17
                                        </time>
                                        <div className="more">
                                            <svg className="olymp-three-dots-icon">
                                                <use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                                            </svg>
                                            <ul className="more-dropdown">
                                                <li>
                                                    <a href="#">Add Song to Player</a>
                                                </li>
                                                <li>
                                                    <a href="#">Add Playlist to Player</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="js-open-popup" data-popup-target=".playlist-popup">
                                    <div className="playlist-thumb">
                                        <img src="img/playlist10.jpg" alt="thumb-composition" />
                                        <div className="overlay" />
                                        <a href="#" className="play-icon">
                                            <svg className="olymp-music-play-icon-big">
                                                <use xlinkHref="svg-icons/sprites/icons-music.svg#olymp-music-play-icon-big" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="composition">
                                        <a href="#" className="composition-name">
                                            Killer Queen
                                        </a>
                                        <a href="#" className="composition-author">
                                            Archiduke
                                        </a>
                                    </div>
                                    <div className="composition-time">
                                        <time className="published" dateTime="2017-03-24T18:18">
                                            5:40
                                        </time>
                                        <div className="more">
                                            <svg className="olymp-three-dots-icon">
                                                <use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                                            </svg>
                                            <ul className="more-dropdown">
                                                <li>
                                                    <a href="#">Add Song to Player</a>
                                                </li>
                                                <li>
                                                    <a href="#">Add Playlist to Player</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ol>
                            {/* .. end W-Playlist */}
                        </div>
                        <div className="ui-block">
                            <div className="ui-block-title">
                                <h6 className="title">Twitter Feed</h6>
                            </div>
                            {/* W-Twitter */}
                            <ul className="widget w-twitter">
                                <li className="twitter-item">
                                    <div className="author-folder">
                                        <img src="img/twitter-avatar1.png" alt="avatar" />
                                        <div className="author">
                                            <a href="#" className="author-name">
                                                Space Cowboy
                                            </a>
                                            <a href="#" className="group">
                                                @james_spiegelOK
                                            </a>
                                        </div>
                                    </div>
                                    <p>
                                        Tomorrow with the agency we will run 5 km for charity. Come and
                                        give us your support!
                                        <a href="#" className="link-post">
                                            #Daydream5K
                                        </a>
                                    </p>
                                    <span className="post__date">
                <time className="published" dateTime="2017-03-24T18:18">
                  2 hours ago
                </time>
              </span>
                                </li>
                                <li className="twitter-item">
                                    <div className="author-folder">
                                        <img src="img/twitter-avatar1.png" alt="avatar" />
                                        <div className="author">
                                            <a href="#" className="author-name">
                                                Space Cowboy
                                            </a>
                                            <a href="#" className="group">
                                                @james_spiegelOK
                                            </a>
                                        </div>
                                    </div>
                                    <p>
                                        Check out the new website of “The Bebop Bar”!{" "}
                                        <a href="#" className="link-post">
                                            bytle/thbp53f
                                        </a>
                                    </p>
                                    <span className="post__date">
                <time className="published" dateTime="2017-03-24T18:18">
                  16 hours ago
                </time>
              </span>
                                </li>
                                <li className="twitter-item">
                                    <div className="author-folder">
                                        <img src="img/twitter-avatar1.png" alt="avatar" />
                                        <div className="author">
                                            <a href="#" className="author-name">
                                                Space Cowboy
                                            </a>
                                            <a href="#" className="group">
                                                @james_spiegelOK
                                            </a>
                                        </div>
                                    </div>
                                    <p>
                                        The Sunday is the annual agency camping trip and I still haven’t
                                        got a tent
                                        <a href="#" className="link-post">
                                            #TheWild #Indoors
                                        </a>
                                    </p>
                                    <span className="post__date">
                <time className="published" dateTime="2017-03-24T18:18">
                  Yesterday
                </time>
              </span>
                                </li>
                            </ul>
                            {/* .. end W-Twitter */}
                        </div>
                        <div className="ui-block">
                            <div className="ui-block-title">
                                <h6 className="title">Last Videos</h6>
                            </div>
                            <div className="ui-block-content">
                                {/* W-Latest-Video */}
                                <ul className="widget w-last-video">
                                    <li>
                                        <a
                                            href="https://vimeo.com/ondemand/viewfromabluemoon4k/147865858"
                                            className="play-video play-video--small"
                                        >
                                            <svg className="olymp-play-icon">
                                                <use xlinkHref="svg-icons/sprites/icons.svg#olymp-play-icon" />
                                            </svg>
                                        </a>
                                        <img src="img/video8.jpg" alt="video" />
                                        <div className="video-content">
                                            <div className="title">
                                                System of a Revenge - Hypnotize...
                                            </div>
                                            <time className="published" dateTime="2017-03-24T18:18">
                                                3:25
                                            </time>
                                        </div>
                                        <div className="overlay" />
                                    </li>
                                    <li>
                                        <a
                                            href="https://youtube.com/watch?v=excVFQ2TWig"
                                            className="play-video play-video--small"
                                        >
                                            <svg className="olymp-play-icon">
                                                <use xlinkHref="svg-icons/sprites/icons.svg#olymp-play-icon" />
                                            </svg>
                                        </a>
                                        <img src="img/video7.jpg" alt="video" />
                                        <div className="video-content">
                                            <div className="title">Green Goo - Live at Dan’s Arena</div>
                                            <time className="published" dateTime="2017-03-24T18:18">
                                                5:48
                                            </time>
                                        </div>
                                        <div className="overlay" />
                                    </li>
                                </ul>
                                {/* .. end W-Latest-Video */}
                            </div>
                        </div>
                    </div>
                    {/* ... end Left Sidebar */}
                    {/* Right Sidebar */}
                    <div className="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="ui-block">
                            <div className="ui-block-title">
                                <h6 className="title">Last Photos</h6>
                            </div>
                            <div className="ui-block-content">
                                {/* W-Latest-Photo */}
                                <ul className="widget w-last-photo js-zoom-gallery">
                                    <li>
                                        <a href="img/last-photo10-large.jpg">
                                            <img src="img/last-photo10-large.jpg" alt="photo" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="img/last-phot11-large.jpg">
                                            <img src="img/last-phot11-large.jpg" alt="photo" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="img/last-phot12-large.jpg">
                                            <img src="img/last-phot12-large.jpg" alt="photo" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="img/last-phot13-large.jpg">
                                            <img src="img/last-phot13-large.jpg" alt="photo" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="img/last-phot14-large.jpg">
                                            <img src="img/last-phot14-large.jpg" alt="photo" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="img/last-phot15-large.jpg">
                                            <img src="img/last-phot15-large.jpg" alt="photo" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="img/last-phot16-large.jpg">
                                            <img src="img/last-phot16-large.jpg" alt="photo" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="img/last-phot17-large.jpg">
                                            <img src="img/last-phot17-large.jpg" alt="photo" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="img/last-phot18-large.jpg">
                                            <img src="img/last-phot18-large.jpg" alt="photo" />
                                        </a>
                                    </li>
                                </ul>
                                {/* .. end W-Latest-Photo */}
                            </div>
                        </div>
                        <div className="ui-block">
                            <div className="ui-block-title">
                                <h6 className="title">Blog Posts</h6>
                            </div>
                            {/* W-Blog-Posts */}
                            <ul className="widget w-blog-posts">
                                <li>
                                    <article className="hentry post">
                                        <a href="#" className="h4">
                                            My Perfect Vacations in South America and Europe
                                        </a>
                                        <p>
                                            Lorem ipsum dolor sit amet, consect adipisicing elit, sed do
                                            eiusmod por incidid ut labore et.
                                        </p>
                                        <div className="post__date">
                                            <time className="published" dateTime="2017-03-24T18:18">
                                                7 hours ago
                                            </time>
                                        </div>
                                    </article>
                                </li>
                                <li>
                                    <article className="hentry post">
                                        <a href="#" className="h4">
                                            The Big Experience of Travelling Alone
                                        </a>
                                        <p>
                                            Lorem ipsum dolor sit amet, consect adipisicing elit, sed do
                                            eiusmod por incidid ut labore et.
                                        </p>
                                        <div className="post__date">
                                            <time className="published" dateTime="2017-03-24T18:18">
                                                March 18th, at 6:52pm
                                            </time>
                                        </div>
                                    </article>
                                </li>
                            </ul>
                            {/* .. end W-Blog-Posts */}
                        </div>
                        <div className="ui-block">
                            <div className="ui-block-title">
                                <h6 className="title">Friends (86)</h6>
                            </div>
                            <div className="ui-block-content">
                                {/* W-Faved-Page */}
                                <ul className="widget w-faved-page js-zoom-gallery">
                                    <li>
                                        <a href="#">
                                            <img src="img/avatar38-sm.jpg" alt="author" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/avatar24-sm.jpg" alt="user" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/avatar36-sm.jpg" alt="author" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/avatar35-sm.jpg" alt="user" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/avatar34-sm.jpg" alt="author" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/avatar33-sm.jpg" alt="author" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/avatar32-sm.jpg" alt="user" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/avatar31-sm.jpg" alt="author" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/avatar30-sm.jpg" alt="author" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/avatar29-sm.jpg" alt="user" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/avatar28-sm.jpg" alt="user" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/avatar27-sm.jpg" alt="user" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/avatar26-sm.jpg" alt="user" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/avatar25-sm.jpg" alt="user" />
                                        </a>
                                    </li>
                                    <li className="all-users">
                                        <a href="#">+74</a>
                                    </li>
                                </ul>
                                {/* .. end W-Faved-Page */}
                            </div>
                        </div>
                        <div className="ui-block">
                            <div className="ui-block-title">
                                <h6 className="title">Favourite Pages</h6>
                            </div>
                            {/* W-Friend-Pages-Added */}
                            <ul className="widget w-friend-pages-added notification-list friend-requests">
                                <li className="inline-items">
                                    <div className="author-thumb">
                                        <img src="img/avatar41-sm.jpg" alt="author" />
                                    </div>
                                    <div className="notification-event">
                                        <a href="#" className="h6 notification-friend">
                                            The Marina Bar
                                        </a>
                                        <span className="chat-message-item">Restaurant / Bar</span>
                                    </div>
                                    <span
                                        className="notification-icon"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        data-original-title="ADD TO YOUR FAVS"
                                    >
                <a href="#">
                  <svg className="olymp-star-icon">
                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-star-icon" />
                  </svg>
                </a>
              </span>
                                </li>
                                <li className="inline-items">
                                    <div className="author-thumb">
                                        <img src="img/avatar42-sm.jpg" alt="author" />
                                    </div>
                                    <div className="notification-event">
                                        <a href="#" className="h6 notification-friend">
                                            Tapronus Rock
                                        </a>
                                        <span className="chat-message-item">Rock Band</span>
                                    </div>
                                    <span
                                        className="notification-icon"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        data-original-title="ADD TO YOUR FAVS"
                                    >
                <a href="#">
                  <svg className="olymp-star-icon">
                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-star-icon" />
                  </svg>
                </a>
              </span>
                                </li>
                                <li className="inline-items">
                                    <div className="author-thumb">
                                        <img src="img/avatar43-sm.jpg" alt="author" />
                                    </div>
                                    <div className="notification-event">
                                        <a href="#" className="h6 notification-friend">
                                            Pixel Digital Design
                                        </a>
                                        <span className="chat-message-item">Company</span>
                                    </div>
                                    <span
                                        className="notification-icon"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        data-original-title="ADD TO YOUR FAVS"
                                    >
                <a href="#">
                  <svg className="olymp-star-icon">
                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-star-icon" />
                  </svg>
                </a>
              </span>
                                </li>
                                <li className="inline-items">
                                    <div className="author-thumb">
                                        <img src="img/avatar44-sm.jpg" alt="author" />
                                    </div>
                                    <div className="notification-event">
                                        <a href="#" className="h6 notification-friend">
                                            Thompson’s Custom Clothing Boutique
                                        </a>
                                        <span className="chat-message-item">Clothing Store</span>
                                    </div>
                                    <span
                                        className="notification-icon"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        data-original-title="ADD TO YOUR FAVS"
                                    >
                <a href="#">
                  <svg className="olymp-star-icon">
                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-star-icon" />
                  </svg>
                </a>
              </span>
                                </li>
                                <li className="inline-items">
                                    <div className="author-thumb">
                                        <img src="img/avatar45-sm.jpg" alt="author" />
                                    </div>
                                    <div className="notification-event">
                                        <a href="#" className="h6 notification-friend">
                                            Crimson Agency
                                        </a>
                                        <span className="chat-message-item">Company</span>
                                    </div>
                                    <span
                                        className="notification-icon"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        data-original-title="ADD TO YOUR FAVS"
                                    >
                <a href="#">
                  <svg className="olymp-star-icon">
                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-star-icon" />
                  </svg>
                </a>
              </span>
                                </li>
                                <li className="inline-items">
                                    <div className="author-thumb">
                                        <img src="img/avatar46-sm.jpg" alt="author" />
                                    </div>
                                    <div className="notification-event">
                                        <a href="#" className="h6 notification-friend">
                                            Mannequin Angel
                                        </a>
                                        <span className="chat-message-item">Clothing Store</span>
                                    </div>
                                    <span
                                        className="notification-icon"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        data-original-title="ADD TO YOUR FAVS"
                                    >
                <a href="#">
                  <svg className="olymp-star-icon">
                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-star-icon" />
                  </svg>
                </a>
              </span>
                                </li>
                            </ul>
                            {/* .. end W-Friend-Pages-Added */}
                        </div>
                        <div className="ui-block">
                            <div className="ui-block-title">
                                <h6 className="title">James's Poll</h6>
                            </div>
                            <div className="ui-block-content">
                                {/* W-Pool */}
                                <ul className="widget w-pool">
                                    <li>
                                        <p>
                                            If you had to choose, which actor do you prefer to be the next
                                            Darkman?{" "}
                                        </p>
                                    </li>
                                    <li>
                                        <div className="skills-item">
                                            <div className="skills-item-info">
                    <span className="skills-item-title">
                      <span className="radio">
                        <label>
                          <input type="radio" name="optionsRadios" />
                          Thomas Bale
                        </label>
                      </span>
                    </span>
                                                <span className="skills-item-count">
                      <span
                          className="count-animate"
                          data-speed={1000}
                          data-refresh-interval={50}
                          data-to={62}
                          data-from={0}
                      />
                      <span className="units">62%</span>
                    </span>
                                            </div>
                                            <div className="skills-item-meter">
                    <span
                        className="skills-item-meter-active bg-primary"
                        style={{ width: "62%" }}
                    />
                                            </div>
                                            <div className="counter-friends">
                                                12 friends voted for this
                                            </div>
                                            <ul className="friends-harmonic">
                                                <li>
                                                    <a href="#">
                                                        <img src="img/friend-harmonic1.jpg" alt="friend" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="img/friend-harmonic2.jpg" alt="friend" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="img/friend-harmonic3.jpg" alt="friend" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="img/friend-harmonic4.jpg" alt="friend" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="img/friend-harmonic5.jpg" alt="friend" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="img/friend-harmonic6.jpg" alt="friend" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="img/friend-harmonic7.jpg" alt="friend" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="img/friend-harmonic8.jpg" alt="friend" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="img/friend-harmonic9.jpg" alt="friend" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="all-users">
                                                        +3
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="skills-item">
                                            <div className="skills-item-info">
                    <span className="skills-item-title">
                      <span className="radio">
                        <label>
                          <input type="radio" name="optionsRadios" />
                          Ben Robertson
                        </label>
                      </span>
                    </span>
                                                <span className="skills-item-count">
                      <span
                          className="count-animate"
                          data-speed={1000}
                          data-refresh-interval={50}
                          data-to={27}
                          data-from={0}
                      />
                      <span className="units">27%</span>
                    </span>
                                            </div>
                                            <div className="skills-item-meter">
                    <span
                        className="skills-item-meter-active bg-primary"
                        style={{ width: "27%" }}
                    />
                                            </div>
                                            <div className="counter-friends">
                                                7 friends voted for this
                                            </div>
                                            <ul className="friends-harmonic">
                                                <li>
                                                    <a href="#">
                                                        <img src="img/friend-harmonic7.jpg" alt="friend" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="img/friend-harmonic8.jpg" alt="friend" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="img/friend-harmonic9.jpg" alt="friend" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="img/friend-harmonic10.jpg" alt="friend" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="img/friend-harmonic11.jpg" alt="friend" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="img/friend-harmonic12.jpg" alt="friend" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="img/friend-harmonic13.jpg" alt="friend" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="skills-item">
                                            <div className="skills-item-info">
                    <span className="skills-item-title">
                      <span className="radio">
                        <label>
                          <input type="radio" name="optionsRadios" />
                          Michael Streiton
                        </label>
                      </span>
                    </span>
                                                <span className="skills-item-count">
                      <span
                          className="count-animate"
                          data-speed={1000}
                          data-refresh-interval={50}
                          data-to={11}
                          data-from={0}
                      />
                      <span className="units">11%</span>
                    </span>
                                            </div>
                                            <div className="skills-item-meter">
                    <span
                        className="skills-item-meter-active bg-primary"
                        style={{ width: "11%" }}
                    />
                                            </div>
                                            <div className="counter-friends">2 people voted for this</div>
                                            <ul className="friends-harmonic">
                                                <li>
                                                    <a href="#">
                                                        <img src="img/friend-harmonic14.jpg" alt="friend" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="img/friend-harmonic15.jpg" alt="friend" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                                {/* .. end W-Pool */}
                                <a
                                    href="#"
                                    className="btn btn-md-2 btn-border-think custom-color c-grey full-width"
                                >
                                    Vote Now!
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* ... end Right Sidebar */}
                </div>
            </div>
            {/* Window-popup Update Header Photo */}
            <div
                className="modal fade"
                id="update-header-photo"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="update-header-photo"
                aria-hidden="true"
            >
                <div
                    className="modal-dialog window-popup update-header-photo"
                    role="document"
                >
                    <div className="modal-content">
                        <a
                            href="#"
                            className="close icon-close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <svg className="olymp-close-icon">
                                <use xlinkHref="svg-icons/sprites/icons.svg#olymp-close-icon" />
                            </svg>
                        </a>
                        <div className="modal-header">
                            <h6 className="title">Update Header Photo</h6>
                        </div>
                        <div className="modal-body">
                            <a href="#" className="upload-photo-item">
                                <svg className="olymp-computer-icon">
                                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-computer-icon" />
                                </svg>
                                <h6>Upload Photo</h6>
                                <span>Browse your computer.</span>
                            </a>
                            <a
                                href="#"
                                className="upload-photo-item"
                                data-toggle="modal"
                                data-target="#choose-from-my-photo"
                            >
                                <svg className="olymp-photos-icon">
                                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-photos-icon" />
                                </svg>
                                <h6>Choose from My Photos</h6>
                                <span>Choose from your uploaded photos</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* ... end Window-popup Update Header Photo */}
        </div>

);
}


export default Header;