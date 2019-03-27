/**
 * Module to handle tealium integration in mobile
 */
(function (window, bbbmw, $, undefined) {
    bbbmw.promises = bbbmw.promises || {};
    bbbmw.tealium = (function () {

        var injectTealiumScript = function (noview) {
            window.utag_cfg_ovrd = window.utag_cfg_ovrd || {};
            window.utag_cfg_ovrd.noview = noview;
            var a = $('#tealiumConfigPath').val();
            if (a) {
                var b = document,
                    c = 'script',
                    d = b.createElement(c);
                d.src = a; d.type = 'text/java' + c;
                d.async = true;
                a = b.getElementsByTagName(c)[0];
                a.parentNode.insertBefore(d, a);
            }
        };

        var eventNameMap = {
            ADD_TO_CART: "add to cart",
            ADD_TO_REGISTRY: "add to registry",
            SAVE_FOR_LATER: "SFL",
            UPDATE: "update",
            REMOVE: "remove",
            MOVE_TO_CART: "move to cart",
            MOVE_TO_REGISTRY: "move to registry",
            PERSONALIZATION: "personalization",
            CHECKOUT: "checkout",
            VIEW_ITEM_DETAILS: "view item details"
        };

        var getCTAData = function (data, event_name) {
            var ctaData = {};
            ctaData['call_to_actiontype'] = event_name;
            ctaData['site_id'] = data['site_id'] || '';
            ctaData['customer_email'] = data['customer_email'] || '';
            ctaData['profile_id'] = data['profile_id'] || '';
            ctaData['customer_country'] = data['customer_country'] || '';
            ctaData['currency_code'] = data['currency_code'] || '';
            ctaData['page_name'] = data['page_name'] || '';
            ctaData['page_type'] = data['page_type'] || '';
            ctaData['registry_id'] = data['registry_id'] || '';
            ctaData['account_type'] = data['account_type'] || '';
            ctaData['device_os'] = data['device_os'] || '';
            return ctaData;
        }


        var mergeDynamicAndStaticData = function (dynamicTealiumData) {
            var staticTealiumData = $('#staticTealiumData').val();
            try {
                dynamicTealiumData = JSON.parse(dynamicTealiumData);
                staticTealiumData = JSON.parse(staticTealiumData);
            } catch (ex) {
                // supress parse error
            }
            if (window.utag) {
                var staticUtagData = $.extend({}, dynamicTealiumData,
                    staticTealiumData);
                utag.view(staticUtagData);
            }
        };

        var mergeDynamicStaticAndCartData = function (cartCount, dynamicTealiumData) {
            var staticTealiumData = $('#staticTealiumData').val();
            try {
                dynamicTealiumData = JSON.parse(dynamicTealiumData);
                staticTealiumData = JSON.parse(staticTealiumData);
            }
            catch (ex) {
            }

            if (window.utag) {
                var staticUtagData = $.extend({}, dynamicTealiumData, {
                    "cart_total_items": cartCount
                }, staticTealiumData);
                utag.view(staticUtagData);
            }
        };
        /*
        var mergeDynamicStaticRegistryAndCartData = function (cartCount, dynamicTealiumData, checklistPercent){
            var staticTealiumData = $('#staticTealiumData').val();
            try {
                    dynamicTealiumData = JSON.parse(dynamicTealiumData);
                    staticTealiumData = JSON.parse(staticTealiumData);
            }
            catch(ex){
            }

            if (window.utag) {
                checklistPercent =checklistPercent + '%';
                var staticUtagData = $.extend({},dynamicTealiumData, {
                    "cart_total_items": cartCount,
                    "registry_checklist_%" : checklistPercent
                }, staticTealiumData);
                utag.view(staticUtagData);
            }
        };*/
        var mergeDynamicAndCartData = function (cartCount, dynamicTealiumData) {
            try {
                dynamicTealiumData = JSON.parse(dynamicTealiumData);
            }
            catch (ex) {
                // supress parse error
            }

            if (window.utag) {
                var staticUtagData = $.extend({}, dynamicTealiumData, {
                    cart_total_items: cartCount
                });
                utag.view(staticUtagData);
            }
        };

        var renderStaticData = function () {
            var staticTealiumData = $('#staticTealiumData').val();
            try {
                staticTealiumData = JSON.parse(staticTealiumData);
            }
            catch (ex) {
                // supress parse error
            }
            if (window.utag && staticTealiumData) {
                utag.view(staticTealiumData);
            }

        };
        var renderConfirmationData = function () {
            var staticTealiumData = $('#regConfirmTealiumData').val();
            try {
                staticTealiumData = JSON.parse(staticTealiumData);
            }
            catch (ex) {
                // supress parse error
            }
            if (window.utag && staticTealiumData) {
                utag.view(staticTealiumData);
            }

        };
        var mergeStaticAndCartData = function (cartCount) {
            var staticTealiumData = $('#staticTealiumData').val();
            try {
                staticTealiumData = JSON.parse(staticTealiumData);
            } catch (ex) {
                // supress parse error
            }
            if (window.utag) {
                var staticUtagData = $.extend({}, staticTealiumData, {
                    cart_total_items: cartCount
                });
                utag.view(staticUtagData);
            }
        };

        /**
         * Function to merge utag data for order preview toggle flyover
         * on single ship checkout.
         */
        var mergeSingleShipOrderPreviewData = function () {
            var staticTealiumData = $('#staticTealiumData').val();
            try {
                staticTealiumData = JSON.parse(staticTealiumData);
                staticTealiumData = $.extend(staticTealiumData, { page_name: "OrderPreview" });
            }
            catch (ex) {
                // supress parse error
            }
            if (window.utag && staticTealiumData) {
                utag.link(staticTealiumData);
            }
        };

        /**
         * Function to handle utag data merging for multishiping checkout page.
         *
         * @param {String} elemId Id of element from which to fetch data.
         * @param {Boolean} view wether its a view call by default its a link call.
         */
        var mergeMultiShipData = function (elemId, view) {
            var dynamicTealiumData = $('#dynamicTealiumData').val();
            var staticTealiumData = $('#' + elemId).val()
            try {
                staticTealiumData = JSON.parse(staticTealiumData);
                dynamicTealiumData = JSON.parse(dynamicTealiumData);
                staticTealiumData = $.extend(dynamicTealiumData, staticTealiumData);
            }
            catch (ex) {
                // supress parse error
            }
            if (window.utag && staticTealiumData) {
                if (view) {
                    utag.view(staticTealiumData);
                } else {
                    utag.link(staticTealiumData);
                }
            }
        };


        var getAddressData = function (tealiumAddressData) {
            var shippingAddress2 = '', shippingAddress3 = '';
            if (tealiumAddressData.shippingAddress.address2) {
                shippingAddress2 = ' ' + tealiumAddressData.shippingAddress.address2;
            }
            if (tealiumAddressData.shippingAddress.address3) {
                shippingAddress3 = ' ' + tealiumAddressData.shippingAddress.address3;
            }
            customer_ship_address = tealiumAddressData.shippingAddress.address1 + shippingAddress2 + shippingAddress3;
            var shippingAddress = {
                customer_ship_name: tealiumAddressData.shippingAddress.firstName + ' ' + tealiumAddressData.shippingAddress.lastName,
                customer_ship_address: customer_ship_address,
                customer_ship_city: tealiumAddressData.shippingAddress.city,
                customer_ship_state: tealiumAddressData.shippingAddress.state,
                customer_ship_postal_code: tealiumAddressData.shippingAddress.postalCode,
                customer_ship_country: tealiumAddressData.shippingAddress.country
            }

            var billingAddress = {
                customer_bill_name: tealiumAddressData.billingAddress.firstName + ' ' + tealiumAddressData.billingAddress.lastName,
                customer_bill_state: tealiumAddressData.billingAddress.state,
                customer_bill_postal_code: tealiumAddressData.billingAddress.postalCode,
                customer_bill_country: tealiumAddressData.billingAddress.country
            }

            var address = { shippingAddress: shippingAddress, billingAddress: billingAddress };

            return address;
        };

        var mergeShippingDynamicStaticData = function (tealiumAddressData, dynamicTealiumData) {

            var tealiumAddressData = getAddressData(tealiumAddressData);
            var shippingRefinedData = tealiumAddressData.shippingAddress;
            var billingRefinedData = tealiumAddressData.billingAddress;
            var staticTealiumData = $('#staticTealiumData').val();

            try {
                staticTealiumData = JSON.parse(staticTealiumData);
                dynamicTealiumData = JSON.parse(dynamicTealiumData);
                shippingRefinedData = JSON.parse(shippingRefinedData);
                billingRefinedData = JSON.parse(billingRefinedData);

            }
            catch (ex) {
                // supress parse error
            }
            if (window.utag) {
                var staticUtagData = $.extend({}, dynamicTealiumData, shippingRefinedData, billingRefinedData, staticTealiumData);
                utag.view(staticUtagData);
            }
        };

        var mergeRegistryOwnerData = function (registryOwnerStaticTealiumData, registryOwnerItemsTealiumData) {
            var registryOwnerRegistrantTealiumData = $('#registryOwnerRegistrantTealiumData').val();
            try {
                registryOwnerStaticTealiumData = JSON.parse(registryOwnerStaticTealiumData);
                registryOwnerItemsTealiumData = JSON.parse(registryOwnerItemsTealiumData);
                registryOwnerRegistrantTealiumData = JSON.parse(registryOwnerRegistrantTealiumData);
            } catch (ex) {
                // supress parse error
            }
            if (window.utag) {
                var staticUtagData = $.extend({}, registryOwnerStaticTealiumData, registryOwnerItemsTealiumData, registryOwnerRegistrantTealiumData);
                utag.view(staticUtagData);
            }
        };

        var onUtagJsLoaded = function (cb, maxTimeOut) {
            var interval = 500, tCurrentTimeOut = 0, timer;
            maxTimeOut = maxTimeOut || 2000;
            function checkUtag() {
                if (tCurrentTimeOut > maxTimeOut) {
                    return;
                }
                if (window.utag) {
                    cb();
                    return;
                }
                tCurrentTimeOut += interval;
                timer && clearTimeout(timer);
                timer = setTimeout(checkUtag, interval);
            }
            checkUtag();
            return;
        };

        var callToAction = function (ctaType, tObj) {
            if (bbbmw.configKeys.tealiumEnabled !== 'true' || !eventNameMap[ctaType]) {
                return;
            }
            switch (ctaType) {
                case 'ADD_TO_CART':
                case 'ADD_TO_REGISTRY':
                case 'SAVE_FOR_LATER':
                case 'UPDATE':
                case 'REMOVE':
                case 'MOVE_TO_CART':
                case 'MOVE_TO_REGISTRY':
                case 'PERSONALIZATION':
                case 'CHECKOUT':
                case 'VIEW_ITEM_DETAILS':
                    onUtagJsLoaded(function () {
                        obj = getCTAData(tObj, eventNameMap[ctaType]);
                        utag.link(obj);
                    }, 5000);
                    break;
                default:
                    //do nothing
                    break;
            }
        }


        var tealiumView = function (pageName) {
            var dynamicContentData = bbbmw.promises.dynamicContentPromise;
            pageName = pageName || $('#pageName').val();

            if (!bbbmw.promises.hasDynamicContent) {
                dynamicContentData = $('#dynamicTealiumData').val();
                bbbmw.promises.dynamicContentPromise.resolve(dynamicContentData);
            }
            switch (pageName) {
                case 'wishlist':
                case 'shoppingCart':
                case 'productList':
                case 'staticPage':
                case 'contactUs':
                case 'internationalShippingInfo':
                case 'shippingInfo':
                case 'checkoutConfirmation':
                case 'spcOrderConfirmation':
                    $.when(dynamicContentData)
                        .done(mergeDynamicAndStaticData);
                    break;
                case 'categoryLanding':
                case 'CollegeLandingPage':
                case 'brandResult':
                case 'productDetail':
                case 'productDetailAccessories':
                case 'productDetailCollection':
                case 'everliving':
                case 'everlivingaccessories':
                case 'everlivingcollection':
                case 'searchResult':
                case 'homePage':
                    $.when(bbbmw.promises.cartCountPromise, dynamicContentData)
                        .done(mergeDynamicStaticAndCartData);
                    break;
                case 'singleShipCheckout':
                case 'orderDetail':
                case 'trackOrderDetail':
                case 'myaccountcouponspage':
                case 'findAStore':
                case 'addressBook':
                case 'creditCards':
                case 'kickstarters':
                case 'sddLandingPage':
                    renderStaticData();
                    break;
                case 'createRegistry':
                    $.when(bbbmw.promises.cartCountPromise)
                        .done(mergeStaticAndCartData);
                    break;
                case 'myAccount':
                    $.when(bbbmw.promises.shippingContentPromise, dynamicContentData)
                        .done(mergeShippingDynamicStaticData);
                    break;
                case 'singleShipOrderPreview':
                    mergeSingleShipOrderPreviewData();
                    break;
                case 'checkout':
                    // view call on page load.
                    mergeMultiShipData('staticTealiumDataMultiShipping', true);
                    break;
                case 'multiShipping':
                    // link call on accodian open
                    mergeMultiShipData('staticTealiumDataMultiShipping');
                    break;
                case 'multiShipPreview':
                    mergeMultiShipData('staticTealiumDataOrderPreview');
                    break;
                case 'multiShipBilling':
                    mergeMultiShipData('staticTealiumDataBilling');
                    break;
                case 'registrantView':
                    /*if ($('#regConfirmTealiumData')[0]) {
                        renderConfirmationData();
                    }*/
                    bbbmw.promises.staticRegistryPromise = $.Deferred();
                    $.when(bbbmw.promises.staticRegistryPromise, bbbmw.promises.itemsRegistryPromise)
                        .done(mergeRegistryOwnerData);
                    break;
                default:
                    // do nothing
                    break;
            }
        };

        var initTealium = function () {
            if (bbbmw.configKeys.tealiumEnabled === 'true') {
                injectTealiumScript(true);
                onUtagJsLoaded(function () {
                    tealiumView();
                }, 5000);
            }
        };

        $(function () {
            initTealium();
        });

        return {
            init: initTealium,
            tealiumView: tealiumView,
            callToAction: callToAction
        };
    })();
}(window, bbbmw, $));