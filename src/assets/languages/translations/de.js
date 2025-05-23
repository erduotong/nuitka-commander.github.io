// noinspection JSUnusedGlobalSymbols

/**
 * @Description Deutsch Sprachpaket (LLM Übersetzung)
 * @Author: erduotong
 * @Date: 2023-11-26 11:09:00
 */
export default {
    website_info: { // Verschiedene Informationen anzeigen
        supported_to_nuitka_version: "Unterstützung der Nuitka-Version",
        report_issue: "Problem melden",
        nuitka_website: "Nuitka Webseite",
        get_involved: "Mitwirken",
        changelog: "Änderungsprotokoll",
        project_homepage: "Projekt-Homepage",
        github_website: "Auf web verwenden",
        local_use: "Lokale Nutzung",
        current_version_author: "Aktuelle Version Beitragende",
        open_source_license: "Open-Source-Lizenz",
        long_info: {
            license: "Wir verwenden die GPLv3 Open-Source-Lizenz, die vollständige Lizenz können Sie hier einsehen:",
            author: "Bis zur aktuellen Version danken wir den folgenden Beitragenden für ihre Beiträge zu diesem Projekt (in keiner bestimmten Reihenfolge):",
        },
    },
    setting: { // Einstellungsseite
        guide: {
            title: "Anleitung",
            start: "Anleitung starten",
        },
        theme: {
            auto: "System folgen",
            light: "Helles Thema",
            dark: "Dunkles Thema",
            theme: "Thema",
        },
        language: {
            title: "Sprache",
            interface_language: "Oberflächensprache",
            command_language: "Befehlsprache",
        },
        nuitka_language_no_support: "Die aktuelle Nuitka-Version unterstützt diese Sprache nicht",
        storage: {
            title: "Speichereinstellungen",
            user: "Benutzereinstellungen",
            reset_user: "Benutzereinstellungen zurücksetzen",
            command: "Befehlseinstellungen",
            reset_command: "Befehlseinstellungen zurücksetzen",
        },
    },
    nav_bar: { // Navigationsleiste
        mode: {
            easy_mode: "Einfacher Modus",
            full_mode: "Vollständiger Modus",
            info: {
                l1: "Soll die vollständige Befehlsliste angezeigt werden",
                l2: "Einfacher Modus: Zeigt häufig verwendete Nuitka-Optionen",
                l3: "Komplexer Modus: Zeigt alle verfügbaren Optionen",
            },
            show_raw_command: "Rohbefehl anzeigen",
            no_show_raw_command: "Rohbefehl ausblenden",
            show_raw_command_info: "Soll der Rohbefehl in allen Optionen angezeigt werden",
        },
        now_nuitka_version: "Aktuell ausgewählte Konfigurationsdateiversion:",
        select_nuitka_version: "Wählen Sie die von Ihnen verwendete Nuitka-Version",
    },
    tabs: {
        edit: "Bearbeiten",
        output: "Ausgabe",
        input: "Eingabe",
    },
    input_page: {
        input_from_cli: "Von der Befehlszeile importieren",
        start_input: "Import starten",
        please_input_cli_command: "Bitte geben Sie den Nuitka-Befehlszeilenbefehl ein",
        general: {
            unable_parse_check: "Die bereitgestellten Daten enthalten nicht erkennbare Attribute. Bitte überprüfen Sie, ob die eingegebenen Daten den Anforderungen entsprechen oder geben Sie sie manuell ein",
            please_check_down: "Die bereitgestellten Daten enthalten nicht erkennbare Attribute. Bitte überprüfen Sie unten",
        },
        json: {
            input_from_json: "Von JSON importieren",
            please_input_json: "Bitte geben Sie die von dieser Website exportierten JSON-Daten ein",
            json_parse_error: "JSON-Parsing fehlgeschlagen. Bitte überprüfen Sie, ob die eingegebenen Daten dem JSON-Format entsprechen",
        },
        cli: {
            wait_bash_parser: "Bitte warten Sie, bis der Bash-Parser geladen ist",
            unsupported_operate: "Eingabefehler - nicht unterstützter Operator, bitte überprüfen Sie Ihre Eingabe",
            error_command: "Eingabefehler - Befehlsfehler, bitte stellen Sie sicher, dass Ihr Befehl korrekt ist und Sie die richtige Nuitka-Version ausgewählt haben",
        },
    },
    nuitka_elements: {
        select_placeholder: "Auswählen",
        not_selected: "Nicht ausgewählt",
        selected: "Ausgewählt",
        user_provide: "Dies ist Ihre benutzerdefinierte Option",
        add_option: "Eine Option hinzufügen",
        input_an_option: "Eine Option eingeben",
        option_desc: "Optionsbeschreibung",
    },
    message: {
        will_del_option: "Sie sind dabei, diese benutzerdefinierte Option zu löschen",
        continue_del: "Möchten Sie fortfahren?",
        warning: "Warnung",
        OK: "Bestätigen",
        cancel: "Abbrechen",
        cancel_del: "Löschen abgebrochen",
        del_success: "Erfolgreich gelöscht",
        have_been_created: "Diese Option existiert bereits!",
        drop_file: "Datei hierher ziehen",
        or: "oder",
        click_select_file: "Datei auswählen",
        next_step: "Nächster Schritt",
        prev_step: "Vorheriger Schritt",
        data_input_success: "Daten erfolgreich importiert",
        calling: "Wird aufgerufen, bitte warten",
    },
    output_page: {
        run_nuitka_through_python: "Nuitka über Python ausführen",
        CLI: "Befehlszeilenausgabe",
        JSON: "JSON-Ausgabe",
    },
    // Benutzeranleitung
    website_guide: {
        start: {
            title: "Benutzeranleitung",
            desc: "Willkommen bei Nuitka Commander, klicken Sie als nächstes auf die untere rechte Ecke, um Schritt für Schritt zu lernen, wie man es benutzt",
        },
        navbar: {
            title: "Navigationsleiste",
            desc: "Dies ist die Navigationsleiste, in der einige globale Funktionen eingestellt sind",
        },
        navbar_original_command: {
            title: "Navigationsleiste - Rohbefehl umschalten",
            desc: "Hier können Sie umschalten, ob der ursprüngliche Nuitka-Befehl zur einfachen Ansicht angezeigt werden soll. Sie können es ausprobieren",
        },
        navbar_version_select: {
            title: "Navigationsleiste - Versionsauswahl",
            desc: "Im Auswahlfeld rechts können Sie verschiedene Versionen von Nuitka auswählen. Sie können die Konfigurationsdatei finden, die zu Ihrer Version passt. Wenn Sie einen einfacheren Befehl möchten, können Sie 'Einfacher Modus' unten auswählen",
        },
        navbar_settings_button: {
            title: "Navigationsleiste - Einstellungsbutton",
            desc: "Klicken Sie auf diesen Button, um zur Einstellungsseite zu gelangen",
        },
        settings_page: {
            title: "Einstellungsseite",
            desc: "Als nächstes ist die Einstellungsseite",
        },
        settings_page_intro: {
            title: "Einstellungsseite - Einführung",
            desc: "Dies ist die Einstellungsoberfläche, in der Sie Ihre gewünschten Einstellungen anpassen können",
        },
        settings_page_tour: {
            title: "Einstellungsseite - Anleitung",
            desc: "Um die Anleitung in Zukunft erneut anzuzeigen, können Sie hier klicken",
        },
        edit_page_buffer: {
            title: "Bearbeitungsseite",
            desc: "Als nächstes ist die Bearbeitungsseite",
        },
        edit_page_intro: {
            title: "Bearbeitungsseite - Einführung",
            desc: "Dies ist die Bearbeitungsseite, auf der Sie Ihre Nuitka-Befehle konfigurieren können. Sie können links klicken, um die Befehlsgruppen zu wechseln und in der Mitte Befehle bearbeiten",
        },
        edit_page_edit_box: {
            title: "Bearbeitungsseite - Bearbeitungsfeld",
            desc: "Hier gibt es viele Bearbeitungsfelder, die jeweils einen Parameter darstellen. Wenn Sie die Maus darüber bewegen, wird eine detaillierte Einführung angezeigt. Probieren Sie es jetzt aus",
        },
        output_page_intro: {
            title: "Ausgabeseite - Einführung",
            desc: "Dies ist die Ausgabeseite, auf der Sie die Ausgaberesultate der gerade bearbeiteten Befehle erhalten können. Sie können links klicken, um den Ausgabetyp zu wechseln und den Ausgabebefehl in der Mitte anzeigen. Klicken Sie oben rechts, um den Befehl direkt zu kopieren. Natürlich können Sie auch die Maus über jedes Element bewegen, um detaillierte Einführungen anzuzeigen.",
        },
        input_page_intro: {
            title: "Eingabeseite - Einführung",
            desc: "Dies ist die Eingabeseite, auf der Sie Befehle eingeben und dann in Nuitka Commander zur Bearbeitung importieren können. Sie können links klicken, um den Eingabetyp zu wechseln und oben rechts mit dem Import beginnen.",
        },
        website_footer: {
            title: "Webseiten-Fußzeile",
            desc: "Dies ist die Webseiten-Fußzeile, in der Sie einige nützliche Links finden können, wie die Nuitka-Webseite und die Projekt-Homepage. Sie können auch die Versionsnummer des Projekts, die Autoren und andere Informationen finden",
        },
        end: {
            title: "Ende",
            desc: "Die Anleitung endet hier, danke für Ihre Nutzung. Wenn Sie Fragen oder Vorschläge haben, können Sie gerne ein Issue auf GitHub erstellen",
        },
    },
    search: { // Suche
        search_placeholder: "Suche",
        please_input: "Bitte geben Sie den Suchinhalt ein",
        no_result: "Keine Optionen mit diesem Schlüsselwort gefunden",
        try_keyword: "Bitte versuchen Sie es mit anderen Schlüsselwörtern erneut",
        jump: "Springen",
        select: "Auswählen",
        exit: "Beenden",
    },
    // Konfigurationsdateiversionstitel, wenn Sie möchten, können Sie jeder Version einen Titel geben. Wenn nicht, wird der Standard-Schlüsselname verwendet
    nuitka_config_title: {
        simple: "Einfacher Modus",
    },
};